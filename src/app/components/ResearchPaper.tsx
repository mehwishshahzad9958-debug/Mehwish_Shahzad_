import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { FileText, FolderOpen } from "lucide-react";

const paperCategories = [
  {
    title: "Technical Research Papers & Case Studies",
    desc: "Comprehensive analysis of technical operations and infrastructure optimization.",
    type: "Folder",
    icon: FolderOpen,
    link: "https://drive.google.com/drive/folders/1cMyvGKa3uHV75FO5w6jN_4DpAPU14Ud4?usp=sharing", // Link to your folder with 2 PDFs
    color: "#ff9800"
  },
  {
    title: "AI in Neuro-Marketing Research Paper",
    desc: "In-depth research on AI integration in neuro-marketing strategies and consumer behavior analysis.",
    type: "PDF",
    icon: FileText,
    link: "https://drive.google.com/file/d/1oyFuPoGThyzmp4wfvGkQedEcjw_6vaAM/view?usp=sharing", // Link to single PDF
    color: "#4caf50"
  }
];

export default function ResearchPaper() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="research" ref={ref} className="py-28 px-6 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Research & Documentation</h2>
          <p className="text-[var(--muted-foreground)]">Technical deep-dives and operational case studies.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {paperCategories.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group p-8 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass)] hover:border-opacity-50 transition-all duration-300 flex flex-col items-center text-center"
              style={{ borderColor: `${item.color}40` }}
            >
              <div className="p-4 rounded-full mb-6 bg-opacity-10" style={{ background: `${item.color}20` }}>
                <item.icon size={32} style={{ color: item.color }} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{item.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-6">{item.desc}</p>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--glass-border)]">
                {item.type}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}