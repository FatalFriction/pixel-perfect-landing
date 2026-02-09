"use client";

import useAutoCarousel from "../hooks/useAutoCarousel";

export default function Testimonials() {
  const sliderRef = useAutoCarousel(3500);

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        From Stuck to Clutch — Their Stories
      </h2>

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
        {["Jorgi", "Alex", "Kevin"].map((name) => (
          <div
            key={name}
            className="
    min-w-[80%] md:min-w-0
    snap-center
    bg-neutral-900 py-6
    rounded-xl
    border border-neutral-800
  "
          >
            <div className="flex flex-row items-center pb-4 px-6">
              <img
                src="/coach.png"
                className="h-13 w-13 rounded-full mr-2 object-cover border border-[#CC983F] "
              />

              <h4 className="font-semibold text-white">{name}</h4>
            </div>

            <p className="text-gray-400 text-sm px-6">
              Gue cuma ikut 2 sesi tapi aim sama positioning langsung naik.
              Coach-nya ngajarin simpel banget.
            </p>

            <img src="/testimony.png" className="h-55 w-full mt-4 rounded-md" />
          </div>
        ))}
      </div>
    </section>
  );
}
