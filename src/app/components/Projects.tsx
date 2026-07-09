import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { ExternalLink, Github } from "lucide-react";
import { useState, useRef } from "react";
const projects = [
  {
    id: 1,
    title: "Agile Project Portfolio Dashboard | Power BI",
    desc: "Developed an executive-level Agile Project Portfolio Dashboard in Power BI to provide real-time visibility into project performance, portfolio health, budget utilization, and delivery progress.",
   video: "/videos/PowerBI.mp4", // MUST be in /public/videos/PowerBI.mp4
    image: "/images/powerbi-thumb.png",
    tags: ["IoT", "Python", "React", "Project Management", "Agile"],
    color: "#2979ff",
    demo: "#",
    github: "#",
    featured: true,
  },
];

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
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
      <div className="relative overflow-hidden h-52 bg-muted">
        <video
          ref={videoRef}
          src={project.video}
          poster={project.image}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
          muted
          loop
          playsInline
        />
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
          <a href={project.demo} className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90" style={{ background: project.color }}>
            <ExternalLink size={13} /> Live Demo
          </a>
          <a href={project.github} className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm border transition-all hover:bg-white/5" style={{ borderColor: "var(--glass-border)", color: "var(--foreground)" }}>
            <Github size={13} /> GitHub
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