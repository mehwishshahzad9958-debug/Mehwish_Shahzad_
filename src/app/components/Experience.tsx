import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { BarChart3, BookOpen, Bot, Briefcase, HandHelpingIcon, Target } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    color: "#2979ff",
    org: "Indus Towers",
    title: "Project Lead",
    date: "Dec 2024 - Feb 2026",
    desc: "Led engineers and coordinated stakeholders across Pan-India operations, monitoring KPIs to keep delivery on track driving a 5% data-accuracy gain within 2 months through improved reporting and process automation.",
    highlights: ["Stakeholder reporting", "RCA", "Process coordination", "Business requirements","Technical models","SNMP","Grafana"],
  },
  {
    icon: BarChart3,
    color: "#7c3aed",
    date: "2024-Internship",
    title: "Machine Learning Intern",
    org: "Atharvo India Pvt. Ltd.",
    desc: "Python, Pandas, NumPy, scikit-learn, and Matplotlib to analyze and visualize data, building predictive models to forecast trends and optimize decision-making processes.",
    highlights: ["Machine learning", "Data workflows", "Analytical problem solving"],
  },
  {
    icon: Target,
    color: "#00e5ff",
    date: "1 Year- 2021",
    title: "Junior Project Manager",
    org: "CCE-PMT",
    desc: "Drove admission conversion from 40% to 80%, generating ₹20 lakh in monthly revenue through data-driven enrollment strategy and performance tracking.",
    highlights: ["Enrollment Strategy", " Performance Optimization", "Employ Trainning","Management Skills"],
  },
    {
    icon: BookOpen,
    color: "#059669",
    date: "2 Months- 2020",
    title: "Volunteer Project Manager",
    org: "Miles2Smile Foundation",
    desc: "We built a flexible education framework that treats every student’s learning path as unique. By organizing students by their current proficiency rather than their grade level, We've enabled them to tackle complex subjects at their own pace and take pride in helping their peers succeed.",
    highlights: ["Strategic Planning", "Problem Solving", "Innovation","Process Design"],
  },
];

export function Experience() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="experience" ref={ref} className="py-28 px-6" style={{ background: "var(--background)" }}>
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
              color: "var(--foreground)",
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
                    background: "var(--background)",
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
                  <h3 className="mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", fontWeight: 600, fontSize: "1rem" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs mb-2" style={{ fontFamily: "var(--font-body)", color: item.color, opacity: 0.8 }}>
                    {item.org}
                  </p>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
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
