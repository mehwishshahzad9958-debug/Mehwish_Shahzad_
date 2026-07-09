import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  darkMode: boolean;
  toggleDark: () => void;
}

export function Navbar({ darkMode, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled
          ? darkMode
            ? "rgba(5, 7, 26, 0.85)"
            : "rgba(240, 244, 255, 0.88)"
          : "transparent",
        borderColor: "var(--glass-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-8 group"
        >
          <span
            className="text-xl font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(135deg, #0f49ad, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MS
          </span>
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            Mehwish Shahzad
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                activeSection === href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{
                fontFamily: "var(--font-body)",
                background:
                  activeSection === href.slice(1)
                    ? "rgba(41, 121, 255, 0.1)"
                    : "transparent",
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={toggleDark}
            className="ml-2 p-2 rounded-lg border transition-all hover:border-primary"
            style={{ borderColor: "var(--glass-border)" }}
          >
            {darkMode ? (
              <Sun size={16} className="text-muted-foreground" />
            ) : (
              <Moon size={16} className="text-muted-foreground" />
            )}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleDark} className="p-2">
            {darkMode ? <Sun size={16} className="text-muted-foreground" /> : <Moon size={16} className="text-muted-foreground" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 border-t flex flex-col gap-1"
          style={{
            borderColor: "var(--glass-border)",
            background: darkMode ? "rgba(5, 7, 26, 0.95)" : "rgba(240, 244, 255, 0.98)",
          }}
        >
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className="text-left px-4 py-3 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
