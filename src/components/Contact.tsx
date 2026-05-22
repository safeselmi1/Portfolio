export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-10 py-24">
      <p className="font-mono text-xs uppercase tracking-widest mb-8" style={{ color: "#D174D2" }}>
        Contact
      </p>

      <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] text-white leading-tight mb-6 max-w-xl">
        Let&apos;s build something together.
      </h2>
      <p className="text-white/50 font-light mb-12 max-w-md leading-relaxed">
        Open to remote CDI positions, freelance projects, or just a good
        conversation about code.
      </p>

      <div className="flex flex-col gap-5">
        <a
          href="mailto:s.safeselmi@gmail.com"
          className="flex items-center gap-4 group w-fit"
        >
          <span className="font-mono text-xs text-white/25 w-16">email</span>
          <span className="text-white text-sm group-hover:text-[#D174D2] transition-colors">
            s.safeselmi@gmail.com
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/safa11/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group w-fit"
        >
          <span className="font-mono text-xs text-white/25 w-16">linkedin</span>
          <span className="text-white text-sm group-hover:text-[#D174D2] transition-colors">
            linkedin.com/in/safa11
          </span>
        </a>
        <a
          href="https://github.com/safeselmi1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group w-fit"
        >
          <span className="font-mono text-xs text-white/25 w-16">github</span>
          <span className="text-white text-sm group-hover:text-[#D174D2] transition-colors">
            github.com/safeselmi1
          </span>
        </a>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-white/25 w-16">phone</span>
          <span className="text-white text-sm">+216 90 338 048</span>
        </div>
      </div>
    </section>
  );
}
