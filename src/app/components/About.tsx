import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { ClipboardList, BarChart3 } from "lucide-react";
import { SkillNodeMap } from "./SkillNodeMap";
import AnimateFlow from "./AnimateFlow";
const strengths = [
  {
    icon: ClipboardList,
    title: "Project Management & Agile Delivery",
    description: "Jira, Confluence, Agile & Scrum Delivery, RACI, Risk & Issue Management",
    color: "#2979ff",
    tags: ["Stakeholder Management", "Agile", "Scrum"],
  },
  {
    icon: BarChart3,
    title: "Data-Driven & AI-Powered Reporting",
    description: "SQL, Power BI, Advanced Excel, Executive Reporting, Claude, ChatGPT, Codex, n8n.",
    color: "#7c3aed",
    tags: ["Data Analytics", "AI Automation", "SQL"],
  },
];

export function About() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="about" ref={ref} className="py-28 px-6" style={{ background: "var(--navy)" }}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[0.3em] text-xs" style={{ color: "#2979ff" }}>01 / About</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
            Turning Operational Complexity{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              into Disciplined Delivery
            </span>
          </h2>
        </motion.div>

        {/* Core Strengths Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                  style={{ background: `${item.color}20` }}
                >
                  <Icon size={24} style={{ color: item.color }} />
                </div>
                <h4 className="text-white font-bold text-lg">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-400">{item.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-3 py-1 rounded-full border font-mono tracking-widest"
                      style={{
                        borderColor: item.color,
                        color: item.color,
                        background: `${item.color}10`,
                        boxShadow: `0 0 8px ${item.color}33`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Skill Showcase */}
        <div className="mb-20">
          <AnimateFlow />
        </div>
      </div>
    </section>
  );
}