export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-28 pb-20 px-10">
      <div className="max-w-5xl mx-auto w-full">

        <p className="font-mono text-sm mb-6 tracking-wide" style={{ color: "#D174D2" }}>
          hey, I&apos;m —
        </p>

        <div className="flex items-end justify-between gap-8 flex-wrap">
          <h1 className="font-serif text-[clamp(4rem,12vw,8rem)] leading-none tracking-tight text-white">
            Safé<br />Selmi
          </h1>

          <div className="shrink-0 mb-2">
            <img
              src="/profile.jpg"
              alt="Safé Selmi"
              className="w-32 h-32 rounded-full object-cover object-top"
              style={{ border: "3px solid rgba(209,116,210,0.4)" }}
            />
          </div>
        </div>

        <div className="w-full h-px my-10" style={{ background: "rgba(255,255,255,0.08)" }} />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-white/60 text-lg leading-relaxed font-light">
              Full-stack engineer based in{" "}
              <span className="text-white font-medium">Tunis, Tunisia</span>
              . I build scalable web applications, teach programming to learners
              aged 12–22, and care deeply about clean, maintainable code.
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              Currently freelancing — open to remote CDI or project-based work.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="#projects"
              className="inline-block px-6 py-3 text-white text-sm rounded-xl transition-opacity hover:opacity-80"
              style={{ background: "linear-gradient(135deg, #D174D2, #E0563F)" }}
            >
              See my work
            </a>
            <a
              href="/cv_safe_selmi.pdf"
              download
              className="inline-block px-6 py-3 text-white/70 text-sm rounded-xl border border-white/15 hover:border-white/40 hover:text-white transition-all"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 text-white/70 text-sm rounded-xl border border-white/15 hover:border-white/40 hover:text-white transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
