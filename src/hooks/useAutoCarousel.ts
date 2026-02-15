// useAutoCarousel.tsx
import { useEffect, useRef } from "react";

export default function useAutoCarousel(interval = 4500) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isUserInteracting = useRef(false);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let id: NodeJS.Timeout;

    const startAutoScroll = () => {
      id = setInterval(() => {
        if (isUserInteracting.current) return;

        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;

        let nextScroll = container.scrollLeft + container.clientWidth;
        if (nextScroll > maxScroll) nextScroll = 0;

        container.scrollTo({ left: nextScroll, behavior: "smooth" });
      }, interval);
    };

    const handleTouchStart = () => { isUserInteracting.current = true; };
    const handleTouchEnd = () => {
      setTimeout(() => { isUserInteracting.current = false; }, 4000); // resume after pause
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    // Optional: also listen to mousedown / mouseup for desktop

    startAutoScroll();

    return () => {
      clearInterval(id);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [interval]);

  return ref;
}