import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="pt-16 pb-8 px-6 border-t" style={{ background: "var(--background)", borderColor: "var(--glass-border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div
              className="text-2xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-display)",
                background: "linear-gradient(135deg, #2979ff, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mehwish Shahzad
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
              Project Lead specializing in Agile delivery and cross-functional leadership. Transforming operational complexity into disciplined, on-time results.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/mehwish-shahzad-engineer/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/mehwishshahzad9958-debug", label: "GitHub" },
                { icon: Mail, href: "mailto:mehwishshahzad9958@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="p-2.5 rounded-xl border transition-all hover:border-primary hover:scale-110"
                  style={{ borderColor: "var(--glass-border)", color: "var(--muted-foreground)", background: "var(--glass)" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-mono)", color: "#2979ff" }}>
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => scrollTo(href)}
                  className="text-left text-sm transition-colors hover:text-primary"
                  style={{ fontFamily: "var(--font-body)", color: "var(--muted-foreground)" }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-mono)", color: "#2979ff" }}>
              Core Competencies
            </h4>
            <div className="space-y-3">
              {[
                { label: "Agile Governance" },
                { label: "Stakeholder Management" },
                { label: "BRD & SOP Ownership" },
                { label: "Operational Delivery" },
              ].map(({ label }) => (
                <div key={label} className="flex items-center gap-2 text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--muted-foreground)" }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#2979ff" }} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderColor: "var(--glass-border)" }}>
          <p className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)" }}>
            (c) 2026 Mehwish Shahzad. Committed to excellence in project leadership.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs px-4 py-2 rounded-xl border transition-all hover:border-primary hover:text-primary"
            style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)", borderColor: "var(--glass-border)", background: "var(--glass)" }}
          >
            <ArrowUp size={12} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}