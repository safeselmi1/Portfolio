const experiences = [
  {
    date: "2025–2026\nInstructor",
    role: "Programming Instructor",
    company: "// OpusLAB",
    description:
      "Trained 20+ learners aged 12–22 on Python, HTML/CSS, JavaScript and Algorithms. Designed hands-on exercises and mini-projects adapted to different age groups and skill levels.",
  },
  {
    date: "2024\nInternship",
    role: "Full-Stack Developer Intern",
    company: "// AI E-Learning Startup",
    description:
      "Built a modular e-learning platform with adaptive learning algorithms, real-time tracking dashboards and automated educational content workflows using NestJS, Next.js and MongoDB.",
  },
  {
    date: "2023–2024\nFreelance",
    role: "WordPress & WooCommerce Developer",
    company: "// Freelance",
    description:
      "Delivered custom WordPress and WooCommerce solutions for clients, including a full fitness subscription platform with automated session generation and member management.",
  },
  {
    date: "2023\nProject",
    role: "Full-Stack Developer",
    company: "// TACIRCREA",
    description:
      "Designed and built a project management platform for innovative project holders, with centralized data management and Google Sheets API integration for stakeholder reporting.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-10 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-4">
        04 — Experience
      </p>
      <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] text-white leading-tight mb-12">
        Career
      </h2>

      <div className="flex flex-col">
        {experiences.map(({ date, role, company, description }, i) => (
          <div
            key={role}
            className={`grid md:grid-cols-[160px_1fr] gap-8 py-8 ${
              i < experiences.length - 1 ? "border-b border-white/8" : ""
            }`}
          >
            <div className="font-mono text-xs text-zinc-500 whitespace-pre-line leading-relaxed pt-0.5">
              {date}
            </div>
            <div>
              <div className="text-base font-medium text-white mb-1">{role}</div>
              <div className="font-mono text-xs text-violet-400 mb-3">
                {company}
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-24" />
    </section>
  );
}
