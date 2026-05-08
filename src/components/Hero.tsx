export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-28 pb-20 px-10"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          {/* Status tag */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-violet-400 border border-violet-400/30 rounded-full px-4 py-2 mb-8 bg-violet-400/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Full-Stack Software Engineer
          </div>

          {/* Name */}
          <h1 className="font-serif text-[clamp(3.5rem,9vw,6.5rem)] leading-none tracking-tight text-white mb-2">
            Saf<em className="text-violet-400 not-italic">é</em>
            <br />
            Selmi
          </h1>

          {/* Description */}
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10 font-light mt-6">
         Full-Stack Software Engineer graduated in{" "}
        <span className="text-white font-medium">
          Software Engineering
       </span>
        , with practical experience in developing scalable web applications,
        business platforms, and workflow automation solutions. 
        </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-all hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
              href="/safe_selmi_cv.pdf"
              download
              className="px-7 py-3.5 rounded-xl border border-white/15 text-white text-sm font-medium hover:border-violet-400 hover:text-violet-400 transition-all hover:-translate-y-0.5"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl border border-white/15 text-white text-sm font-medium hover:border-violet-400 hover:text-violet-400 transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll */}
          <div className="flex items-center gap-3 mt-16 text-xs uppercase tracking-widest text-zinc-600">
            <div className="w-10 h-px bg-zinc-600" />
            Scroll to explore
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full" />

         <img
  src="/profile.png"
  alt="Safé Selmi"
  className="relative w-[260px] h-[420px] object-contain rounded-[2rem] border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-4"
/>
          </div>
        </div>
      </div>
    </section>
  );
}