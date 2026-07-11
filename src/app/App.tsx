import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import  ResearchPaper from "./components/ResearchPaper";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle function for clarity
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Sync theme with document class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-navy-950 text-white" : "bg-blue-50 text-slate-900"}`}>
      <Navbar darkMode={darkMode} toggleDark={toggleDarkMode} />
      
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ResearchPaper />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}