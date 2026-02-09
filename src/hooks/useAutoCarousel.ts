import { useEffect, useRef } from "react";

export default function useAutoCarousel(interval = 4000) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Disable auto scroll on mobile
    if (window.innerWidth < 768) return;

    const container = ref.current;
    let scrollAmount = 0;

    const scroll = () => {
      const maxScroll =
        container.scrollWidth - container.clientWidth;

      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      } else {
        scrollAmount += container.clientWidth;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const id = setInterval(scroll, interval);
    return () => clearInterval(id);
  }, [interval]);

  return ref;
}
