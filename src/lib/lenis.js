import Lenis from 'lenis';

let lenisInstance = null;
let rafId = null;

export function initLenis(options = {}) {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!lenisInstance) {
    lenisInstance = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
      ...options,
    });

    const raf = (time) => {
      lenisInstance?.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);
  }

  return lenisInstance;
}

export function destroyLenis() {
  if (rafId !== null) {
    window.cancelAnimationFrame(rafId);
    rafId = null;
  }

  lenisInstance?.destroy();
  lenisInstance = null;
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0);
    return;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}