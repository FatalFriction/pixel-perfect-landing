export default function Coaches() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Meet Your Coaches
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-22">
        Para pelatih terbaik kami—Radiant players dengan pengalaman kompetitif
        dan pengetahuan mendalam tentang strategi, aim, decision-making, dan
        mindset yang dibutuhkan untuk naik rank dengan konsisten.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#896323] rounded-xl overflow-visible border border-[#FFAE22]"
          >
            <img
              src="/coach.png"
              className="w-full h-50 object-cover overflow-y-visible"
            />

            <div className="relative p-4 py-6 w-full bg-[linear-gradient(to_top,#886323_0%,#886323_80%,transparent_100%)] rounded-xl">
              <h3 className="px-4 py-2 text-2xl text-center font-semibold text-[#FEFEB6]">
                Coach #{i}
              </h3>
             <hr className="w-full h-1.25 bg-white/10 border-0 backdrop-blur-sm"/>
              <p className="text-sm text-white text-center pt-2">
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
