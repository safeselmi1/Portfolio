"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = ["About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#0a0a0f]/90 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <Link href="/" className="font-serif text-xl text-white tracking-wide">
        Saf<span className="text-violet-400 italic">é</span>
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors font-medium"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 text-xs border border-white/15 rounded-full px-4 py-1.5 text-emerald-400 bg-emerald-400/5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Available
      </div>
    </nav>
  );
}
