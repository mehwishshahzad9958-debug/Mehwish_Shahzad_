import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useState } from "react";

const skillCategories = [
  {
    id: "analytics",
    label: "Analytics",
    color: "#2979ff",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Advanced Excel", level: 90 },
      { name: "SQL", level: 82 },
      { name: "Operational Reporting", level: 86 },
    ],
  },
  {
    id: "ops",
    label: "Product Ops",
    color: "#7c3aed",
    skills: [
      { name: "Jira", level: 84 },
      { name: "Confluence", level: 82 },
      { name: "Stakeholder Coordination", level: 88 },
      { name: "Process Documentation", level: 85 },
    ],
  },
  {
    id: "ai",
    label: "AI & Engineering",
    color: "#00e5ff",
    skills: [
      { name: "Prompt Engineering", level: 86 },
      { name: "React Native", level: 72 },
      { name: "GitHub", level: 78 },
      { name: "Machine Learning Concepts", level: 78 },
    ],
  },
];

function SkillBar({ name, level, color, inView, delay }: { name: string; level: number; color: string; inView: boolean; delay: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm" style={{ fontFamily: "var(--font-body)", color: "#ccd6f6" }}>
          {name}
        </span>
        <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, inView } = useInView(0.1);
  const [active, setActive] = useState("analytics");
  const current = skillCategories.find((c) => c.id === active)!;

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, var(--navy) 0%, #080c26 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs mb-3 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "#2979ff" }}
          >
            02 / Skills
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#e8eaf6",
            }}
          >
            Technical &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #00e5ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Operations Toolkit
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm" style={{ color: "#8892b0", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
            A practical skill set across analytics, coordination, AI workflows, and engineering-adjacent tooling.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300"
              style={{
                fontFamily: "var(--font-body)",
                background: active === cat.id ? `${cat.color}1a` : "var(--glass)",
                borderColor: active === cat.id ? cat.color + "60" : "var(--glass-border)",
                color: active === cat.id ? cat.color : "#8892b0",
                backdropFilter: "blur(10px)",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-2xl border"
            style={{
              background: "var(--glass)",
              borderColor: current.color + "30",
              backdropFilter: "blur(16px)",
            }}
          >
            <h3 className="mb-6" style={{ fontFamily: "var(--font-display)", color: current.color, fontWeight: 700, fontSize: "1.1rem" }}>
              {current.label}
            </h3>
            {current.skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} color={current.color} inView={inView} delay={0.2 + i * 0.1} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                {current.skills.map((skill, i) => {
                  const radius = 70 - i * 14;
                  const circumference = 2 * Math.PI * radius;
                  const dash = (skill.level / 100) * circumference;
                  return (
                    <g key={skill.name}>
                      <circle cx="100" cy="100" r={radius} fill="none" stroke={`${current.color}15`} strokeWidth="10" />
                      <motion.circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke={current.color}
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={`${circumference}`}
                        initial={{ strokeDashoffset: circumference }}
                        animate={inView ? { strokeDashoffset: circumference - dash } : { strokeDashoffset: circumference }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                        opacity={1 - i * 0.15}
                      />
                    </g>
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)", color: current.color }}>
                  {Math.round(current.skills.reduce((a, s) => a + s.level, 0) / current.skills.length)}%
                </span>
                <span className="text-xs mt-1" style={{ fontFamily: "var(--font-mono)", color: "#8892b0" }}>
                  focus strength
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
