import React from "react";
import { ClipboardList, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

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

export function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {strengths.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl p-6 border backdrop-blur-md"
            style={{ 
              background: "var(--glass)", 
              borderColor: "var(--glass-border)" 
            }}
          >
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
              style={{ background: `${item.color}20` }}
            >
              <Icon size={24} style={{ color: item.color }} />
            </div>
            <h4 className="font-bold text-lg" style={{ color: "var(--foreground)" }}>{item.title}</h4>
            <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>{item.description}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-3 py-1 rounded-full border font-mono tracking-widest"
                  style={{
                    borderColor: item.color,
                    color: item.color,
                    background: `${item.color}10`,
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
  );
}