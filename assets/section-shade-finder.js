/**
 * Shade Finder interactive carousel with filter and toggle logic.
 * Manages usage/skin-tone filtering, swatches/models toggle, and
 * a custom CSS-transform carousel with prev/next navigation.
 */
class ShadeFinder extends HTMLElement {
  connectedCallback() {
    this.track = this.querySelector('.shade-finder__track');
    this.slides = Array.from(this.querySelectorAll('.shade-finder__slide'));
    this.prevBtn = this.querySelector('.shade-finder__nav--prev');
    this.nextBtn = this.querySelector('.shade-finder__nav--next');
    this.noResults = this.querySelector('.shade-finder__no-results');

    this.activeUsage = 'all';
    this.activeTone = 'all';
    this.showSwatches = false;
    this.currentIndex = 0;

    this.#bindFilters();
    this.#bindToggle();
    this.#bindNav();
    this.#applyFilters();
  }

  #bindFilters() {
    this.querySelectorAll('[data-filter-usage]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.activeUsage = btn.dataset.filterUsage;
        this.#setActiveBtn(btn, '[data-filter-usage]');
        this.#applyFilters();
      });
    });

    this.querySelectorAll('[data-filter-tone]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.activeTone = btn.dataset.filterTone;
        this.#setActiveBtn(btn, '[data-filter-tone]');
        this.#applyFilters();
      });
    });
  }

  #setActiveBtn(activeEl, selector) {
    this.querySelectorAll(selector).forEach((btn) => {
      const isActive = btn === activeEl;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      btn.classList.toggle('is-active', isActive);
    });
  }

  #bindToggle() {
    this.querySelectorAll('.shade-finder__toggle-input').forEach((input) => {
      input.addEventListener('change', () => {
        this.showSwatches = input.checked;
        this.querySelectorAll('.shade-finder__toggle-input').forEach((i) => {
          i.checked = this.showSwatches;
        });
        this.#applyFilters();
      });
    });
  }

  #bindNav() {
    this.prevBtn?.addEventListener('click', () => {
      this.currentIndex = Math.max(0, this.currentIndex - 1);
      this.#updateCarousel();
    });

    this.nextBtn?.addEventListener('click', () => {
      const visible = this.#visibleSlides();
      const perPage = this.#perPage();
      const maxIndex = Math.max(0, visible.length - perPage);
      this.currentIndex = Math.min(maxIndex, this.currentIndex + 1);
      this.#updateCarousel();
    });
  }

  #visibleSlides() {
    return this.slides.filter((s) => !s.hidden);
  }

  #perPage() {
    const w = window.innerWidth;
    if (w < 750) return 1;
    if (w < 990) return 2;
    return 4;
  }

  #applyFilters() {
    this.slides.forEach((slide) => {
      const usages = (slide.dataset.usage || '').split(',').map((u) => u.trim());
      const tones = (slide.dataset.tone || '').split(',').map((t) => t.trim());
      const imageType = slide.dataset.imageType || 'model';

      const usageMatch = this.activeUsage === 'all' || usages.includes(this.activeUsage);
      const toneMatch = this.activeTone === 'all' || tones.includes(this.activeTone);
      const typeMatch = this.showSwatches ? imageType === 'swatch' : imageType === 'model';

      const visible = usageMatch && toneMatch && typeMatch;
      slide.hidden = !visible;
    });

    this.currentIndex = 0;
    this.#updateCarousel();

    const hasVisible = this.#visibleSlides().length > 0;
    if (this.noResults) {
      this.noResults.classList.toggle('is-visible', !hasVisible);
    }
  }

  #updateCarousel() {
    const visible = this.#visibleSlides();
    const perPage = this.#perPage();
    const maxIndex = Math.max(0, visible.length - perPage);
    this.currentIndex = Math.min(this.currentIndex, maxIndex);

    if (visible.length === 0) {
      if (this.prevBtn) this.prevBtn.disabled = true;
      if (this.nextBtn) this.nextBtn.disabled = true;
      return;
    }

    const slideWidth = visible[0]?.offsetWidth || 0;
    const gap = 20;
    const offset = this.currentIndex * (slideWidth + gap);

    if (this.track) {
      this.track.style.transform = `translateX(-${offset}px)`;
    }

    if (this.prevBtn) this.prevBtn.disabled = this.currentIndex <= 0;
    if (this.nextBtn) this.nextBtn.disabled = this.currentIndex >= maxIndex;
  }
}

customElements.define('shade-finder', ShadeFinder);
