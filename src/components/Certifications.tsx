const certifications = [
  { title: "GoMyCode Instructors Training & Onboarding", issuer: "GoMyCode", date: "May 2026", badge: "NEW" },
  { title: "ReactJS", issuer: "OpusLAB", date: "2024" },
  { title: "Innovation Challenge", issuer: "ESSECT-JE", date: "2022" },
  { title: "Public Speaking", issuer: "ISAMM-J2I", date: "2023" },
  { title: "Jet Impact", issuer: "ESSECT-JE", date: "2022" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-4xl mx-auto px-10 py-24">
      <p className="font-mono text-xs uppercase tracking-widest mb-8" style={{ color: "#D174D2" }}>
        Certifications
      </p>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        {certifications.map(({ title, issuer, date, badge }) => (
          <div
            key={title}
            className="flex items-center justify-between gap-4 py-5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <span className="text-white text-sm font-medium">{title}</span>
              {badge && (
                <span
                  className="ml-2 font-mono text-[10px] uppercase tracking-widest rounded-full px-2 py-0.5"
                  style={{ color: "#7a9e7e", border: "1px solid rgba(122,158,126,0.4)" }}
                >
                  {badge}
                </span>
              )}
              <div className="font-mono text-xs text-white/30 mt-0.5">{issuer}</div>
            </div>
            <span className="font-mono text-xs text-white/30 shrink-0">{date}</span>
          </div>
        ))}
      </div>

      <div className="w-full h-px mt-24" style={{ background: "rgba(255,255,255,0.08)" }} />
    </section>
  );
}
