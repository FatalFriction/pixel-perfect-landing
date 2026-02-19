"use client";

import { useState } from "react";
import {
  format,
  addDays,
  startOfToday,
} from "date-fns";

export default function CalendarCard() {
  const today = startOfToday();
  const days = Array.from({ length: 7 }).map((_, i) =>
    addDays(today, i)
  );

  const [selected, setSelected] = useState<Date>(today);

  return (
    <div>

      {/* Month */}
      <h3 className="text-3xl font-bold mb-6">
        {format(selected, "MMMM yyyy")}
      </h3>

      {/* Week Strip */}
      <div className="flex gap-3 md:justify-between mb-8 overflow-x-auto scrollbar-hide">

        {days.map((day) => {
          const isSelected =
            format(day, "yyyy-MM-dd") ===
            format(selected, "yyyy-MM-dd");

          return (
            <button
              key={day.toISOString()}
              onClick={() => setSelected(day)}
              className="
                w-10 h-14 rounded-md
                flex flex-col items-center justify-center
                transition
              "
            >
              <span className="text-xs text-gray-400 mb-1">
                {format(day, "EEE").toUpperCase()}
              </span>

              <span
                className={`
                  w-10 h-10 flex items-center justify-center rounded-md
                  ${
                    isSelected
                      ? "bg-[#8c6a2b] text-white font-semibold"
                      : "text-gray-400 hover:bg-[#CC983F]/20"
                  }
                `}
              >
                {format(day, "d")}
              </span>
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <button
        className="
          w-3/4 mx-auto block
          bg-[#CC983F]
          hover:bg-[#e0bb5c]
          text-black font-semibold
          py-3 rounded-lg transition
        "
      >
        + Add to Google Calendar
      </button>
    </div>
  );
}
