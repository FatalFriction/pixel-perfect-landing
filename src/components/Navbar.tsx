"use client";

import Link from "next/link";
import {
  FaDiscord,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-neutral-800">
        <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center">
            <img src="/logo.png" className="mr-4 w-10" />
            <div className="font-bold text-lg">Pixel Perfect</div>

            <nav className="hidden md:flex gap-8 text-sm text-gray-300 ml-20">
              <Link href="#">Home</Link>
              <Link href="#">How it Works</Link>
              <Link href="#">Coaches</Link>
              <Link href="#">Pricing</Link>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <button className="block text-sm text-gray-300">
              Log in
            </button>

            <button className="block border border-[#CC983F] text-gray-300 px-4 py-1.5 rounded text-sm hover:bg-[#CC983F]/10 transition">
              Sign Up
            </button>

            {/* Desktop Socials */}
            <div className="hidden md:flex gap-3 ml-2">
              <DesktopSocials />
            </div>

          </div>

        </div>
      </header>

      {/* MOBILE FLOATING SOCIALS */}
      <div className="fixed top-24 right-4 z-40 flex flex-col gap-1 md:hidden">

        <SocialButton href="https://discord.gg/YOUR_INVITE">
          <FaDiscord size={18} />
        </SocialButton>

        <SocialButton href="https://twitter.com/YOUR_HANDLE">
          <FaXTwitter size={18} />
        </SocialButton>

        <SocialButton href="https://instagram.com/YOUR_HANDLE">
          <FaInstagram size={18} />
        </SocialButton>

        <SocialButton href="https://facebook.com/YOUR_PAGE">
          <FaFacebook size={18} />
        </SocialButton>

      </div>
    </>
  );
}

/* Desktop Icons */
function DesktopSocials() {
  return (
    <>
      <DesktopIcon href="#">
        <FaDiscord size={18} />
      </DesktopIcon>

      <DesktopIcon href="#">
        <FaXTwitter size={18} />
      </DesktopIcon>

      <DesktopIcon href="#">
        <FaInstagram size={18} />
      </DesktopIcon>

      <DesktopIcon href="#">
        <FaFacebook size={18} />
      </DesktopIcon>
    </>
  );
}

/* Desktop Icon */
function DesktopIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#CC983F] hover:text-gray-400 hover:scale-110 transition"
    >
      {children}
    </a>
  );
}

/* Mobile Floating Button */
function SocialButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-10 h-10 rounded-full
        bg-black/80 backdrop-blur
        border border-[#CC983F]/40
        text-[#CC983F]
        flex items-center justify-center
        shadow-[0_0_20px_rgba(204,152,63,0.3)]
        hover:scale-110 hover:shadow-[0_0_30px_rgba(204,152,63,0.5)]
        transition
      "
    >
      {children}
    </a>
  );
}
