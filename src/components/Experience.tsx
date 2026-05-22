const experiences = [
  {
    date: "Jan 2026 – Present",
    role: "Freelance Developer",
    company: "Self-employed",
    description:
      "WooCommerce fitness platform with subscriptions, auto workout generation, and personalised client dashboard. Sustainable agriculture site with SEO-optimised responsive design.",
  },
  {
    date: "2025 – 2026",
    role: "Programming Instructor",
    company: "OpusLAB",
    description:
      "Trained 20+ learners aged 12–22 on Python, HTML/CSS, JavaScript and Algorithms. Designed hands-on exercises and mini-projects adapted to different age groups and skill levels.",
  },
  {
    date: "Feb – Aug 2025",
    role: "Full-Stack Engineer",
    company: "OpusLAB · Final Year Internship",
    description:
      "Built a modular e-learning SaaS with intelligent content adaptation and real-time learner tracking. Applied SOLID and DDD principles; set up CI/CD pipelines and Docker-based deployments. 3-dev SCRUM team · 2-week sprints.",
  },
  {
    date: "Jul – Aug 2024",
    role: "Web Developer",
    company: "TACIRCREA · Internship",
    description:
      "Developed a project-management app centralising 50+ innovative projects. Integrated Google Sheets synchronisation for automated reporting.",
  },
  {
    date: "Summer 2024",
    role: "Frontend Developer",
    company: "OpusLAB · Summer Internship",
    description:
      "Designed and built the official OpusLAB website; improved SEO and UX.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-10 py-24">
      <p className="font-mono text-xs uppercase tracking-widest mb-8" style={{ color: "#D174D2" }}>
        Experience
      </p>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        {experiences.map(({ date, role, company, description }) => (
          <div
            key={role + company}
            className="grid md:grid-cols-[160px_1fr] gap-6 py-8"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="font-mono text-xs text-white/30 leading-relaxed pt-0.5">
              {date}
            </div>
            <div>
              <div className="text-white font-medium">{role}</div>
              <div className="font-mono text-xs mt-0.5 mb-3" style={{ color: "#E0563F" }}>
                {company}
              </div>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-px mt-24" style={{ background: "rgba(255,255,255,0.08)" }} />
    </section>
  );
}
