/**
 * Shade Finder interactive controller.
 *
 * Responsibilities:
 *  - Swatches ↔ Models toggle (swaps visible image layer via data-view attribute)
 *  - Usage + Skin Tone filter pills (AND logic, hides non-matching cards)
 *  - Arrow navigation (prev/next page of 4 visible cards, updates aria-disabled)
 *  - Mobile touch-swipe (horizontal drag → navigate)
 *  - Announces filter result count to screen readers via aria-live region
 *
 * No external dependencies. Alpine.js is NOT used here because the section
 * needs to work as a standalone custom element that initialises after Alpine
 * has already processed the page.
 */

class ShadeFinder extends HTMLElement {
  connectedCallback() {
    this.#init();
  }

  disconnectedCallback() {
    this.#teardown();
  }

  /* ── Private state ── */
  #view = 'models';
  #activeUsage = 'all';
  #activeTone = 'all';
  #page = 0;
  #perPage = 4;
  #abortController = new AbortController();

  /* ── Bootstrap ── */
  #init() {
    const signal = this.#abortController.signal;

    this.#view = this.dataset.defaultView || 'models';
    this.dataset.view = this.#view;

    this.#bindToggle(signal);
    this.#bindPills(signal);
    this.#bindArrows(signal);
    this.#bindSwipe(signal);
    this.#updateArrows();
    this.#updateToggleState();
  }

  #teardown() {
    this.#abortController.abort();
  }

  /* ── Toggle (Swatches / Models) ── */
  #bindToggle(signal) {
    const track = this.querySelector('.shade-finder__toggle-track');
    if (!track) return;

    track.addEventListener('click', () => this.#flipView(), { signal });
    track.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.#flipView();
      }
    }, { signal });

    /* Clicking either label also flips the toggle */
    this.querySelectorAll('.shade-finder__toggle-label').forEach((label) => {
      label.addEventListener('click', () => {
        const target = label.dataset.view;
        if (target && target !== this.#view) this.#flipView();
      }, { signal });
    });
  }

  #flipView() {
    this.#view = this.#view === 'models' ? 'swatches' : 'models';
    this.dataset.view = this.#view;
    this.#updateToggleState();
  }

  #updateToggleState() {
    const track = this.querySelector('.shade-finder__toggle-track');
    if (!track) return;
    const isModels = this.#view === 'models';
    /* aria-checked = true means the toggle is in the "Models" position */
    track.setAttribute('aria-checked', String(isModels));
  }

  /* ── Filter pills ── */
  #bindPills(signal) {
    this.querySelectorAll('.shade-finder__pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        const group = pill.dataset.group;
        const value = pill.dataset.value;

        if (group === 'usage') {
          this.#activeUsage = value;
        } else if (group === 'tone') {
          this.#activeTone = value;
        }

        /* Update aria-pressed on all pills in this group */
        this.querySelectorAll(`.shade-finder__pill[data-group="${group}"]`).forEach((p) => {
          p.setAttribute('aria-pressed', String(p.dataset.value === value));
        });

        this.#page = 0;
        this.#applyFilters();
        this.#updateArrows();
        this.#announceResults();
      }, { signal });
    });
  }

  /* ── Filter logic ── */
  #applyFilters() {
    const cards = this.#allCards();
    let visible = 0;

    for (const card of cards) {
      const usages = (card.dataset.usage || '').split(',').map((s) => s.trim());
      const tones = (card.dataset.tone || '').split(',').map((s) => s.trim());

      const usageMatch = this.#activeUsage === 'all' || usages.includes(this.#activeUsage);
      const toneMatch = this.#activeTone === 'all' || tones.includes(this.#activeTone) || tones.includes('all');

      if (usageMatch && toneMatch) {
        card.removeAttribute('data-hidden');
        visible++;
      } else {
        card.setAttribute('data-hidden', 'true');
      }
    }

    /* Show/hide empty state */
    const empty = this.querySelector('.shade-finder__empty');
    if (empty) empty.hidden = visible > 0;
  }

  /* ── Arrow navigation ── */
  #bindArrows(signal) {
    const prev = this.querySelector('.shade-finder__arrow--prev');
    const next = this.querySelector('.shade-finder__arrow--next');

    if (prev) {
      prev.addEventListener('click', () => {
        if (this.#page > 0) {
          this.#page--;
          this.#applyPage();
          this.#updateArrows();
        }
      }, { signal });
    }

    if (next) {
      next.addEventListener('click', () => {
        const maxPage = this.#maxPage();
        if (this.#page < maxPage) {
          this.#page++;
          this.#applyPage();
          this.#updateArrows();
        }
      }, { signal });
    }
  }

  #applyPage() {
    const visible = this.#visibleCards();
    const start = this.#page * this.#perPage;
    const end = start + this.#perPage;

    visible.forEach((card, i) => {
      card.style.display = (i >= start && i < end) ? '' : 'none';
    });
  }

  #updateArrows() {
    const prev = this.querySelector('.shade-finder__arrow--prev');
    const next = this.querySelector('.shade-finder__arrow--next');
    const maxPage = this.#maxPage();

    if (prev) {
      const disabled = this.#page === 0;
      prev.setAttribute('aria-disabled', String(disabled));
    }
    if (next) {
      const disabled = this.#page >= maxPage;
      next.setAttribute('aria-disabled', String(disabled));
    }
  }

  #maxPage() {
    const count = this.#visibleCards().length;
    return Math.max(0, Math.ceil(count / this.#perPage) - 1);
  }

  /* ── Touch swipe ── */
  #bindSwipe(signal) {
    let startX = 0;
    let startY = 0;
    let tracking = false;

    this.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      tracking = true;
    }, { signal, passive: true });

    this.addEventListener('touchmove', (e) => {
      if (!tracking) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      /* Only prevent scroll when horizontal swipe is dominant */
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        e.preventDefault();
      }
    }, { signal, passive: false });

    this.addEventListener('touchend', (e) => {
      if (!tracking) return;
      tracking = false;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx < 0 && this.#page < this.#maxPage()) {
          this.#page++;
          this.#applyPage();
          this.#updateArrows();
        } else if (dx > 0 && this.#page > 0) {
          this.#page--;
          this.#applyPage();
          this.#updateArrows();
        }
      }
    }, { signal });
  }

  /* ── Accessibility announcement ── */
  #announceResults() {
    const region = this.querySelector('.shade-finder__sr-announce');
    if (!region) return;
    const count = this.#visibleCards().length;
    region.textContent = '';
    /* Force re-announcement by toggling content */
    requestAnimationFrame(() => {
      region.textContent = `${count} shade${count !== 1 ? 's' : ''} found`;
    });
  }

  /* ── Helpers ── */
  #allCards() {
    return [...this.querySelectorAll('.shade-finder__card')];
  }

  #visibleCards() {
    return this.#allCards().filter((c) => !c.hasAttribute('data-hidden'));
  }
}

customElements.define('shade-finder', ShadeFinder);
