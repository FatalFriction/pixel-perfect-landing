"use client";

import PricingCard from "./PricingCard";
import useAutoCarousel from "@/src/hooks/useAutoCarousel";

type Plan = {
  title: string;
  tag?: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLink?: string;
  ctaText?: string;
};

export default function PricingGrid({
  plans,
  className = "",
}: {
  plans: Plan[];
  className?: string;
}) {
  const sliderRef = useAutoCarousel(4500);

  return (
    <div
      ref={sliderRef}
      className={`
        flex md:grid
        md:grid-cols-3
        gap-6 md:gap-8
        overflow-x-auto overflow-y-visible md:overflow-visible
        snap-x snap-mandatory touch-pan-x
        scrollbar-hide
        ${className}
      `}
    >
      {plans.map((plan) => (
        <div
          key={plan.title}
          className="min-w-[80%] md:min-w-0 snap-center"
        >
          <PricingCard {...plan} />
        </div>
      ))}
    </div>
  );
}
