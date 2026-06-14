import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { BarChart3, Bot, ClipboardList, Target } from "lucide-react";

const focusItems = [
  {
    icon: ClipboardList,
    title: "Project Coordination",
    desc: "Keeping work visible through structured follow-ups, issue tracking, status updates, and clear ownership.",
    color: "#2979ff",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    desc: "Using Power BI, Advanced Excel, and SQL to turn operational data into practical decisions.",
    color: "#7c3aed",
  },
  {
    icon: Bot,
    title: "AI-Powered Ops",
    desc: "Applying prompt engineering to improve documentation, reporting, and repeatable product operations workflows.",
    color: "#00e5ff",
  },
  {
    icon: Target,
    title: "Execution Focus",
    desc: "Bringing together stakeholders, tools, and timelines so delivery stays measurable and grounded.",
    color: "#a78bfa",
  },
];

const profilePoints = [
  {
    year: "Dec 2024 - Present",
    title: "DCEM Operations Lead",
    org: "Indus Towers",
    detail: "Coordinating DC Energy Meter operations with reporting, issue tracking, and stakeholder visibility.",
  },
  {
    year: "Internship",
    title: "Machine Learning Intern",
    org: "Atharvo India Pvt. Ltd.",
    detail: "Strengthened data handling, machine-learning awareness, and analytical problem solving in a delivery environment.",
  },
  {
    year: "Current Focus",
    title: "AI-Powered Product Operations",
    org: "Portfolio Direction",
    detail: "Combining analytics, project tooling, and prompt engineering to improve operational execution.",
  },
];

export function About() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="about" ref={ref} className="py-28 px-6" style={{ background: "var(--navy)" }}>
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
            01 / About
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--foreground)",
            }}
          >
            Turning Data Into{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2979ff, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Operational Clarity
            </span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
            I'm Mehwish Shahzad, a Technical Project Coordinator and Data Analyst focused on
            AI-powered product operations. My work connects DCEM operations, stakeholder
            coordination, analytics, and practical automation so teams can make clearer,
            faster decisions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3
              className="mb-8 flex items-center gap-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", fontWeight: 600, fontSize: "1.25rem" }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs"
                style={{ background: "rgba(41, 121, 255, 0.15)", border: "1px solid rgba(41, 121, 255, 0.3)", color: "#2979ff", fontFamily: "var(--font-mono)" }}
              >
                OPS
              </span>
              Professional Focus
            </h3>
            <div className="relative pl-6">
              <div
                className="absolute left-0 top-2 bottom-2 w-px"
                style={{ background: "linear-gradient(to bottom, #2979ff, #7c3aed, transparent)" }}
              />
              {profilePoints.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div
                    className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full border-2"
                    style={{ background: "#2979ff", borderColor: "#05071a" }}
                  />
                  <span className="text-xs mb-1 block" style={{ fontFamily: "var(--font-mono)", color: "#2979ff" }}>
                    {item.year}
                  </span>
                  <h4 className="mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", fontWeight: 600, fontSize: "1rem" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm mb-0.5" style={{ color: "#4f9aff", fontFamily: "var(--font-body)" }}>
                    {item.org}
                  </p>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3
              className="mb-8 flex items-center gap-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", fontWeight: 600, fontSize: "1.25rem" }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs"
                style={{ background: "rgba(124, 58, 237, 0.15)", border: "1px solid rgba(124, 58, 237, 0.3)", color: "#7c3aed", fontFamily: "var(--font-mono)" }}
              >
                STR
              </span>
              Working Strengths
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusItems.map(({ icon: Icon, title, desc, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="p-5 rounded-2xl border group hover:scale-[1.02] transition-transform duration-300 cursor-default"
                  style={{
                    background: "var(--glass)",
                    borderColor: "var(--glass-border)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}1a`, border: `1px solid ${color}33` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <h4 className="mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", fontWeight: 600, fontSize: "0.95rem" }}>
                    {title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 p-5 rounded-2xl border"
              style={{ background: "rgba(41, 121, 255, 0.05)", borderColor: "rgba(41, 121, 255, 0.2)" }}
            >
              <p className="text-xs mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "#2979ff" }}>
                Career Objective
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
                To build high-trust product and operations workflows where analytics, project
                coordination, and AI-assisted execution help teams deliver measurable outcomes
                with less friction.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
