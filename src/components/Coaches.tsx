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

      {/* Cards Wrapper */}
      <div
        ref={sliderRef}
        className="
          flex md:grid
          md:grid-cols-3
          gap-6 md:gap-8
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory
          -mx-6 px-6 md:mx-0 md:px-0
          scrollbar-hide
        "
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="
              min-w-[80%] md:min-w-0
              snap-center
              bg-[#896323]
              rounded-xl
              overflow-hidden
              border border-[#FFAE22]
            "
          >
            {/* Image */}
            <img src="/coach.png" className="w-full h-64 object-cover" />

            {/* Gradient Info */}
            <div
              className="
              relative p-4 pt-6 w-full
              bg-[linear-gradient(to_top,#886323_0%,#886323_80%,transparent_100%)]
            "
            >
              <h3 className="text-2xl text-center font-semibold text-[#FEFEB6]">
                Coach #{i}
              </h3>

              <hr className="my-3 h-px bg-white/10 border-0 backdrop-blur-sm" />

              <p className="text-sm text-white text-center">
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
