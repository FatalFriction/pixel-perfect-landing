"use client";

import PricingCard from "./PricingCard";
import useAutoCarousel from "@/src/hooks/useAutoCarousel";

export default function PricingGrid({ plans }: any) {
  const sliderRef = useAutoCarousel(4500);

  return (
    <div
      ref={sliderRef}
      className="
        flex md:grid
        md:grid-cols-3
        gap-6 md:gap-8
        overflow-x-auto md:overflow-visible
        snap-x snap-mandatory
        scrollbar-hide
        -mx-10 px-12 md:mx-0 md:px-0
        py-4
      "
    >
      {plans.map((plan: any) => (
        <div
          key={plan.title}
          className="snap-center shrink-0 min-w-[85%] md:min-w-0"
        >
          <PricingCard {...plan} />
        </div>
      ))}
    </div>
  );
}