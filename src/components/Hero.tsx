export default function Hero() {
  const avatars = [
    "/avatar1.png",
    "/avatar2.png",
    "/avatar3.png",
    "/avatar4.png",
  ];

  return (
    <section className="pt-40 pb-32 px-6">
      {/* Spotlights */}
      <div className="absolute inset-0">
        <div
          className="
    absolute -top-120 right-1/2 translate-x-1/2 w-260 h-260
    bg-[radial-gradient(circle,rgba(204,152,63,0.55),transparent_60%)]
  "
        />

        {/* Grain */}
        <div
          className="
    pointer-events-none
    absolute inset-0
    opacity-[0.06]
    mix-blend-soft-light
    bg-[url('/noise.jpg')]
  "
        />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Let’s see what you’re made of.
          </h1>

          <p className="mt-2 text-gray-400 max-w-xs text-center mx-auto">
            Masukkan <b className="text-white">Riot ID</b> dan biarkan kami
            membaca gameplay kamu.
          </p>

          {/* Trust */}
          <div className="flex items-center gap-4 mt-6 justify-center">
            <span className="bg-[#CC983F] text-white text-sm px-3 py-3 rounded-xl font-semibold">
              100K+
            </span>

            <div className="-space-y-0.5">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-8 h-8 rounded-full border border-black"
                  />
                ))}
              </div>

              <span className="text-sm text-gray-400">
                Users already joined
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-neutral-900/70 backdrop-blur rounded-xl p-8 border border-neutral-800">
          <h3 className="font-semibold mb-6 text-center text-2xl">
            Ngga perlu login.
            <br />
            cukup masukkan Riot ID.
          </h3>

          <input
            placeholder="Player#Tag"
            className="w-full mb-4 bg-black border border-neutral-700 rounded px-4 py-3"
          />

          <input
            placeholder="your@email.com"
            className="w-full mb-4 bg-black border border-neutral-700 rounded px-4 py-3"
          />

          <p className="text-xs text-center text-gray-500 mb-4">
            We may use Your Personal Data to contact You with newsletters,
            marketing or promotional materials and other information that may be
            of interest to You. You may opt-out of receiving any, or all, of
            these communications from Us by following the unsubscribe link or
            instructions provided in any email We send or by contacting Us.
          </p>

          <div className="flex items-start gap-2 mb-6">
            <input type="checkbox" className="mt-1" />
            <span className="text-xs text-gray-400">
              I agree with <b className="text-[#CC983F]">Terms & Conditions</b>{" "}
              and <b className="text-[#CC983F]">Privacy Policy</b>
            </span>
          </div>

          <button className="w-full bg-[#CC983F] text-white py-3 rounded font-semibold">
            Analyze
          </button>
        </div>
      </div>
    </section>
  );
}
