document.addEventListener('alpine:init', () => {
  window.Alpine.data('shadeFinder', (config) => ({
    view: config.view || 'swatches',
    usage: config.usage || 'all',
    skinTone: config.skinTone || 'all',
    slide: 0,
    perView: 4,
    visibleCount: 0,
    cardWidth: 0,
    gap: 16,

    init() {
      this.updatePerView();
      this.$nextTick(() => {
        this.recalc();
      });

      this._resizeHandler = () => {
        this.updatePerView();
        this.recalc();
      };
      window.addEventListener('resize', this._resizeHandler);
    },

    destroy() {
      if (this._resizeHandler) {
        window.removeEventListener('resize', this._resizeHandler);
      }
    },

    updatePerView() {
      this.perView = window.matchMedia('(min-width: 768px)').matches ? 4 : 1;
    },

    matches(usageData, toneData) {
      const usageTokens = (usageData || '')
        .split(',')
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean);
      const tone = (toneData || '').trim().toLowerCase();

      const usagePass = this.usage === 'all' || usageTokens.includes(this.usage);
      const tonePass = this.skinTone === 'all' || tone === this.skinTone;

      return usagePass && tonePass;
    },

    recalc() {
      const track = this.$refs.track;
      if (!track) return;

      const cards = Array.from(track.querySelectorAll('.shade-card')).filter(
        (c) => !c.classList.contains('is-hidden')
      );
      this.visibleCount = cards.length;

      const first = cards[0];
      if (first) {
        const rect = first.getBoundingClientRect();
        this.cardWidth = rect.width;
      }

      if (this.slide > this.maxSlide) {
        this.slide = Math.max(0, this.maxSlide);
      }
    },

    get showNav() {
      return this.visibleCount >= 4;
    },

    get maxSlide() {
      return Math.max(0, this.visibleCount - this.perView);
    },

    get trackStyle() {
      if (this.visibleCount <= 3) {
        return 'transform: translateX(0px)';
      }
      const offset = this.slide * (this.cardWidth + this.gap);
      return `transform: translateX(-${offset}px)`;
    },

    setView(v) {
      this.view = v;
    },

    setUsage(u) {
      this.usage = u;
      this.slide = 0;
      this.$nextTick(() => this.recalc());
    },

    setSkinTone(t) {
      this.skinTone = t;
      this.slide = 0;
      this.$nextTick(() => this.recalc());
    },

    next() {
      if (this.slide < this.maxSlide) {
        this.slide += 1;
      }
    },

    prev() {
      if (this.slide > 0) {
        this.slide -= 1;
      }
    }
  }));
});
