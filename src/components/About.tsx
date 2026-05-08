const stats = [
  { num: "3+", label: "Years of experience", icon: "⚡" },
  { num: "5+", label: "Projects shipped", icon: "🚀" },
  { num: "TN", label: "Based in Tunisia", icon: "🌍" },
];

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-10 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-4">
        01 — About
      </p>
      <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] text-white leading-tight mb-12">
        Who I am
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Text */}
        <div className="space-y-4 text-zinc-400 font-light leading-relaxed">
          <p>
            I&apos;m a{" "}
            <span className="text-white font-medium">
              Full-Stack Software Engineer
            </span>{" "}
            based in Tunisia, passionate about crafting elegant and performant
            web applications from concept to deployment.
          </p>
          <p>
            My expertise spans the full stack — from building{" "}
            <span className="text-white font-medium">reactive UIs</span> with
            Next.js and TypeScript, to designing robust{" "}
            <span className="text-white font-medium">backend systems</span> with
            Node.js, NestJS and MongoDB.
          </p>
          <p>
            I thrive on integrating{" "}
            <span className="text-white font-medium">AI-driven workflows</span>{" "}
            into modern SaaS products and believe great software is the
            intersection of clean code and thoughtful design.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-3">
          {stats.map(({ num, label, icon }) => (
            <div
              key={label}
              className="flex items-center justify-between bg-[#16161f] border border-white/8 rounded-xl px-6 py-4"
            >
              <div>
                <div className="font-serif text-3xl text-violet-400">{num}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
              </div>
              <span className="text-2xl">{icon}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-24" />
    </section>
  );
}
