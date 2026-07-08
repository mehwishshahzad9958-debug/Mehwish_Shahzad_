import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import {
  ClipboardList,
  BarChart3,
  Bot,
  Target,
} from "lucide-react";
interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

const strengths = [
  {
    icon: ClipboardList,
    title: "Project Management & Agile Delivery",
    description:
      "Jira, Confluence, Agile & Scrum Delivery, RACI, Risk & Issue Management",
    color: "#2979ff",
  },
  {
    icon: BarChart3,
    title: "  Data-Driven & AI-Powered Reporting",
    description:
      "SQL, Power BI, Advanced Excel, Executive Reporting, Claude, ChatGPT, Codex, n8n.",
    color: "#7c3aed",
  }
];

const timeline: TimelineItem[] = [];

export function About() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="uppercase tracking-[0.3em] text-xs"
            style={{
              color: "#2979ff",
              fontFamily: "var(--font-mono)",
            }}
          >
            01 / About
          </span>

          <h2
            className="mt-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(2.2rem,5vw,3.5rem)",
              color: "var(--foreground)",
            }}
          >
           Turning Operational Complexity{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,#2979ff,#7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
               into Disciplined Delivery
            </span>
          </h2>

          <p
            className="mt-6 max-w-3xl mx-auto leading-8"
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-body)",
            }}
          >
          
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Timeline */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="mb-8 flex items-center gap-3"
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-display)",
              }}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs"
                style={{
                  background: "rgba(41,121,255,.12)",
                  border: "1px solid rgba(41,121,255,.25)",
                  color: "#2979ff",
                  fontFamily: "var(--font-mono)",
                }}
              >
                OPS
              </span>

              Professional Journey
            </h3>

            <div className="relative pl-8">

              <div
                className="absolute left-1 top-0 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom,#2979ff,#7c3aed,transparent)",
                }}
              />

              {timeline.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: index * 0.15 + 0.2,
                  duration: 0.5,
                }}
                className="relative mb-10"
              >
                <div
                  className="absolute -left-[2rem] top-2 w-3 h-3 rounded-full"
                  style={{ background: "#2979ff" }}
                />

                {/* 1. Company Name First */}
                <h4
                  className="text-white font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {item.company}
                </h4>

              {/* 2. Role Second */}
                <p
                  className="mt-1 font-semibold text-gray-200" // Use a soft white/light grey
                  style={{ 
                    color: "#3478d6", // A soft slate-200 for better readability against dark navy
                    letterSpacing: "0.01em" 
                  }}
                >
                  {item.role}
                </p>

                {/* 3. Date Range Third */}
                <span
                  className="text-xs uppercase tracking-widest mt-1 block"
                  style={{
                    color: "#e9eef7",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {item.period}
                </span>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{
                    color: "var(--muted-foreground)",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
            </div>
          </motion.div>

          {/* Strength Cards */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="mb-8 flex items-center gap-3"
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-display)",
              }}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs"
                style={{
                  background: "rgba(124,58,237,.12)",
                  border: "1px solid rgba(124,58,237,.25)",
                  color: "#7c3aed",
                  fontFamily: "var(--font-mono)",
                }}
              >
                STR
              </span>

              Core Strengths
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">

              {strengths.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: index * 0.12 + 0.3,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="rounded-2xl p-6 border"
                    style={{
                      background: "var(--glass)",
                      borderColor: "var(--glass-border)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `${item.color}20`,
                        border: `1px solid ${item.color}40`,
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: item.color }}
                      />
                    </div>

                    <h4
                      style={{
                        color: "var(--foreground)",
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="mt-3 text-sm leading-7"
                      style={{
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}