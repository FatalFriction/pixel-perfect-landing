type PricingCardProps = {
  title: string;
  tag?: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export default function PricingCard({
  title,
  tag,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`
        w-full rounded-2xl p-6
        border ${highlighted ? "border-[#C9A24D]" : "border-[#C9A24D]/40"}
        bg-[linear-gradient(180deg,#2a2416_0%,#1b170c_100%)]
        text-[#FEFEB6]
        shadow-[0_0_40px_rgba(201,162,77,0.15)]
        ${highlighted ? "scale-105" : ""}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>

        {tag && (
          <span className="text-xs px-3 py-1 rounded-full border border-[#C9A24D]/60 text-[#C9A24D]">
            {tag}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mb-4">
        <span className="text-5xl font-bold text-white">{price}</span>
        <span className="ml-2 text-sm text-[#C9A24D]">one-time</span>
      </div>

      {/* Description */}
      <p className="text-sm text-[#cfc9a3] mb-6">
        {description}
      </p>

      <hr className="border-[#C9A24D]/30 mb-6" />

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span className="text-[#C9A24D] border border-[#C9A24D]/30 rounded-full w-4 h-4 flex items-center justify-center">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className="
          w-full py-3 rounded-lg mt-30
          bg-[#C9A24D]
          text-black font-semibold
          hover:bg-[#e0bb5c] transition
        "
      >
        Get Started
      </button>
    </div>
  );
}
