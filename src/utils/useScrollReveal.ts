import { useEffect, useRef } from 'react';

function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const animAnchors = ref.current?.querySelectorAll(':scope [data-anim-container]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // @ts-expect-error dataset exists
            entry.target.dataset.animate_targets = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    animAnchors?.forEach((animAnchor) => {
      observer.observe(animAnchor);
    });

    return () => observer.disconnect();
  });

  return [ref];
}

export default useScrollReveal;
