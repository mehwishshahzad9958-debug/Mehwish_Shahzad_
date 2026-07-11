import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import Tools from "./AnimateFlow";

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
          <h2 className="mt-4 text-4xl md:text-6xl font-bold" style={{ color: "var(--foreground)" }}>
            Turning Operational Complexity{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              into Disciplined Delivery
            </span>
          </h2>
        </motion.div>

        {/* Interactive Skill Showcase */}
        <div>
          <Tools />
        </div>
      </div>
    </section>
  );
}