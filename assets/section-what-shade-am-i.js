(function () {
  'use strict';

  const MOBILE_BREAKPOINT = 768;

  class WhatShadeSection {
    constructor(root) {
      this.root = root;
      this.viewport = root.querySelector('[data-viewport]');
      this.track = root.querySelector('[data-track]');
      this.cards = this.track ? Array.from(this.track.querySelectorAll('[data-card]')) : [];
      this.emptyState = root.querySelector('[data-empty]');
      this.prevBtn = root.querySelector('[data-nav="prev"]');
      this.nextBtn = root.querySelector('[data-nav="next"]');
      this.pills = Array.from(root.querySelectorAll('[data-filter]'));
      this.viewToggle = root.querySelector('[data-view-toggle]');
      this.toggleLabels = Array.from(root.querySelectorAll('[data-toggle-label]'));

      this.filters = { usage: 'all', skin_tone: 'all' };
      this.view = 'swatches';
      this.pageIndex = 0;
      this.visibleCards = this.cards.slice();

      this.onResize = this.debounce(this.updateLayout.bind(this), 150);

      this.init();
    }

    init() {
      if (!this.cards.length) {
        this.showEmptyState();
        this.hideNav();
        return;
      }

      this.pills.forEach((pill) => {
        pill.addEventListener('click', (e) => this.onPillClick(e));
      });

      if (this.viewToggle) {
        this.viewToggle.addEventListener('click', () => this.toggleView());
      }

      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.navigate(-1));
      }
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.navigate(1));
      }

      window.addEventListener('resize', this.onResize);

      this.updateToggleLabels();
      this.applyFilters();
    }

    debounce(fn, wait) {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
      };
    }

    onPillClick(e) {
      const pill = e.currentTarget;
      const filterKey = pill.dataset.filter;
      const value = pill.dataset.value;

      if (!filterKey || !value) return;

      this.filters[filterKey] = value;

      this.pills.forEach((p) => {
        if (p.dataset.filter === filterKey) {
          const isActive = p.dataset.value === value;
          p.classList.toggle('is-active', isActive);
          p.setAttribute('aria-pressed', String(isActive));
        }
      });

      this.applyFilters();
    }

    applyFilters() {
      const { usage, skin_tone } = this.filters;

      this.visibleCards = this.cards.filter((card) => {
        const cardSkin = (card.dataset.skinTone || '').trim();
        const cardUsage = (card.dataset.usage || '').toLowerCase();

        const skinPass = skin_tone === 'all' || cardSkin === skin_tone;
        let usagePass = usage === 'all';
        if (!usagePass) {
          const tags = cardUsage.split(',').map((t) => t.trim()).filter(Boolean);
          usagePass = tags.indexOf(usage) !== -1;
        }
        return skinPass && usagePass;
      });

      this.cards.forEach((card) => {
        const isVisible = this.visibleCards.indexOf(card) !== -1;
        if (isVisible) {
          card.hidden = false;
          requestAnimationFrame(() => card.classList.remove('is-filtering-out'));
        } else {
          card.classList.add('is-filtering-out');
          card.hidden = true;
        }
      });

      this.pageIndex = 0;
      this.updateLayout();
    }

    updateLayout() {
      const count = this.visibleCards.length;

      if (count === 0) {
        this.showEmptyState();
        this.hideNav();
        if (this.track) this.track.style.transform = '';
        return;
      }

      this.hideEmptyState();

      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      const perView = isMobile ? 1 : 4;

      if (!isMobile && count <= 3) {
        this.track.classList.add('is-centered');
        this.hideNav();
        this.track.style.transform = '';
        return;
      }

      this.track.classList.remove('is-centered');

      if (count <= perView) {
        this.hideNav();
        this.track.style.transform = '';
        return;
      }

      this.showNav();
      this.applyTranslate();
    }

    applyTranslate() {
      if (!this.track || !this.visibleCards.length) return;

      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      const perView = isMobile ? 1 : 4;
      const maxIndex = Math.max(0, this.visibleCards.length - perView);

      if (this.pageIndex > maxIndex) this.pageIndex = maxIndex;
      if (this.pageIndex < 0) this.pageIndex = 0;

      const firstCard = this.visibleCards[0];
      if (!firstCard) return;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(this.track).gap) || 0;
      const step = cardWidth + gap;

      this.track.style.transform = `translateX(${-(step * this.pageIndex)}px)`;

      if (this.prevBtn) this.prevBtn.toggleAttribute('disabled', this.pageIndex === 0);
      if (this.nextBtn) this.nextBtn.toggleAttribute('disabled', this.pageIndex >= maxIndex);
    }

    navigate(dir) {
      this.pageIndex += dir;
      this.applyTranslate();
    }

    showNav() {
      if (this.prevBtn) this.prevBtn.classList.remove('is-hidden');
      if (this.nextBtn) this.nextBtn.classList.remove('is-hidden');
    }

    hideNav() {
      if (this.prevBtn) this.prevBtn.classList.add('is-hidden');
      if (this.nextBtn) this.nextBtn.classList.add('is-hidden');
    }

    showEmptyState() {
      if (this.emptyState) this.emptyState.hidden = false;
    }

    hideEmptyState() {
      if (this.emptyState) this.emptyState.hidden = true;
    }

    toggleView() {
      this.view = this.view === 'swatches' ? 'models' : 'swatches';
      const isModels = this.view === 'models';

      if (this.viewToggle) {
        this.viewToggle.setAttribute('aria-checked', String(isModels));
      }

      this.updateToggleLabels();

      this.cards.forEach((card) => {
        const swatchLayer = card.querySelector('[data-layer="swatches"]');
        const modelLayer = card.querySelector('[data-layer="models"]');

        if (swatchLayer) swatchLayer.classList.toggle('is-active', !isModels);
        if (modelLayer) modelLayer.classList.toggle('is-active', isModels);

        if (!swatchLayer && modelLayer) modelLayer.classList.add('is-active');
        if (!modelLayer && swatchLayer) swatchLayer.classList.add('is-active');
      });
    }

    updateToggleLabels() {
      const isModels = this.view === 'models';
      this.toggleLabels.forEach((label) => {
        const key = label.dataset.toggleLabel;
        const isActive =
          (key === 'swatches' && !isModels) || (key === 'models' && isModels);
        label.style.fontWeight = isActive ? '700' : '400';
        label.style.opacity = isActive ? '1' : '0.6';
      });
    }
  }

  function initAll() {
    document.querySelectorAll('[data-shade-section]').forEach((el) => {
      if (!el.dataset.shadeInit) {
        el.dataset.shadeInit = '1';
        new WhatShadeSection(el);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  document.addEventListener('shopify:section:load', (e) => {
    const sec = e.target.querySelector('[data-shade-section]');
    if (sec && !sec.dataset.shadeInit) {
      sec.dataset.shadeInit = '1';
      new WhatShadeSection(sec);
    }
  });
})();
