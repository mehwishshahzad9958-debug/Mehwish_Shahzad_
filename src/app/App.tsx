import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  /* Light-mode overrides so the site looks intentional in both modes */
  useEffect(() => {
    if (!darkMode) {
      document.documentElement.style.setProperty("--background", "#f0f4ff");
      document.documentElement.style.setProperty("--foreground", "#0d1130");
      document.documentElement.style.setProperty("--card", "#ffffff");
      document.documentElement.style.setProperty("--card-foreground", "#0d1130");
      document.documentElement.style.setProperty("--muted", "#e2e8f8");
      document.documentElement.style.setProperty("--muted-foreground", "#5a6080");
      document.documentElement.style.setProperty("--glass", "rgba(255,255,255,0.8)");
      document.documentElement.style.setProperty("--glass-border", "rgba(41,121,255,0.15)");
      document.documentElement.style.setProperty("--navy", "#f0f4ff");
      document.documentElement.style.setProperty("--input", "#ffffff");
      document.documentElement.style.setProperty("--input-background", "#ffffff");
      document.documentElement.style.setProperty("--border", "rgba(41,121,255,0.18)");
    } else {
      document.documentElement.style.removeProperty("--background");
      document.documentElement.style.removeProperty("--foreground");
      document.documentElement.style.removeProperty("--card");
      document.documentElement.style.removeProperty("--card-foreground");
      document.documentElement.style.removeProperty("--muted");
      document.documentElement.style.removeProperty("--muted-foreground");
      document.documentElement.style.removeProperty("--glass");
      document.documentElement.style.removeProperty("--glass-border");
      document.documentElement.style.removeProperty("--navy");
      document.documentElement.style.removeProperty("--input");
      document.documentElement.style.removeProperty("--input-background");
      document.documentElement.style.removeProperty("--border");
    }
  }, [darkMode]);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "var(--font-body)",
        background: darkMode ? "#05071a" : "#f0f4ff",
        scrollBehavior: "smooth",
      }}
    >
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode((d) => !d)} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
