import { useEffect, useState, useRef } from "react";
import { Eye, Download } from "lucide-react";
import myProfilePicture from "../../profile.jpeg";
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
      <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-4" 
        style={{ background: "var(--navy)" }}
        >   

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Reduced pt-32 to pt-16 to align with header */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mb-6 border" style={{ background: "rgba(41, 121, 255, 0.1)", borderColor: "rgba(41, 121, 255, 0.3)", color: "#4f9aff", fontFamily: "var(--font-mono)" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Ready to drive your next project
          </div>
          
          <h1 className="mb-1 leading-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#e8eaf6" }}>
            <span className="block text-xl md:text-2xl mb-2 text-white font-bold">Hi, I'm a</span>
            <span style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", background: "linear-gradient(135deg, #2979ff 0%, #7c3aed 50%, #00e5ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>PROJECT</span>
            <br />
            <span style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#e8eaf6" }}>Manager</span>
          </h1>

          <div className="mb-0 flex items-center gap-2" style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)" }}>
            <span style={{ color: "#2979ff" }}>&gt;</span>
            <span className="text-foreground">{displayText}<span className="animate-pulse ml-0.5" style={{ color: "#2979ff" }}>|</span></span>
          </div>

          <div className="mb-4 max-w-lg">
            <p className="leading-relaxed text-slate-400" style={{ fontSize: "1.05rem" }}>
            </p>
            <p className="mt-4 text-sm text-[#4f9aff] font-medium flex items-center gap-2">
              <span className="text-lg">▲</span> Improved Equipment Data Accuracy by 5% through Process Automation
            </p>
          </div>

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
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col items-center gap-8 pt-16">
          <div className="relative">
            <div className="absolute -top-6 right-10 px-3 py-1 rounded-full text-[10px] border border-[#2979ff]/30 bg-[#0f172a]/50 text-[#4f9aff] font-mono whitespace-nowrap z-20">Project Lead (Agile)</div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#2979ff]/30">
              <img src={myProfilePicture} alt="Mehwish Shahzad" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 left-0 px-3 py-1 rounded-full text-[10px] border border-[#2979ff]/30 bg-[#0f172a]/50 text-[#4f9aff] font-mono whitespace-nowrap z-20">
            Stakeholder Management</div>
          </div>

          <div className="bg-[#0f172a]/40 border border-[#2979ff]/20 p-6 rounded-2xl max-w-sm text-center backdrop-blur-sm">
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              I turned 284,000 tickets of operational complexity into disciplined, on-time delivery — leading cross-functional teams through Agile governance, clear reporting, and BRD/SOP ownership.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ImpactCards: Changed -mt-20 to -mt-4 to pull them closer to buttons */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 -mt-4">
        <ImpactCards />
      </div>
    </section>
  );
}
