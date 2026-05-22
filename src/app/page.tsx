import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#16101f] min-h-screen overflow-x-hidden relative">
      {/* Ambient gradient orbs inspired by the purple-coral palette */}
      <div className="fixed top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(209,116,210,0.18) 0%, transparent 70%)" }} />
      <div className="fixed bottom-[0px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(224,86,63,0.14) 0%, transparent 70%)" }} />
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(63,86,127,0.12) 0%, transparent 70%)" }} />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />

        <footer className="text-center py-10 border-t border-white/8 font-mono text-xs text-white/30">
          © {new Date().getFullYear()} Safé Selmi
        </footer>
      </div>
    </main>
  );
}
