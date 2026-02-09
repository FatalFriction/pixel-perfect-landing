import PricingCard from "./PricingCard";
import TeamCoaching from "./TeamCoaching";

export default function Pricing() {
  const plans = [
    {
      title: "Basic Bundle",
      tag: "FUNDAMENTAL",
      price: "249.000",
      description:
        "A solid starting point if you just want the fundamentals without spending much.",
      features: ["Fundamental courses", "Perfect for beginners"],
    },
    {
      title: "Private Session",
      tag: "POPULAR",
      price: "990.000",
      description:
        "Personalized 1-on-1 coaching with detailed feedback and next steps.",
      features: ["90-minute private session", "Direct feedback", "Clear next steps"],
      highlighted: true,
    },
    {
      title: "1-on-1 Coaching",
      tag: "PRO",
      price: "1.990.000",
      description:
        "Long-term coaching designed for serious rank climbers.",
      features: ["Weekly sessions", "Progress tracking", "Priority support"],
    },
  ];

  return (
    <section className="px-6 py-32 max-w-6xl mx-auto">

      <h2 className="text-center text-3xl font-bold mb-12">
        Pricing Plans
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map(plan => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>
      <TeamCoaching />

    </section>
  );
}
