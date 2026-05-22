"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = ["About", "Projects", "Skills", "Experience", "Certifications", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 transition-all duration-300 ${
        scrolled ? "bg-[#16101f]/90 backdrop-blur-md border-b border-white/8" : "bg-transparent"
      }`}
    >
      <Link href="/" className="font-serif text-xl text-white tracking-wide">
        Saf<span className="italic" style={{ color: "#D174D2" }}>é</span>
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 text-xs" style={{ color: "#7a9e7e" }}>
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#7a9e7e" }} />
        available
      </div>
    </nav>
  );
}
