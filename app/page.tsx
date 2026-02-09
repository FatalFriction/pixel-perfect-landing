import Hero from "@/src/components/Hero";
import Features from "@/src/components/Features";
import Pricing from "@/src/components/Pricing";
import Coaches from "@/src/components/Coaches";
import Testimonials from "@/src/components/Testimonials";
import FAQ from "@/src/components/FAQ";
import Cta from "@/src/components/Cta";

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">

      {/* CENTER GOLD GLOW */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          className="
            w-225 h-full
            bg-[radial-gradient(ellipse_at_center,rgba(204,152,63,0.18)_0%,transparent_60%)]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Hero />
        <Cta />
        <Features />
        <Coaches />
        <Testimonials />
        <Pricing />
        <FAQ />
      </div>

    </main>
  );
}

