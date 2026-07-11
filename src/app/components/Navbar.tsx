import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" }, // Standardized to lowercase
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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const navBackground = scrolled
    ? darkMode
      ? "rgba(5, 7, 26, 0.85)"
      : "rgba(240, 244, 255, 0.88)"
    : "transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl border-b" : ""
      }`}
      style={{ background: navBackground, borderColor: "var(--glass-border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-8 group">
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
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Mehwish Shahzad</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                activeSection === href.slice(1) ? "text-primary bg-[rgba(41,121,255,0.1)]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
          <button onClick={toggleDark} className="ml-2 p-2 rounded-lg border border-glass-border hover:border-primary transition-all">
            {darkMode ? <Sun size={16} className="text-muted-foreground" /> : <Moon size={16} className="text-muted-foreground" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleDark} className="p-2">{darkMode ? <Sun size={16} /> : <Moon size={16} />}</button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 border-t border-glass-border" style={{ background: navBackground }}>
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className="w-full text-left px-4 py-3 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}