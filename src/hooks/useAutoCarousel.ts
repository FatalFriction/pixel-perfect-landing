import { useEffect, useRef } from "react";

export default function useAutoCarousel(interval = 3500) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.children;
    let index = 0;

    const timer = setInterval(() => {
      if (!slider || cards.length === 0) return;

      index = (index + 1) % cards.length;

      const target = cards[index] as HTMLElement;

      slider.scrollTo({
        left: target.offsetLeft,
        behavior: "smooth",
      });
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return sliderRef;
}
