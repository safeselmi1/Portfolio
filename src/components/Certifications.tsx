const certifications = [
  {
    title: "GoMyCode Instructors Training & Onboarding",
    issuer: "GoMyCode",
    date: "May 2026",
    badge: "NEW",
  },
  {
    title: "ReactJS",
    issuer: "OpusLAB",
    date: "2024",
  },
  {
    title: "Innovation Challenge",
    issuer: "ESSECT-JE",
    date: "2022",
  },
  {
    title: "Public Speaking",
    issuer: "ISAMM-J2I",
    date: "2023",
  },
  {
    title: "Jet Impact",
    issuer: "ESSECT-JE",
    date: "2022",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-4xl mx-auto px-10 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-4">
        05 — Certifications
      </p>
      <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] text-white leading-tight mb-12">
        Credentials
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map(({ title, issuer, date, badge }) => (
          <div
            key={title}
            className="flex flex-col gap-2 p-5 rounded-xl border border-white/8 bg-white/2 hover:border-violet-400/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm font-medium text-white leading-snug">
                {title}
              </span>
              {badge && (
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-emerald-400 border border-emerald-400/30 rounded-full px-2 py-0.5">
                  {badge}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
              <span className="text-violet-400">{issuer}</span>
              <span>·</span>
              <span>{date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-24" />
    </section>
  );
}
