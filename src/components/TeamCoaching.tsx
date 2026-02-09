export default function TeamCoaching() {
  return (
    <div
      className="
        w-full mt-12
        rounded-xl
        border border-[#C9A24D]/60
        bg-[linear-gradient(180deg,#2a2416_0%,#1b170c_100%)]
        px-8 py-6
        flex flex-col md:flex-row
        items-start md:items-center
        justify-between
        gap-6
        shadow-[0_0_40px_rgba(201,162,77,0.12)]
      "
    >
      {/* Left */}
      <div>
        <h3 className="text-lg font-semibold text-[#FEFEB6]">
          Team Coaching
        </h3>

        <p className="text-sm text-[#cfc9a3] mt-1 max-w-xl">
          Coaching designed for teams who want to grow together.
          Contact for Team Coaching.
        </p>
      </div>

      {/* Button */}
      <button
        className="
          px-10 py-2.5 rounded-lg
          bg-[#C9A24D]
          text-black font-semibold
          hover:bg-[#e0bb5c]
          transition
          whitespace-nowrap
        "
      >
        Learn More
      </button>
    </div>
  );
}
