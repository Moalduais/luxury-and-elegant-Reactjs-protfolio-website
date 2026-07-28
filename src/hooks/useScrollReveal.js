import { useEffect } from 'react';

/**
 * Attaches IntersectionObserver to all .scroll-reveal and .image-reveal
 * elements in the document after mount. Cleans up on unmount.
 */
export function useScrollReveal(activeClass = 'visible') {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
            entry.target.classList.remove('exit-top');
            // Animate progress bars inside the element
            entry.target.querySelectorAll('.progress-fill').forEach((bar) =>
              bar.classList.add('animated')
            );
          } else {
            entry.target.classList.remove(activeClass);
            if (rect.top < 0) {
              entry.target.classList.add('exit-top');
            } else {
              entry.target.classList.remove('exit-top');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll('.scroll-reveal, .image-reveal');
    els.forEach((el) => revealObserver.observe(el));

    // Trigger initial check
    setTimeout(() => window.dispatchEvent(new Event('scroll')), 60);

    return () => revealObserver.disconnect();
  }, [activeClass]);
}
