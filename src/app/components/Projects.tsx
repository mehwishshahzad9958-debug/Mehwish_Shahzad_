import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { ExternalLink } from "lucide-react";
import { useState, useRef } from "react";

// Project data structure
const projects = [
  {
    id: 1,
    title: "Agile Project Portfolio Dashboard | Power BI",
    desc: "Developed an automated Power BI dashboard for Agile portfolio, reducing manual reporting and enabling stakeholders to identify at-risk projects 20% faster.",
    video: "/videos/PowerBI.mp4", 
    tags: ["Advanced Data Modeling", "Analytical DAX", "BI Strategy", "Stakeholder Reporting"],
    color: "#2979ff",
    featured: true,
    demo: "https://github.com/mehwishshahzad9958-debug/PowerBI-Agile-Project-",
  },
   {
    id: 1,
    title: "Energy Compliance Monitoring & Automated Ticketing",
    image: "/Table.png",
    desc: " Replacing manual processes to improve resolution speed and traceability.",
    tags: ["Process Automation","Data Validation & RCA","KPI Dashboarding",
"Cross-functional Coordination", "BI Strategy", "Stakeholder Reporting"],
    color: "#2979ff",
    featured: true,
    demo: "https://drive.google.com/file/d/1fb-Kqv9NTwlbfkDb0JGhbWQyTk0aeWrV/view?usp=sharing",
  },
     {
    id: 1,
    title: "Energy Compliance Monitoring & Automated Ticketing",
    image: "/PW.png",
    desc: " Diagnosed a 40% engagement gap in PW's mentorship features and proposed owner-mapped, outcome-driven fixes to close it.",
    tags: ["Business Analysis", "Product Strategy", "User Engagement", "EdTech"],
    color: "#2979ff",
    featured: true,
    demo: "https://drive.google.com/file/d/18ad37YOHkX5DktHqDn5uz6wpWXrzef--/view?usp=sharing",
  },
];

interface Project {
  id: number;
  title: string;
  desc: string;
  video?: string;
  image?: string;
  tags: string[];
  color: string;
  featured: boolean;
  demo: string;
}

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group rounded-2xl border overflow-hidden cursor-default transition-all duration-400 h-full flex flex-col"
      style={{ background: "var(--glass)", borderColor: hovered ? `${project.color}50` : "var(--glass-border)" }}
    >
      {/* Video Display Area */}
      <div className="relative overflow-hidden h-52 bg-black">

  {project.video ? (
    <video
      ref={videoRef}
      src={project.video}
      className="w-full h-full object-cover transition-transform duration-500"
      style={{
        transform: hovered ? "scale(1.08)" : "scale(1)",
      }}
      muted
      loop
      playsInline
      preload="metadata"
    />
  ) : (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500"
      style={{
        transform: hovered ? "scale(1.08)" : "scale(1)",
      }}
    />
  )}

  {project.featured && (
    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-white border border-white/20">
      Featured
    </div>
  )}
</div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="mb-2 font-bold text-lg" style={{ color: "var(--foreground)" }}>{project.title}</h3>
        <p className="text-sm mb-4 flex-grow" style={{ color: "var(--muted-foreground)" }}>{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-lg border" style={{ borderColor: `${project.color}30`, color: project.color, background: `${project.color}05` }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90" 
            style={{ background: project.color }}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="projects" ref={ref} className="py-28 px-6 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>Featured Work</h2>
        </div>

        <div className={`grid gap-6 ${projects.length === 1 ? "max-w-xl mx-auto" : "md:grid-cols-2"}`}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}