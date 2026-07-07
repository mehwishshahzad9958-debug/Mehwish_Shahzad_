import { useEffect, useState, useRef } from "react";
import { Eye, Download } from "lucide-react";
import myProfilePicture from '../../profile.jpeg';
import { motion } from "motion/react";
import { ImpactCards } from "./ImpactCards";

const typingPhrases = [
  "Agile Delivery",
  "Project Governance",
  "Data-Driven Decision Maker",
  "Stakeholder Management",
  "Power BI Reporting",
];

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const phrase = typingPhrases[phraseIndex];
    const speed = deleting ? 50 : 90;

    timeoutRef.current = setTimeout(() => {
      if (!deleting && charIndex < phrase.length) {
        setDisplayText(phrase.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === phrase.length) {
        timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIndex > 0) {
        setDisplayText(phrase.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % typingPhrases.length);
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full blur-3xl opacity-20 animate-pulse" style={{ width: 600, height: 600, top: "-10%", left: "-10%", background: "radial-gradient(circle, #2979ff, transparent)", animationDuration: "4s" }} />
        <div className="absolute rounded-full blur-3xl opacity-15" style={{ width: 500, height: 500, bottom: "-5%", right: "-5%", background: "radial-gradient(circle, #7c3aed, transparent)", animationDuration: "6s" }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mb-6 border" style={{ background: "rgba(41, 121, 255, 0.1)", borderColor: "rgba(41, 121, 255, 0.3)", color: "#4f9aff", fontFamily: "var(--font-mono)" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Ready to drive your next project
          </div>
            <h1 className="mb-4 leading-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#e8eaf6" }}>
            <span className="block text-xl md:text-2xl mb-2 text-white font-bold">
              Hi, I'm a
            </span>
            
            <span style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              background: "linear-gradient(135deg, #2979ff 0%, #7c3aed 50%, #00e5ff 100%)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent" 
            }}>
              PROJECT
            </span>
            <br />
            <span style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#e8eaf6" }}>
              Manager
            </span>
          </h1>
          <div className="mb-6 flex items-center gap-2" style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)" }}>
            <span style={{ color: "#2979ff" }}>&gt;</span>
            <span className="text-foreground">{displayText}<span className="animate-pulse ml-0.5" style={{ color: "#2979ff" }}>|</span></span>
          </div>

          <p className="mb-8 max-w-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#8892b0", fontSize: "1.05rem" }}>
            Technical Project Coordinator and Data Analyst focused on DCEM operations, reporting clarity, and AI-powered product workflows.
          </p>
          ▲ Improved Equipment Data Accuracy by 5% through Process Automation

          <div className="flex flex-wrap gap-4">
            <button onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #2979ff, #7c3aed)", color: "#fff" }}>
              <Eye size={16} /> View Experience
            </button>
            <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #2979ff, #7c3aed)", color: "#fff" }}>
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Profile Image Column */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#2979ff]/30">
              <img src={myProfilePicture} alt="Mehwish Shahzad" className="w-full h-full object-cover" />
            </div>
        </motion.div>
      </div>

      {/* ImpactCards placed outside the hero grid for better visibility */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-12">
        <ImpactCards />
      </div>
    </section>
  );
}