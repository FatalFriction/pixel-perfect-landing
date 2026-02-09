export default function Testimonials() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        From Stuck to Clutch — Their Stories
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {["Jorgi", "Alex", "Kevin"].map((name) => (
          <div
            key={name}
            className="bg-neutral-900 p-6 rounded-xl border border-neutral-800"
          >
            <div className="flex flex-row items-center pb-4">
              <img
                src="/coach.png"
                className="h-13 w-13 rounded-full mr-2 object-cover border border-[#CC983F]"
              />

              <h4 className="font-semibold text-white">{name}</h4>
            </div>

            <p className="text-gray-400 text-sm">
              Gue cuma ikut 2 sesi tapi aim sama positioning langsung naik.
              Coach-nya ngajarin simpel banget.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
