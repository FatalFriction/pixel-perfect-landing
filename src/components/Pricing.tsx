import PricingGrid from "./PricingGrid";
import TeamCoaching from "./TeamCoaching";
import { plan } from "@/src/data/plan";

export default function Pricing() {
  
  return (
    <section className="px-6 py-32 max-w-6xl mx-auto">

      <h2 className="text-center text-4xl font-bold mb-32">
        Pricing Plans
      </h2>

      <PricingGrid
        plans={plan}
        className="-mx-6 px-6 py-6 md:mx-0 md:px-0 md:py-0"
      />

      <TeamCoaching ctaLink="/contact" ctaText="Contact Us" />

    </section>
  );
}
