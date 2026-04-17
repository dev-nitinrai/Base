(function () {
  const DISMISS_KEY_PREFIX = 'announcement_countdown_dismissed_';
  const DISMISS_TTL_MS = 24 * 60 * 60 * 1000;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function getDismissKey(sectionId) {
    return DISMISS_KEY_PREFIX + sectionId;
  }

  function isDismissed(sectionId) {
    try {
      const raw = localStorage.getItem(getDismissKey(sectionId));
      if (!raw) return false;
      const { expires } = JSON.parse(raw);
      if (Date.now() > expires) {
        localStorage.removeItem(getDismissKey(sectionId));
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }

  function setDismissed(sectionId) {
    try {
      localStorage.setItem(
        getDismissKey(sectionId),
        JSON.stringify({ expires: Date.now() + DISMISS_TTL_MS })
      );
    } catch {
    }
  }

  function initBar(bar) {
    const sectionId = bar.dataset.sectionId;

    if (isDismissed(sectionId)) {
      bar.hidden = true;
      return;
    }

    const timer = bar.querySelector('.countdown-timer');
    if (!timer) return;

    const endDatetime = timer.dataset.end;
    if (!endDatetime) return;

    const endTime = new Date(endDatetime).getTime();
    if (isNaN(endTime)) return;

    const daysEl = timer.querySelector('.countdown-timer__days');
    const hoursEl = timer.querySelector('.countdown-timer__hours');
    const minutesEl = timer.querySelector('.countdown-timer__minutes');
    const secondsEl = timer.querySelector('.countdown-timer__seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    let intervalId = null;

    function stop() {
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    function tick() {
      const remaining = endTime - Date.now();

      if (remaining <= 0) {
        bar.hidden = true;
        stop();
        return;
      }

      const totalSeconds = Math.floor(remaining / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      daysEl.textContent = pad(days);
      hoursEl.textContent = pad(hours);
      minutesEl.textContent = pad(minutes);
      secondsEl.textContent = pad(seconds);
    }

    const closeBtn = bar.querySelector('.announcement-countdown__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        setDismissed(sectionId);
        bar.hidden = true;
        stop();
      });
    }

    tick();
    intervalId = setInterval(tick, 1000);
  }

  function init() {
    const bars = document.querySelectorAll('.announcement-countdown[data-section-id]');
    for (const bar of bars) {
      initBar(bar);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
