const projects = [
  {
    num: "01",
    title: "OpusLAB E-learning Platform",
    type: "Internship · 2025",
    description:
      "Modular SaaS with adaptive content, real-time learner tracking, and microservices architecture.",
    tech: "NestJS · Next.js · Redis · MongoDB",
    link: "https://github.com/safeselmi1/opuslab",
  },
  {
    num: "02",
    title: "TACIRCREA Management Platform",
    type: "Internship · 2024",
    description:
      "Project management app centralising 50+ innovative projects with Google Sheets automation.",
    tech: "ReactJS · Node.js · MongoDB · Neo4j",
    link: "https://github.com/safeselmi1/Tacircrea",
  },
  {
    num: "03",
    title: "Official OpusLAB Website",
    type: "Internship · 2024",
    description:
      "Company website with SEO optimisation and improved user experience.",
    tech: "Next.js · Node.js · MongoDB",
    link: "https://opuslab.tn/fr",
  },
  {
    num: "04",
    title: "Lamiss Fitness Platform",
    type: "Freelance · 2026",
    description:
      "WooCommerce fitness platform with subscriptions, auto workout generation, and member dashboard.",
    tech: "WordPress · WooCommerce · PHP · CSS",
    link: "https://shop.lamissfitness.com/my-account/",
  },
  {
    num: "05",
    title: "Agrimorb Website",
    type: "Freelance · 2026",
    description:
      "Sustainable agriculture showcase with SEO-optimised responsive design.",
    tech: "WordPress · JavaScript · CSS",
    link: "https://agrimorb.tn/",
  },
  {
    num: "06",
    title: "University Residence Management",
    type: "Academic · 2024",
    description:
      "Full REST backend with room allocation, payment tracking, and role-based access control.",
    tech: "Spring Boot · Spring Security · MySQL",
    link: "https://github.com/safeselmi1/foyerSpring.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-10 py-24">
      <p className="font-mono text-xs uppercase tracking-widest mb-8" style={{ color: "#D174D2" }}>
        Work
      </p>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        {projects.map(({ num, title, type, description, tech, link }) => (
          <a
            key={num}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-8 py-8 items-start -mx-4 px-4 rounded-xl transition-colors hover:bg-[rgba(209,116,210,0.05)]"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span className="font-mono text-xs text-white/20 pt-1 shrink-0">{num}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="font-serif text-xl text-white group-hover:text-[#D174D2] transition-colors">
                  {title}
                </h3>
                <span className="font-mono text-xs text-white/30 shrink-0">{type}</span>
              </div>
              <p className="text-white/50 text-sm mt-2 leading-relaxed">{description}</p>
              <p className="font-mono text-xs text-white/25 mt-3">{tech}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="w-full h-px mt-24" style={{ background: "rgba(255,255,255,0.08)" }} />
    </section>
  );
}
