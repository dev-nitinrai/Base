(function () {
  function initSection(root) {
    if (!root || root.dataset.wsaiInit === '1') return;
    root.dataset.wsaiInit = '1';

    const viewport = root.querySelector('[data-viewport]');
    const track = root.querySelector('[data-track]');
    const cards = Array.from(root.querySelectorAll('[data-shade-card]'));
    const prevBtn = root.querySelector('[data-nav="prev"]');
    const nextBtn = root.querySelector('[data-nav="next"]');
    const emptyState = root.querySelector('[data-empty]');
    const pills = Array.from(root.querySelectorAll('[data-filter]'));
    const toggleBtn = root.querySelector('[data-view-toggle]');
    const toggleLabels = Array.from(root.querySelectorAll('[data-toggle-label]'));

    if (!viewport || !track) return;

    const state = {
      usage: 'all',
      skin_tone: 'all',
      view: 'swatches',
      pageIndex: 0
    };

    function getPerView() {
      return window.matchMedia('(min-width: 768px)').matches ? 4 : 1;
    }

    function getVisibleCards() {
      return cards.filter(function (c) {
        return !c.hasAttribute('hidden');
      });
    }

    function cardPasses(card) {
      const usageAttr = (card.dataset.usageTags || '').toLowerCase();
      const skinAttr = (card.dataset.skinTone || '').toLowerCase();

      const usagePass =
        state.usage === 'all' ||
        usageAttr.split(',').map(function (s) { return s.trim(); }).indexOf(state.usage) !== -1;

      const skinPass = state.skin_tone === 'all' || skinAttr === state.skin_tone;

      return usagePass && skinPass;
    }

    function applyFilters() {
      cards.forEach(function (card) {
        if (cardPasses(card)) {
          card.removeAttribute('hidden');
        } else {
          card.setAttribute('hidden', '');
        }
      });

      state.pageIndex = 0;
      updateLayout();
    }

    function updateLayout() {
      const visible = getVisibleCards();
      const count = visible.length;
      const perView = getPerView();

      if (count === 0) {
        track.style.transform = '';
        track.removeAttribute('data-centered');
        if (emptyState) emptyState.removeAttribute('hidden');
        if (prevBtn) prevBtn.setAttribute('hidden', '');
        if (nextBtn) nextBtn.setAttribute('hidden', '');
        return;
      }

      if (emptyState) emptyState.setAttribute('hidden', '');

      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      const shouldCenter = isDesktop && count > 0 && count < 4;

      if (shouldCenter) {
        track.setAttribute('data-centered', 'true');
        track.style.transform = '';
        if (prevBtn) prevBtn.setAttribute('hidden', '');
        if (nextBtn) nextBtn.setAttribute('hidden', '');
        state.pageIndex = 0;
        return;
      }

      track.removeAttribute('data-centered');

      if (count <= perView) {
        track.style.transform = '';
        if (prevBtn) prevBtn.setAttribute('hidden', '');
        if (nextBtn) nextBtn.setAttribute('hidden', '');
        state.pageIndex = 0;
        return;
      }

      if (prevBtn) prevBtn.removeAttribute('hidden');
      if (nextBtn) nextBtn.removeAttribute('hidden');

      const maxPage = Math.max(0, count - perView);
      if (state.pageIndex > maxPage) state.pageIndex = maxPage;

      const firstVisible = visible[0];
      if (!firstVisible) {
        track.style.transform = '';
        return;
      }

      const cardRect = firstVisible.getBoundingClientRect();
      const trackStyles = window.getComputedStyle(track);
      const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || '0') || 0;
      const step = cardRect.width + gap;
      const offset = step * state.pageIndex;

      track.style.transform = 'translateX(-' + offset + 'px)';

      if (prevBtn) {
        if (state.pageIndex <= 0) {
          prevBtn.setAttribute('disabled', '');
        } else {
          prevBtn.removeAttribute('disabled');
        }
      }
      if (nextBtn) {
        if (state.pageIndex >= maxPage) {
          nextBtn.setAttribute('disabled', '');
        } else {
          nextBtn.removeAttribute('disabled');
        }
      }
    }

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        const group = pill.dataset.filter;
        const value = pill.dataset.value;

        pills.forEach(function (p) {
          if (p.dataset.filter === group) {
            const active = p === pill;
            p.classList.toggle('is-active', active);
            p.setAttribute('aria-pressed', active ? 'true' : 'false');
          }
        });

        state[group] = value;
        applyFilters();
      });
    });

    function setView(view) {
      state.view = view;
      const isModels = view === 'models';
      toggleBtn.setAttribute('aria-checked', isModels ? 'true' : 'false');

      toggleLabels.forEach(function (label) {
        const isActive = label.dataset.toggleLabel === view;
        label.classList.toggle('is-active', isActive);
      });

      root.querySelectorAll('[data-shade-card]').forEach(function (card) {
        const swatchLayer = card.querySelector('.what-shade-am-i__media-layer--swatch');
        const modelLayer = card.querySelector('.what-shade-am-i__media-layer--model');
        if (swatchLayer) swatchLayer.classList.toggle('is-visible', !isModels);
        if (modelLayer) modelLayer.classList.toggle('is-visible', isModels);
      });
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        setView(state.view === 'swatches' ? 'models' : 'swatches');
      });
    }

    toggleLabels.forEach(function (label) {
      label.addEventListener('click', function () {
        setView(label.dataset.toggleLabel);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (state.pageIndex > 0) {
          state.pageIndex -= 1;
          updateLayout();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        const perView = getPerView();
        const count = getVisibleCards().length;
        const maxPage = Math.max(0, count - perView);
        if (state.pageIndex < maxPage) {
          state.pageIndex += 1;
          updateLayout();
        }
      });
    }

    let resizeTimer = null;
    window.addEventListener('resize', function () {
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () {
        updateLayout();
      }, 120);
    });

    setView('swatches');
    applyFilters();
  }

  function initAll() {
    document.querySelectorAll('.what-shade-am-i').forEach(initSection);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  document.addEventListener('shopify:section:load', function (event) {
    const section = event.target.querySelector('.what-shade-am-i');
    if (section) initSection(section);
  });
})();
