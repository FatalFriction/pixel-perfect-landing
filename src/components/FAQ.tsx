"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is PixelPerfect?",
    a: "PixelPerfect adalah platform yang membantu kamu meningkatkan performa — mulai dari skill analisis hingga coaching — dengan pendekatan data-driven dan hands-on.",
  },
  {
    q: "How does the coaching work?",
    a: "Kamu bisa upload gameplay atau booking sesi live dengan coach profesional.",
  },
  {
    q: "Is the data safe?",
    a: "Ya. Semua data dienkripsi dan tidak pernah dibagikan ke pihak ketiga.",
  },
  {
    q: "Can I choose my coach?",
    a: "Bisa. Kamu bebas memilih coach sesuai kebutuhanmu.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 my-32">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Frequent Asked Question
          </h2>

          <p className="text-gray-400 max-w-sm text-center">
            Temukan jawaban cepat untuk pertanyaan seputar PixelPerfect,
            mulai dari fitur, coaching, hingga keamanan data.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="
                border border-[#CC983F]/40
                rounded-xl
                bg-[linear-gradient(180deg,#2a2416_0%,#1b170c_100%)]
              "
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-[#FEFEB6] font-medium">
                  {item.q}
                </span>

                {/* Chevron */}
                <span
                  className={`
                    w-8 h-8 rounded-full
                    bg-[#CC983F]
                    text-white
                    flex items-center justify-center
                    transition
                    ${open === i ? "rotate-180" : ""}
                  `}
                >
                  ▼
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-4 text-sm text-[#cfc9a3]">
                  {item.a}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
