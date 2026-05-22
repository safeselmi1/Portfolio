export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-10 py-24">
      <p className="font-mono text-xs uppercase tracking-widest mb-8" style={{ color: "#D174D2" }}>
        About
      </p>

      <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed max-w-2xl">
        <p>
          I graduated in{" "}
          <span className="text-white font-medium">Software Engineering</span>{" "}
          from ISAMM in 2025 — but I&apos;ve been building things for the web
          long before that.
        </p>
        <p>
          My stack leans heavily on{" "}
          <span className="text-white font-medium">React, Next.js, and NestJS</span>
          , with real experience in Spring Boot, Angular, and cloud deployments
          on GCP and Azure. I like systems that are clean to maintain and
          delightful to use.
        </p>
        <p>
          Alongside development I spent a year as a{" "}
          <span className="text-white font-medium">programming instructor</span>
          , teaching Python, JavaScript and algorithms to learners aged 12 to
          22. That experience changed how I write code — I started thinking much
          more carefully about clarity.
        </p>
        <p>
          Outside of work I&apos;m involved in student organisations, public
          speaking, and anything at the intersection of tech and people.
        </p>
      </div>

      <div className="flex gap-12 mt-12 text-sm text-white/40 font-mono">
        <div>
          <div className="text-white text-2xl font-serif">3+</div>
          <div className="mt-1">years building</div>
        </div>
        <div>
          <div className="text-white text-2xl font-serif">10+</div>
          <div className="mt-1">projects shipped</div>
        </div>
        <div>
          <div className="text-white text-2xl font-serif">20+</div>
          <div className="mt-1">learners trained</div>
        </div>
      </div>

      <div className="w-full h-px mt-24" style={{ background: "rgba(255,255,255,0.08)" }} />
    </section>
  );
}
