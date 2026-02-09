export default function Features() {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-24">
      <h2 className="text-5xl font-bold text-center mb-12">
        Unlock Your Player Advantages
      </h2>

      <div className="space-y-8">
        {[
          {
            title: "Hands-On Courses by Pro Player Coaches",
            desc: "Belajar langsung dari pemain berpengalaman--materi praktik, tips real match, dan strategi yang benar-benar kepakai di rank.",
          },
          {
            title: "Live Coaching Sessions",
            desc: "Sesi coaching real-time yang fokus pada aim, decision-making, positioning, dan mindset—dibimbing langsung sesuai gaya main kamu.",
          },
          {
            title: "Personalized Performance Report",
            desc: "Analisis game yang dibuat khusus untuk kamu: breakdown stats, habit buruk, rekomendasi latihan, dan progress tracking.",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-24 h-8 md:w-4 md:h-4 bg-[#CC983F] rounded-full mt-2" />

            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-md pr-10 md:pr-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
