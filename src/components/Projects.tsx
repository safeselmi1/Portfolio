const projectSections = [
  {
    title: "Professional Projects",
    projects: [
      {
        title: "Lamiss Fitness Platform",
        description:
          "WooCommerce fitness platform with subscriptions, client account access, and personalized training program management.",
        tech: ["WordPress", "WooCommerce", "PHP", "CSS"],
        link: "https://shop.lamissfitness.com/my-account/",
      },
      {
        title: "Agrimorb Website",
        description:
          "Website dedicated to sustainable agriculture and local products with a clean responsive interface.",
        tech: ["WordPress", "JavaScript", "CSS"],
        link: "https://agrimorb.tn/",
      },
    ],
  },
  {
    title: "Internship Projects",
    projects: [
      {
        title: "OpusLAB E-learning Platform",
        description:
          "Modular e-learning platform with adaptive content, real-time tracking, automation pipelines, and microservices architecture.",
        tech: ["NestJS", "Next.js", "Redis", "MongoDB"],
        link: "https://github.com/safeselmi1/opuslab",
      },
      {
        title: "TACIRCREA Project Management Platform",
        description:
          "Platform for managing innovative project holders, centralizing projects, and automating reporting workflows.",
        tech: ["ReactJS", "Node.js", "MongoDB"],
        link: "https://github.com/safeselmi1/Tacircrea",
      },
      {
        title: "Official OpusLAB Website",
        description:
          "Official company website focused on SEO optimization, clean interface, and improved user experience.",
        tech: ["Next.js", "Node.js", "MongoDB"],
        link: "https://opuslab.tn/fr",
      },
    ],
  },
  {
    title: "Academic Projects",
    projects: [
      {
        title: "Foyer Management Application",
        description:
          "Backend application for managing university dormitory operations using Spring Boot architecture.",
        tech: ["Java", "Spring Boot", "REST API"],
        link: "https://github.com/safeselmi1/foyerSpring.git",
      },
      {
        title: "Dental Clinic Mobile App",
        description:
          "Mobile application for managing dental clinic appointments and patients.",
        tech: ["Java"],
        link: "#",
      },
      {
        title: "YouTube Clone",
        description:
          "Frontend YouTube clone with video playback, comments, and subscription features.",
        tech: ["ReactJS"],
        link: "#",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>

        <p className="text-gray-400 mb-12 max-w-2xl">
          A selection of professional, internship, and academic projects built
          with modern web technologies.
        </p>

        <div className="space-y-16">
          {projectSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-2xl font-semibold mb-6">
                {section.title}
              </h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.projects.map((project) => (
                  <a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-white/10 p-6 hover:border-violet-400 hover:-translate-y-1 transition-all"
                  >
                    <h4 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h4>

                    <p className="text-gray-400 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="text-sm rounded-full border border-white/10 px-3 py-1 text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}