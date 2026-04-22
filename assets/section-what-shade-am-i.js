class ShadeFinder extends HTMLElement {
  constructor() {
    super();
    this.state = {
      view: 'swatches',
      usage: 'all',
      skin: 'all',
      index: 0,
    };
    this.resizeHandler = this.handleResize.bind(this);
  }

  connectedCallback() {
    this.viewport = this.querySelector('[data-carousel-viewport]');
    this.track = this.querySelector('[data-carousel-track]');
    this.slides = Array.from(this.querySelectorAll('[data-slide]'));
    this.prevBtn = this.querySelector('[data-carousel-prev]');
    this.nextBtn = this.querySelector('[data-carousel-next]');
    this.toggleBtn = this.querySelector('[data-view-toggle]');
    this.pills = Array.from(this.querySelectorAll('.shade-finder__pill'));
    this.emptyState = this.querySelector('[data-empty]');

    this.bindEvents();
    this.applyView();
    this.applyFilters();
    window.addEventListener('resize', this.resizeHandler);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  bindEvents() {
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggleView());
    }

    for (const pill of this.pills) {
      pill.addEventListener('click', () => this.onPillClick(pill));
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.navigate(-1));
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.navigate(1));
    }
  }

  handleResize() {
    clearTimeout(this._resizeTimer);
    this._resizeTimer = setTimeout(() => {
      this.updateCarousel();
    }, 120);
  }

  toggleView() {
    this.state.view = this.state.view === 'swatches' ? 'models' : 'swatches';
    this.applyView();
  }

  applyView() {
    const isModels = this.state.view === 'models';
    if (this.toggleBtn) {
      this.toggleBtn.setAttribute('aria-checked', String(isModels));
    }

    for (const slide of this.slides) {
      const swatchEl = slide.querySelector('[data-image="swatches"]');
      const modelEl = slide.querySelector('[data-image="models"]');
      if (swatchEl) swatchEl.classList.toggle('is-visible', !isModels);
      if (modelEl) modelEl.classList.toggle('is-visible', isModels);
    }
  }

  onPillClick(pill) {
    const filter = pill.dataset.filter;
    const value = pill.dataset.value;
    if (!filter || !value) return;

    if (filter === 'usage') this.state.usage = value;
    if (filter === 'skin') this.state.skin = value;

    for (const p of this.pills) {
      if (p.dataset.filter !== filter) continue;
      const isActive = p.dataset.value === value;
      p.classList.toggle('is-active', isActive);
      p.setAttribute('aria-pressed', String(isActive));
    }

    this.applyFilters();
  }

  applyFilters() {
    const { usage, skin } = this.state;
    this.visibleSlides = [];

    for (const slide of this.slides) {
      const slideUsage = (slide.dataset.usage || '').split(',').map((v) => v.trim()).filter(Boolean);
      const slideSkin = (slide.dataset.skin || '').trim();

      const usageMatch = usage === 'all' || slideUsage.includes(usage);
      const skinMatch = skin === 'all' || slideSkin === skin;
      const pass = usageMatch && skinMatch;

      slide.hidden = !pass;
      if (pass) this.visibleSlides.push(slide);
    }

    this.state.index = 0;
    this.updateCarousel();
  }

  getSlidesPerView() {
    return window.matchMedia('(min-width: 768px)').matches ? 4 : 1;
  }

  updateCarousel() {
    const count = this.visibleSlides ? this.visibleSlides.length : 0;
    const perView = this.getSlidesPerView();

    if (this.emptyState) {
      this.emptyState.hidden = count !== 0 || this.slides.length === 0;
    }

    const showChevrons = count > perView;
    if (this.prevBtn) this.prevBtn.hidden = !showChevrons;
    if (this.nextBtn) this.nextBtn.hidden = !showChevrons;

    if (this.track) {
      const shouldCenter = count > 0 && count <= perView && perView > 1;
      this.track.classList.toggle('is-centered', shouldCenter);
    }

    if (this.state.index > count - perView) {
      this.state.index = Math.max(0, count - perView);
    }
    if (this.state.index < 0) this.state.index = 0;

    this.applyTransform();
  }

  navigate(dir) {
    const count = this.visibleSlides ? this.visibleSlides.length : 0;
    const perView = this.getSlidesPerView();
    const maxIndex = Math.max(0, count - perView);

    this.state.index += dir;
    if (this.state.index < 0) this.state.index = maxIndex;
    if (this.state.index > maxIndex) this.state.index = 0;

    this.applyTransform();
  }

  applyTransform() {
    if (!this.track || !this.visibleSlides || this.visibleSlides.length === 0) {
      if (this.track) this.track.style.transform = 'translateX(0)';
      return;
    }

    const firstVisible = this.visibleSlides[this.state.index];
    if (!firstVisible) {
      this.track.style.transform = 'translateX(0)';
      return;
    }

    const offset = firstVisible.offsetLeft;
    this.track.style.transform = `translateX(${-offset}px)`;
  }
}

if (!customElements.get('shade-finder')) {
  customElements.define('shade-finder', ShadeFinder);
}
