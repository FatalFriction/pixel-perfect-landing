"use client";

import useAutoCarousel from "../hooks/useAutoCarousel";

export default function Coaches() {
  const sliderRef = useAutoCarousel(3500);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Meet Your Coaches
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Para pelatih terbaik kami—Radiant players dengan pengalaman kompetitif
        dan pengetahuan mendalam tentang strategi, aim, decision-making, dan
        mindset yang dibutuhkan untuk naik rank dengan konsisten.
      </p>

      {/* Cards */}
      <div
        ref={sliderRef}
        className="
          flex md:grid md:grid-cols-3
          gap-6 md:gap-8
          overflow-visible md:overflow-visible
          snap-x snap-mandatory
          -mx-6 px-6 md:mx-0 md:px-0
          scrollbar-hide mt-30
        "
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="
              relative min-w-[80%] md:min-w-0 snap-center
              rounded-2xl overflow-visible
              border border-[#FFAE22]
              bg-[#896323]
              shadow-[0_0_40px_rgba(204,152,63,0.35)]
            "
          >
            {/* Coach Image */}
            <img
              src="/coach.png"
              className="w-full h-85 md:h-95 object-cover relative -top-20"
            />

            {/* Radiant Badge */}
            <span className="
              absolute top-4 right-4
              text-xs text-white px-3 py-1 rounded-full max-w-20 text-end
            ">
              Radiant Duelist
            </span>

            {/* Bottom Gradient Panel */}
            <div
              className="
                absolute bottom-0 left-0 w-full
                px-6 pt-10 pb-6
                text-center rounded-2xl 
                bg-[linear-gradient(to_top,#8a6424_0%,#8a6424_70%,transparent_100%)]
              "
            >
              <h3 className="text-2xl font-semibold text-[#FEFEB6] mb-3">
                Coach #{i}
              </h3>

              <p className="text-sm text-white leading-relaxed">
                Kaze dikenal dengan mechanical skill yang kuat dan agresivitas
                yang terkontrol. Dia fokus pada crosshair placement, entry
                timing, dan clutch consistency.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
