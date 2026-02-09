import Link from "next/link";
import {
  FaDiscord,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-row items-center">
          <img src="/logo.png" className="mr-6 w-18" />
          <div className="font-bold text-lg">Pixel Perfect</div>
          {/* Menu */}
          <nav className="hidden md:flex gap-8 text-sm text-gray-300 ml-20">
            <Link href="#">Home</Link>
            <Link href="#">How it Works</Link>
            <Link href="#">Coaches</Link>
            <Link href="#">Pricing</Link>
          </nav>
        </div>

        {/* Right */}
        <div className="flex gap-4 items-center">
          <button className="text-sm text-gray-300">Log in</button>

          <button className="outline-1 outline-[#CC983F] text-gray-300 px-4 py-1.5 rounded text-sm">
            Sign Up
          </button>

          <div className="flex gap-3 ml-2">
            <a
              href="https://discord.gg/YOUR_INVITE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CC983F] hover:text-gray-400 hover:scale-110 transition"
            >
              <FaDiscord size={18} />
            </a>

            <a
              href="https://twitter.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CC983F] hover:text-gray-400 hover:scale-110 transition"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="https://instagram.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CC983F] hover:text-gray-400 hover:scale-110 transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://facebook.com/YOUR_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CC983F] hover:text-gray-400 hover:scale-110 transition"
            >
              <FaFacebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
