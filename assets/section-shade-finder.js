class ShadeFinder extends HTMLElement {
  constructor() {
    super();
    this.view = this.dataset.defaultView === 'models' ? 'models' : 'swatches';
    this.usage = 'all';
    this.tone = 'all';
    this.index = 0;
    this.perView = 4;
    this.resizeHandler = this.handleResize.bind(this);
  }

  connectedCallback() {
    this.track = this.querySelector('[data-track]');
    this.viewport = this.querySelector('[data-viewport]');
    this.cards = Array.from(this.querySelectorAll('[data-shade-card]'));
    this.empty = this.querySelector('[data-empty]');
    this.prevBtn = this.querySelector('[data-chevron-prev]');
    this.nextBtn = this.querySelector('[data-chevron-next]');
    this.toggleBtn = this.querySelector('[data-view-toggle]');
    this.toggleLabels = Array.from(this.querySelectorAll('[data-view-label]'));
    this.usagePills = Array.from(this.querySelectorAll('[data-filter-usage]'));
    this.tonePills = Array.from(this.querySelectorAll('[data-filter-tone]'));
    this.carousel = this.querySelector('[data-carousel]');

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggleView());
    }
    this.toggleLabels.forEach(label => {
      label.addEventListener('click', () => {
        const v = label.dataset.viewLabel;
        if (v) this.setView(v);
      });
    });

    this.usagePills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.usage = pill.dataset.filterUsage || 'all';
        this.syncPills(this.usagePills, 'filterUsage', this.usage);
        this.index = 0;
        this.recompute();
      });
    });

    this.tonePills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.tone = pill.dataset.filterTone || 'all';
        this.syncPills(this.tonePills, 'filterTone', this.tone);
        this.index = 0;
        this.recompute();
      });
    });

    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

    window.addEventListener('resize', this.resizeHandler);

    this.applyView();
    this.computePerView();
    this.recompute();
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  handleResize() {
    this.computePerView();
    this.recompute();
  }

  computePerView() {
    this.perView = window.matchMedia('(min-width: 768px)').matches ? 4 : 1;
  }

  syncPills(pills, key, activeValue) {
    pills.forEach(p => {
      const isActive = p.dataset[key] === activeValue;
      p.classList.toggle('is-active', isActive);
      p.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  setView(v) {
    if (v !== 'swatches' && v !== 'models') return;
    this.view = v;
    this.applyView();
  }

  toggleView() {
    this.setView(this.view === 'swatches' ? 'models' : 'swatches');
  }

  applyView() {
    this.classList.toggle('is-view-models', this.view === 'models');
    this.classList.toggle('is-view-swatches', this.view === 'swatches');

    if (this.toggleBtn) {
      this.toggleBtn.setAttribute('aria-checked', this.view === 'models' ? 'true' : 'false');
    }
    this.toggleLabels.forEach(label => {
      label.classList.toggle('is-active', label.dataset.viewLabel === this.view);
    });
  }

  cardMatches(card) {
    const usageAttr = (card.dataset.usage || '').split(',').map(s => s.trim()).filter(Boolean);
    const toneAttr = (card.dataset.tone || '').trim();
    const usageOk = this.usage === 'all' || usageAttr.includes(this.usage);
    const toneOk = this.tone === 'all' || toneAttr === this.tone;
    return usageOk && toneOk;
  }

  recompute() {
    const visible = [];
    for (const card of this.cards) {
      const matches = this.cardMatches(card);
      card.hidden = !matches;
      card.classList.toggle('is-visible', matches);
      if (matches) visible.push(card);
    }
    this.visibleCards = visible;
    this.visibleCount = visible.length;

    if (this.empty) {
      this.empty.hidden = this.visibleCount !== 0;
    }
    if (this.carousel) {
      this.carousel.classList.toggle('is-centered', this.visibleCount > 0 && this.visibleCount <= 3);
      this.carousel.classList.toggle('is-empty', this.visibleCount === 0);
    }

    const canScroll = this.visibleCount > this.perView;
    if (this.prevBtn) this.prevBtn.classList.toggle('is-hidden', !canScroll);
    if (this.nextBtn) this.nextBtn.classList.toggle('is-hidden', !canScroll);

    if (!canScroll) {
      this.index = 0;
    } else {
      const maxIndex = Math.max(0, this.visibleCount - this.perView);
      if (this.index > maxIndex) this.index = maxIndex;
    }

    this.applyOffset();
  }

  applyOffset() {
    if (!this.track) return;

    if (this.visibleCount === 0 || this.visibleCount <= this.perView) {
      this.track.style.transform = 'translateX(0px)';
      if (this.prevBtn) this.prevBtn.disabled = true;
      if (this.nextBtn) this.nextBtn.disabled = true;
      return;
    }

    const target = this.visibleCards[this.index];
    if (!target) {
      this.track.style.transform = 'translateX(0px)';
      return;
    }

    const trackRect = this.track.getBoundingClientRect();
    const cardRect = target.getBoundingClientRect();
    const currentTransform = this.getCurrentTranslateX();
    const cardLeftInTrack = cardRect.left - trackRect.left - currentTransform;
    const offset = -cardLeftInTrack;
    this.track.style.transform = `translateX(${offset}px)`;

    const maxIndex = Math.max(0, this.visibleCount - this.perView);
    if (this.prevBtn) this.prevBtn.disabled = this.index <= 0;
    if (this.nextBtn) this.nextBtn.disabled = this.index >= maxIndex;
  }

  getCurrentTranslateX() {
    const t = this.track.style.transform || '';
    const match = t.match(/translateX\((-?\d+(?:\.\d+)?)px\)/);
    return match ? parseFloat(match[1]) : 0;
  }

  prev() {
    if (this.index > 0) {
      this.index -= 1;
      this.applyOffset();
    }
  }

  next() {
    const maxIndex = Math.max(0, this.visibleCount - this.perView);
    if (this.index < maxIndex) {
      this.index += 1;
      this.applyOffset();
    }
  }
}

if (!customElements.get('shade-finder')) {
  customElements.define('shade-finder', ShadeFinder);
}
