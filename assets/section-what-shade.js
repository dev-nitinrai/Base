/* sections/new-section.liquid — "What Shade Am I?" interactions */

(function () {
  'use strict';

  const sections = document.querySelectorAll('[data-what-shade]');
  if (!sections.length) return;

  sections.forEach(initSection);

  function initSection(root) {
    const toggle = root.querySelector('[data-view-toggle]');
    const toggleWrap = root.querySelector('.what-shade__toggle-wrap');
    const cards = Array.from(root.querySelectorAll('[data-card]'));
    const viewport = root.querySelector('[data-carousel-viewport]');
    const track = root.querySelector('[data-carousel-track]');
    const prevBtn = root.querySelector('[data-carousel-prev]');
    const nextBtn = root.querySelector('[data-carousel-next]');
    const emptyEl = root.querySelector('[data-empty]');
    const carouselEl = root.querySelector('[data-carousel]');
    const filterGroups = root.querySelectorAll('[data-filter-group]');

    if (!track || !viewport) return;

    const state = {
      view: 'swatches',
      usage: 'all',
      tone: 'all',
      index: 0,
      perView: computePerView(),
      visibleCards: cards.slice()
    };

    setView('swatches', true);
    applyFilters();

    // --- view toggle ---
    if (toggle) {
      toggle.addEventListener('click', () => {
        const next = state.view === 'swatches' ? 'models' : 'swatches';
        setView(next);
      });
    }

    // --- filter pills ---
    filterGroups.forEach((group) => {
      const groupKey = group.getAttribute('data-filter-group'); // 'usage' | 'tone'
      const pills = group.querySelectorAll('[data-filter-value]');
      pills.forEach((pill) => {
        pill.addEventListener('click', () => {
          const value = pill.getAttribute('data-filter-value');
          pills.forEach((p) => {
            const isActive = p === pill;
            p.classList.toggle('is-active', isActive);
            p.setAttribute('aria-pressed', isActive ? 'true' : 'false');
          });
          state[groupKey] = value;
          state.index = 0;
          applyFilters();
        });
      });
    });

    // --- chevrons ---
    if (prevBtn) prevBtn.addEventListener('click', () => move(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => move(1));

    // --- resize handling ---
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        state.perView = computePerView();
        state.index = 0;
        updateTrack();
        updateChevrons();
      }, 120);
    });

    // =====================================================

    function computePerView() {
      return window.matchMedia('(min-width: 768px)').matches ? 4 : 1;
    }

    function setView(view, skipAnim) {
      state.view = view;
      const isModels = view === 'models';
      if (toggle) toggle.setAttribute('aria-checked', isModels ? 'true' : 'false');
      if (toggleWrap) toggleWrap.setAttribute('data-view', view);

      cards.forEach((card) => {
        const swatch = card.querySelector('[data-media-swatches]');
        const model = card.querySelector('[data-media-models]');
        if (swatch) swatch.classList.toggle('is-visible', !isModels);
        if (model) model.classList.toggle('is-visible', isModels);
      });

      if (skipAnim) {
        // no-op; CSS transitions still fine on first paint
      }
    }

    function applyFilters() {
      const visible = [];
      cards.forEach((card) => {
        const usageAttr = (card.getAttribute('data-usage') || '').trim();
        const toneAttr = (card.getAttribute('data-tone') || '').trim();
        const usageList = usageAttr ? usageAttr.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean) : [];

        const usagePass = state.usage === 'all' || usageList.indexOf(state.usage) !== -1;
        const tonePass = state.tone === 'all' || toneAttr === state.tone;
        const pass = usagePass && tonePass;

        card.hidden = !pass;
        if (pass) visible.push(card);
      });

      state.visibleCards = visible;

      // Reorder DOM so visible cards are in document order at the start of track,
      // which keeps transform-based slider math simple.
      visible.forEach((card) => track.appendChild(card));
      cards.forEach((card) => {
        if (card.hidden) track.appendChild(card);
      });

      if (emptyEl) emptyEl.hidden = visible.length > 0;

      state.index = 0;
      updateTrack();
      updateChevrons();
    }

    function move(dir) {
      const maxIndex = Math.max(0, state.visibleCards.length - state.perView);
      state.index = clamp(state.index + dir, 0, maxIndex);
      updateTrack();
      updateChevrons();
    }

    function updateTrack() {
      const visibleCount = state.visibleCards.length;
      const perView = state.perView;
      const showChevrons = visibleCount > perView;

      // Center the track when there are fewer visible cards than perView
      if (carouselEl) {
        carouselEl.setAttribute('data-centered', visibleCount > 0 && visibleCount <= perView ? 'true' : 'false');
      }

      if (!visibleCount || !showChevrons) {
        track.style.transform = 'translateX(0px)';
        return;
      }

      const firstVisible = state.visibleCards[0];
      if (!firstVisible) return;
      const cardRect = firstVisible.getBoundingClientRect();
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '16') || 16;
      const step = cardRect.width + gap;
      const offset = -1 * state.index * step;
      track.style.transform = 'translateX(' + offset + 'px)';
    }

    function updateChevrons() {
      const visibleCount = state.visibleCards.length;
      const showChevrons = visibleCount > state.perView;

      if (prevBtn) {
        prevBtn.hidden = !showChevrons;
        prevBtn.disabled = state.index <= 0;
      }
      if (nextBtn) {
        const maxIndex = Math.max(0, visibleCount - state.perView);
        nextBtn.hidden = !showChevrons;
        nextBtn.disabled = state.index >= maxIndex;
      }
    }

    function clamp(v, min, max) {
      return Math.min(Math.max(v, min), max);
    }
  }
})();
