"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-[#0B0F14]/80 backdrop-blur-md border-b border-[#1A1F26]">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        {/* <Link href="#home" className="text-lg font-semibold text-white">
          Champ<span className="text-[#F5B301]">.now</span>
        </Link> */}
       

        <Link href="#home" className="flex items-center gap-3">

          <Image
            src="/assets/image-removebg-preview.png"
            alt="Champ logo"
            width={100}
            height={30}
          />

        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <Link href="#about" className="hover:text-white transition">About</Link>
            <Link href="#projects" className="hover:text-white transition">Portfolio</Link>
            <Link href="#contact" className="hover:text-white transition">Contact</Link>
          </nav>

          {/* ✅ DESKTOP CTA (THIS WAS MISSING) */}
          <Link
            href="https://www.upwork.com/freelancers/champnow" target="upwork"
            className="hidden md:flex items-center gap-2 bg-[#F5B301] text-black px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Hire Me
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-5 text-sm text-gray-300 bg-[#0B0F14] border-t border-[#1A1F26]">

          <Link href="#about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link href="#projects" onClick={() => setOpen(false)}>
            Portfolio
          </Link>

          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>


          <Link
            href="https://www.upwork.com/freelancers/champnow" target="upwork"
            className="mt-4 bg-[#F5B301] text-black py-3 rounded-lg font-medium text-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}