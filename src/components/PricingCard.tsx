import Link from "next/link";
import { FaStar } from "react-icons/fa";

type PricingCardProps = {
  title: string;
  tag?: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLink?: string;
  ctaText?: string;
};

export default function PricingCard({
  title,
  tag,
  price,
  description,
  features,
  highlighted = false,
  ctaLink = "#",
  ctaText = "Get Started",
}: PricingCardProps) {
  return (
    <div
      className={`
        relative group
        max-w-60 md:w-full md:max-w-full
        min-h-105 md:min-h-130
        ${highlighted ? "md:-mt-6 md:pt-10 md:min-h-145" : ""}
        rounded-2xl p-5 md:p-6
        border ${highlighted ? "ring-0 ring-[#C9A24D]/40" : "border-[#C9A24D]/40"}
        bg-[linear-gradient(180deg,#2a2416_0%,#1b170c_100%)]
        text-[#FEFEB6]
        shadow-[0_0_40px_rgba(201,162,77,0.15)]
        transition
        hover:shadow-[0_0_60px_rgba(201,162,77,0.35)]
        flex flex-col
      `}
    >
      {/* SHINE */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl transition
          ${
            highlighted
              ? "opacity-100 bg-[radial-gradient(circle_at_top,rgba(201,162,77,0.35),transparent_65%)]"
              : "opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(201,162,77,0.25),transparent_60%)]"
          }
        `}
      />

      {/* Header */}
      <div className="relative flex justify-between items-center mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>

        {tag && (
          <span className="flex items-center gap-1 text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full border border-[#C9A24D]/60 text-[#C9A24D]">
            {highlighted && <FaStar size={10} />}
            {tag}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="relative mb-3 md:mb-4">
        <span className="text-3xl md:text-5xl font-bold text-white">
          {price}
        </span>
        <span className="ml-2 text-xs md:text-sm text-[#C9A24D]">one-time</span>
      </div>

      {/* Description */}
      <p className="relative text-xs md:text-sm text-[#cfc9a3] mb-4 md:mb-6">
        {description}
      </p>

      <hr className="relative border-[#C9A24D]/30 mb-4 md:mb-6" />

      {/* Features */}
      <ul className="relative space-y-2 md:space-y-3 mb-6 md:mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-xs md:text-sm">
            <span className="text-[#C9A24D] border border-[#C9A24D]/30 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={ctaLink}
        className="
          relative block w-full py-2.5 md:py-3 rounded-lg text-center
          bg-[#C9A24D]
          text-black md:text-white font-semibold text-sm md:text-base
          hover:bg-[#e0bb5c]
          transition
          cursor-pointer
          mt-auto
        "
      >
        {ctaText}
      </Link>
    </div>
  );
}