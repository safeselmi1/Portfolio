export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        <div className="space-y-5 text-lg">
          <a
            href="mailto:safe.selmi@email.com"
            className="flex items-center gap-3 hover:text-pink-400 transition"
          >
            <span>✉</span>
            s.safeselmi@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/safa11/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-500 transition"
          >
            <span>in</span>
            LinkedIn
          </a>

          <a
            href="https://github.com/safeselmi1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gray-400 transition"
          >
            <span>⌥</span>
            GitHub
          </a>

          <div className="flex items-center gap-3">
            <span>☎</span>
            +216 90 338 048
          </div>
        </div>
      </div>
    </section>
  );
}