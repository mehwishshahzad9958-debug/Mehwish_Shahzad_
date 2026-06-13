import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { BarChart3, Bot, Briefcase } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    color: "#2979ff",
    date: "Dec 2024 - Present",
    title: "DCEM Operations Lead",
    org: "Indus Towers",
    desc: "Coordinate DC Energy Meter operations with structured tracking, stakeholder updates, and reporting workflows. The role centers on visibility, follow-up discipline, and operational issue resolution.",
    highlights: ["DCEM operations", "Stakeholder reporting", "Issue tracking", "Process coordination"],
  },
  {
    icon: BarChart3,
    color: "#7c3aed",
    date: "Internship",
    title: "Machine Learning Intern",
    org: "Atharvo India Pvt. Ltd.",
    desc: "Worked in a machine-learning internship environment, strengthening data handling, analytical thinking, and model-aware problem solving for practical business contexts.",
    highlights: ["Machine learning", "Data workflows", "Analytical problem solving"],
  },
  {
    icon: Bot,
    color: "#00e5ff",
    date: "Current Direction",
    title: "AI-Powered Product Operations",
    org: "Portfolio Focus",
    desc: "Building a career path around analytics, project tooling, and prompt engineering to improve how product and operations teams plan, report, and execute.",
    highlights: ["Prompt engineering", "Power BI", "Jira", "Confluence"],
  },
];

export function Experience() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="experience" ref={ref} className="py-28 px-6" style={{ background: "#080c26" }}>
      <div className="max-w-5xl mx-auto">
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
            03 / Experience
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
            Professional{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2979ff, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Experience
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { label: "Core Roles", value: "2", color: "#2979ff" },
            { label: "Tool Areas", value: "8", color: "#7c3aed" },
            { label: "Primary Focus", value: "DCEM", color: "#00e5ff" },
            { label: "Direction", value: "AI Ops", color: "#a78bfa" },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className="p-5 rounded-2xl border text-center"
              style={{
                background: "var(--glass)",
                borderColor: color + "30",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-display)", color }}>
                {value}
              </div>
              <div className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "#8892b0" }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{ background: "linear-gradient(to bottom, #2979ff, #7c3aed, #00e5ff, transparent)" }}
          />

          {timeline.map((item, i) => {
            const Icon = item.icon;
            const isRight = i % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className={`relative flex items-start gap-6 mb-10 ${isRight ? "md:flex-row" : "md:flex-row-reverse"} flex-row pl-16 md:pl-0`}
              >
                <div
                  className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-5 w-7 h-7 rounded-full flex items-center justify-center border-2"
                  style={{
                    background: "#080c26",
                    borderColor: item.color,
                    boxShadow: `0 0 12px ${item.color}50`,
                    zIndex: 1,
                  }}
                >
                  <Icon size={12} style={{ color: item.color }} />
                </div>

                <div className="hidden md:block flex-1" />

                <div
                  className="flex-1 md:max-w-[calc(50%-2.5rem)] p-5 rounded-2xl border"
                  style={{
                    background: "var(--glass)",
                    borderColor: item.color + "25",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span className="text-xs mb-2 block" style={{ fontFamily: "var(--font-mono)", color: item.color }}>
                    {item.date}
                  </span>
                  <h3 className="mb-1" style={{ fontFamily: "var(--font-display)", color: "#e8eaf6", fontWeight: 600, fontSize: "1rem" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs mb-2" style={{ fontFamily: "var(--font-body)", color: item.color, opacity: 0.8 }}>
                    {item.org}
                  </p>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#8892b0", fontFamily: "var(--font-body)" }}>
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2.5 py-1 rounded-lg"
                        style={{
                          fontFamily: "var(--font-mono)",
                          background: `${item.color}12`,
                          color: item.color,
                          border: `1px solid ${item.color}25`,
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
