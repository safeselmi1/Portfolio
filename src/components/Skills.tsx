const skillGroups = [
  { label: "Frontend", skills: "React · Next.js · Angular · TypeScript · Tailwind CSS · JavaScript" },
  { label: "Backend", skills: "Node.js · NestJS · Spring Boot · Java · .NET / C# · PHP · Python" },
  { label: "Architecture", skills: "Microservices · REST APIs · SOLID · DDD · TDD / BDD" },
  { label: "Databases", skills: "MongoDB · MySQL · Redis · Neo4j · SQL" },
  { label: "DevOps & Cloud", skills: "Docker · CI/CD · GCP · Azure · Git" },
  { label: "Tools", skills: "Figma · Postman · Trello · WordPress · SCRUM" },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-10 py-24">
      <p className="font-mono text-xs uppercase tracking-widest mb-8" style={{ color: "#D174D2" }}>
        Skills
      </p>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        {skillGroups.map(({ label, skills }) => (
          <div
            key={label}
            className="grid md:grid-cols-[160px_1fr] gap-4 py-6"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-white/30 pt-0.5">
              {label}
            </span>
            <p className="text-white/60 text-sm leading-relaxed">{skills}</p>
          </div>
        ))}
      </div>

      <div className="w-full h-px mt-24" style={{ background: "rgba(255,255,255,0.08)" }} />
    </section>
  );
}
