"use client";

import { useState } from "react";

type RequestType = "Reissue Request" | "Other Type";

export default function TicketForm() {
  const [requestType, setRequestType] =
    useState<RequestType>("Reissue Request");

  return (
    <form className="max-w-45 text-md">

      {/* Label */}
      <label className="block text-white mb-4">
        Select Request Type
      </label>

      {/* Underline Select */}
      <div className="relative mb-6">
        <select
          value={requestType}
          onChange={(e) =>
            setRequestType(e.target.value as RequestType)
          }
          className="
            w-full bg-transparent
            border-b border-white/40
            pb-2 pr-6
            text-white text-sm
            focus:outline-none
            appearance-none
            cursor-pointer
            text-center font-bold
            [&>option]:bg-[#1b170c]
          "
        >
          <option>Reissue Request</option>
          <option>Other Type</option>
        </select>

        {/* Chevron */}
        <span className="absolute right-0 bottom-2 text-white">
          ▾
        </span>
      </div>

      {/* CTA */}
      <button
        type="submit"
        className="
          bg-[#CC983F]
          text-black text-sm font-medium
          px-4 py-2 rounded-lg
          hover:bg-[#e0bb5c]
          transition mt-2
        "
      >
        Submit Ticket
      </button>

    </form>
  );
}
