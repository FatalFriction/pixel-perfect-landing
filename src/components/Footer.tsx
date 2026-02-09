import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-lg md:text-3xl max-w-md mb-4">
            Level up your skills with data-driven insights and expert coaching.
          </h4>

          <p className="text-gray-400 text-sm">
            © 2026 PixelPerfect. All rights reserved.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col space-y-6 items-center md:items-end">

          {/* Socials */}
          <div className="flex gap-5">
            <a
              href="https://discord.gg/YOUR_INVITE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CC983F] hover:text-gray-400 hover:scale-110 transition"
            >
              <FaDiscord size={20} />
            </a>

            <a
              href="https://twitter.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CC983F] hover:text-gray-400 hover:scale-110 transition"
            >
              <FaXTwitter size={20} />
            </a>

            <a
              href="https://instagram.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CC983F] hover:text-gray-400 hover:scale-110 transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://facebook.com/YOUR_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CC983F] hover:text-gray-400 hover:scale-110 transition"
            >
              <FaFacebook size={20} />
            </a>
          </div>

          {/* Legal */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
