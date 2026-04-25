import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#05070B]" id="home">

      {/* BACKGROUNDS (unchanged) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,180,80,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_60%,rgba(255,190,90,0.25),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,7,11,1),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.06] 
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
             linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-[size:60px_60px]" 
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">

          <div className="relative inline-block mb-6">
  <div className="absolute inset-0 blur-xl bg-[#F5B301]/20 rounded-full" />
  
  <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full 
                  border border-[#F5B301]/40 
                  bg-[#0B0F14]
                  text-[#F5B301] text-sm tracking-wide">

    <span className="w-2 h-2 rounded-full bg-[#F5B301]" />
    HI, I'M

  </div>
</div>

          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-tight">
            Champ
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
            Full-stack developer building and maintaining high-performance, reliable digital products.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">

            {/* START PROJECT */}
            <Link href="#contact"
              
              className="flex items-center gap-2 bg-[#F5B301] text-black px-6 py-3 rounded-lg font-medium 
                         hover:opacity-90 hover:-translate-y-0.5 transition
                         shadow-[0_0_20px_rgba(245,179,1,0.25)]"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>

            {/* EMAIL CONNECT */}
            <a
              href="mailto:shlomoyounger1@gmail.com"
              className="flex items-center gap-2 border border-gray-700 text-gray-300 px-6 py-3 rounded-lg 
                         hover:bg-white/5 hover:-translate-y-0.5 transition"
            >
              Connect With Me
              <Mail size={18} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}