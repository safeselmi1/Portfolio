import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0f] min-h-screen overflow-x-hidden">
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow orbs */}
      <div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-[100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />

        <footer className="text-center py-10 border-t border-white/6 font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} Safé Selmi — Built with Next.js &amp; deployed on Vercel
        </footer>
      </div>
    </main>
  );
}
