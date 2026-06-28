import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-16 pb-8 px-6 border-t" style={{ background: "var(--navy)", borderColor: "var(--glass-border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
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
              Technical Project Coordinator, Data Analyst, and AI-powered product operations practitioner open to work all over India.
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
                  style={{ borderColor: "var(--glass-border)", color: "var(--muted-foreground)" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t flex items-center justify-center pt-8" style={{ borderColor: "var(--glass-border)" }}>
          <p className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)" }}>
            (c) 2026 Mehwish Shahzad. All rights reserved.
            Built with React, powered by curiosity, and driven by data.
          </p>
        </div>
      </div>
    </footer>
  );
}