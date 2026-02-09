"use client";

import PricingCard from "./PricingCard";
import TeamCoaching from "./TeamCoaching";
import useAutoCarousel from "@/src/hooks/useAutoCarousel";

export default function Pricing() {
  const sliderRef = useAutoCarousel(4500);

  const plans = [
    {
      title: "Basic Bundle",
      tag: "FUNDAMENTAL",
      price: "249.000",
      description:
        "A solid starting point if you just want the fundamentals without spending much.",
      features: ["Fundamental courses", "Perfect for beginners"],
      ctaLink: "/checkout/basic",
    },
    {
      title: "Private Session",
      tag: "POPULAR",
      price: "990.000",
      description:
        "Personalized 1-on-1 coaching with detailed feedback and next steps.",
      features: [
        "90-minute private session",
        "Direct feedback",
        "Clear next steps",
      ],
      highlighted: true,
      ctaLink: "/checkout/private",
      ctaText: "Book a session",
    },
    {
      title: "1-on-1 Coaching",
      tag: "PRO",
      price: "1.990.000",
      description: "Long-term coaching designed for serious rank climbers.",
      features: ["Weekly sessions", "Progress tracking", "Priority support"],
      ctaLink: "/checkout/private",
      ctaText: "Book a your plan",
    },
  ];

  return (
    <section className="px-6 py-32 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-12">Pricing Plans</h2>

      {/* Pricing Cards */}
      <div
        ref={sliderRef}
        className="
          flex md:grid
          md:grid-cols-3
          gap-6 md:gap-8
          overflow-x-auto overflow-y-visible md:overflow-visible
          snap-x snap-mandatory
          -mx-6 px-6 py-6 md:mx-0 md:px-0 md:py-0
          scrollbar-hide
        "
      >
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="
              min-w-[80%] md:min-w-0
              snap-center
            "
          >
            <PricingCard {...plan} />
          </div>
        ))}
      </div>

      {/* Team CTA */}
      <TeamCoaching ctaLink="/contact" ctaText="Contact Us" />
    </section>
  );
}
