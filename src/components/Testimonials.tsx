"use client";

import Image from "next/image";
import useAutoCarousel from "../hooks/useAutoCarousel";

export default function Testimonials() {
  const sliderRef = useAutoCarousel(4500);

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        From Stuck to Clutch — Their Stories
      </h2>

      {/* OUTER SCROLL */}
      <div
        ref={sliderRef}
        className="relative flex gap-6 overflow-x-auto
    snap-x snap-mandatory
    scroll-smooth
    -mx-6 px-6 scrollbar-hide
    touch-pan-x
    -webkit-overflow-scrolling: touch
  "
      >
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8">
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
                <Image
                  src="/coach.png"
                  className="h-13 w-13 rounded-full mr-2 object-cover border border-[#CC983F]"
                  alt="Testimonies"
                  width={500}
                  height={500}
                />

                <h4 className="font-semibold text-white">{name}</h4>
              </div>

              <p className="text-gray-400 text-sm px-6">
                Gue cuma ikut 2 sesi tapi aim sama positioning langsung naik.
                Coach-nya ngajarin simpel banget.
              </p>

              <Image
                src="/testimony.png"
                className="h-55 w-full mt-4 rounded-md"
                alt="Testimonials"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
