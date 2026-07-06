import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown, Download, Eye } from "lucide-react";
import myProfilePicture from '../../profile.jpeg';
import { motion } from "motion/react";
<<<<<<< HEAD

const typingPhrases = [
  "Technical Project Coordinator",
  "Data Analyst",
  "AI-Powered Product Operations",
  "DCEM Operations Lead",
  "Power BI + SQL Practitioner",
=======
import { ImpactCards } from "./ImpactCards";

const typingPhrases = [
  "Agile Delivery",
  "Project Governance",
  "Data-Driven Decision Maker",
  "Stakeholder Management",
  "Power BI Reporting",
>>>>>>> main
];
export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

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

  const scrollToAbout = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            width: 600,
            height: 600,
            top: "-10%",
            left: "-10%",
            background: "radial-gradient(circle, #2979ff, transparent)",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-15"
          style={{
            width: 500,
            height: 500,
            bottom: "-5%",
            right: "-5%",
            background: "radial-gradient(circle, #7c3aed, transparent)",
            animationDuration: "6s",
          }}
        />
        <div
          className="absolute rounded-full blur-2xl opacity-10 animate-pulse"
          style={{
            width: 300,
            height: 300,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, #00e5ff, transparent)",
            animationDuration: "8s",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(41,121,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(41,121,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mb-6 border"
            style={{
              background: "rgba(41, 121, 255, 0.1)",
              borderColor: "rgba(41, 121, 255, 0.3)",
              color: "#4f9aff",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
<<<<<<< HEAD
            Available for Opportunities
=======
            Ready to Drive Your Next Project
>>>>>>> main
          </div>

          <h1
            className="mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
<<<<<<< HEAD
              color: "#e8eaf6",
            }}
          >
            Hi, I'm{" "}
=======
              color: "var(--foreground)",
            }}
          >
            Hi, I'm a{" "}
>>>>>>> main
            <span
              style={{
                background: "linear-gradient(135deg, #2979ff 0%, #7c3aed 50%, #00e5ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
<<<<<<< HEAD
            >
              Mehwish
            </span>
            <br />
            Shahzad
=======
             
            >
              PROJECT
            </span>
            <br />
            Manager
>>>>>>> main
          </h1>

          {/* Typing effect */}
          <div
            className="mb-6 flex items-center gap-2"
<<<<<<< HEAD
            style={{ fontFamily: "var(--font-mono)", color: "#8892b0" }}
=======
            style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)" }}
>>>>>>> main
          >
            <span style={{ color: "#2979ff" }}>&gt;</span>
            <span className="text-foreground">
              {displayText}
              <span
                className="animate-pulse ml-0.5"
                style={{ color: "#2979ff" }}
              >
                |
              </span>
            </span>
          </div>

          <p
            className="mb-8 max-w-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
<<<<<<< HEAD
              color: "#8892b0",
              fontSize: "1.05rem",
            }}
          >
            Technical Project Coordinator and Data Analyst focused on DCEM
            operations, reporting clarity, and AI-powered product workflows
            that help teams move from scattered updates to confident execution.
          </p>

=======
              color: "var(--muted-foreground)",
              fontSize: "1.05rem",
            }}
          >
            Scaled Agile delivery across 10+ cross-functional teams, managing 284,452
             Trouble Tickets while strengthening governance, improving operational visibility, 
             and accelerating business decision-making.
            
          </p>
           ▲ 5%
            Equipment Connection Accuracy
            Improved in 2 Months
            <ImpactCards />
            <div className="mt-12 flex gap-4"></div>
>>>>>>> main
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                fontFamily: "var(--font-body)",
                background: "linear-gradient(135deg, #2979ff, #7c3aed)",
                color: "#fff",
                boxShadow: "0 0 30px rgba(41, 121, 255, 0.3)",
              }}
            >
              <Eye size={16} />
              View Experience
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium border transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "var(--font-body)",
                borderColor: "rgba(41, 121, 255, 0.4)",
                color: "#4f9aff",
                background: "rgba(41, 121, 255, 0.05)",
              }}
            >
              <Download size={16} />
              Contact Me
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
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
                className="p-3 rounded-xl border transition-all duration-300 hover:scale-110 group"
                style={{
                  borderColor: "var(--glass-border)",
                  background: "var(--glass)",
                }}
              >
                <Icon
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Portrait / Avatar area */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: "conic-gradient(from 0deg, #2979ff, #7c3aed, #00e5ff, #2979ff)",
                padding: 3,
                borderRadius: "50%",
                animationDuration: "3s",
              }}
            />
            {/* Avatar container */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4"
              style={{
                borderColor: "transparent",
                background: "linear-gradient(135deg, #111633, #1a2050)",
                boxShadow: "0 0 60px rgba(41, 121, 255, 0.3), 0 0 120px rgba(124, 58, 237, 0.2)",
              }}
            >
              <img
                src={myProfilePicture}
                alt="Mehwish Shahzad"
                className="w-full h-full object-cover"
              />
              {/* Overlay with initials fallback */}
              <div
                className="absolute inset-0 flex items-end justify-center pb-6"
                style={{ background: "linear-gradient(to top, rgba(5,7,26,0.7), transparent)" }}
              >
                <span
<<<<<<< HEAD
                  className="text-sm font-medium tracking-widest"
=======
                  className="text-1xl md:text-1xl font-bold tracking-[0.2em] uppercase"
>>>>>>> main
                  style={{ fontFamily: "var(--font-mono)", color: "#4f9aff" }}
                >
                  MEHWISH.SHAHZAD
                </span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-3 py-2 rounded-xl border text-xs"
              style={{
<<<<<<< HEAD
                background: "rgba(13, 17, 48, 0.9)",
=======
                background: "var(--card)",
>>>>>>> main
                borderColor: "rgba(41, 121, 255, 0.3)",
                color: "#4f9aff",
                fontFamily: "var(--font-mono)",
                backdropFilter: "blur(10px)",
              }}
            >
<<<<<<< HEAD
              Data Analyst
=======
              Project Lead (Agile)
>>>>>>> main
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl border text-xs"
              style={{
<<<<<<< HEAD
                background: "rgba(13, 17, 48, 0.9)",
=======
                background: "var(--card)",
>>>>>>> main
                borderColor: "rgba(124, 58, 237, 0.3)",
                color: "#a78bfa",
                fontFamily: "var(--font-mono)",
                backdropFilter: "blur(10px)",
              }}
            >
<<<<<<< HEAD
              DCEM Ops Lead
=======
              Cross-Functional Delivery
>>>>>>> main
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs" style={{ fontFamily: "var(--font-mono)" }}>scroll</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}


