import { motion, Variants } from "framer-motion";

const masteredSkills = [
  "Agile & Scrum Delivery",
  "Sprint Planning & Backlog Management",
  "Stakeholder Management",
  "Requirements Gathering",
  "RAID Log / Risk & Issue Management",
  "SLA & TAT Management",
  "Process Improvement & SOP Design",
  "Cross-functional Team Coordination",
  "Data-Driven Reporting (Excel/Power BI)",
  "JIRA / Confluence"
];

const learningSkills = [
  "Business Analysis (Gap Analysis)",
  "SQL for Reporting",
  "PMI-ACP / Scrum Master",
  "Change Management",
  "Root Cause Analysis (RCA)"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.08 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring" as const, stiffness: 100 } 
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
          style={{ 
            fontFamily: "var(--font-display)",
            background: "linear-gradient(135deg, #2979ff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent" 
          }}
        >
          Skills & Competencies
        </motion.h2>

        {/* Mastered Section */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="mb-20"
        >
          <h3 className="text-sm uppercase tracking-[0.2em] mb-10 text-center text-primary font-mono">Mastered</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {masteredSkills.map((skill) => (
              <motion.div 
                key={skill} 
                variants={itemVariants} 
                className="group relative p-4 rounded-2xl border border-border bg-card hover:bg-card/80 transition-colors text-center shadow-lg hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="relative text-sm font-medium text-foreground">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <h3 className="text-sm uppercase tracking-[0.2em] mb-10 text-center text-muted-foreground font-mono">In Progress</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {learningSkills.map((skill) => (
              <motion.div 
                key={skill} 
                variants={itemVariants} 
                className="p-4 rounded-2xl border border-dashed border-border hover:border-blue-500/50 bg-transparent hover:bg-blue-500/5 transition-all text-center"
              >
                <p className="text-sm text-muted-foreground italic">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}