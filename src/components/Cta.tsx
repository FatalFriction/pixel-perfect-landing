import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative pt-20 pb-40 text-center px-6 overflow-hidden">
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0">
        {/* Spotlight */}
        <div
          className="
            absolute -top-10 left-1/2 -translate-x-1/2
            w-150 h-150
            bg-[radial-gradient(circle,rgba(204,152,63,0.55),transparent_51%)]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <img src="/Radiant.png" className="mx-auto mb-8 w-72" />

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Rank Up Faster. Dominate Ranked.
          <br />
          Become Unstoppable.
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-gray-400">
          Dapatkan coaching personal dari pro Radiant/Immortal players. Analisis
          gameplay mendalam, tips aim & game sense, dan strategi untuk naik rank
          konsisten tanpa grinding sendirian.
        </p>

        <Link
          href="/booking"
          className="
            mt-10
            inline-block
            border border-[#CC983F]
            text-white
            px-8 py-3
            rounded-lg
            hover:bg-[#CC983F]/50
            transition
            cursor-pointer
            text-center
          "
        >
          Coaching Session Now
        </Link>
      </div>
    </section>
  );
}
