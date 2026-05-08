const skillGroups = [
  {
    label: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "NestJS", "Express", "REST APIs", "GraphQL"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Docker", "Vercel", "Git", "GitHub Actions", "Linux"],
  },
  {
    label: "AI & Integrations",
    skills: ["OpenAI API", "LangChain", "Stripe", "Google APIs"],
  },
  {
    label: "CMS & Other",
    skills: ["WordPress", "WooCommerce", "PHP", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-10 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-4">
        03 — Skills
      </p>
      <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] text-white leading-tight mb-12">
        Tech Stack
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map(({ label, skills }) => (
          <div
            key={label}
            className="bg-[#111118] border border-white/8 rounded-2xl p-6"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-4">
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-zinc-300 hover:border-violet-400/50 hover:text-violet-300 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-24" />
    </section>
  );
}
