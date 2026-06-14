import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "DC Energy Meter Dashboard",
    desc: "An end-to-end IoT solution for real-time DC power monitoring with live telemetry, threshold alerts, and historical analytics. Led the full project lifecycle as Project Manager.",
    image: "https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=800&h=450&fit=crop&auto=format",
    tags: ["IoT", "Python", "React", "Project Management", "Agile"],
    color: "#2979ff",
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "UML Dashboard System",
    desc: "An interactive web platform for generating, viewing, and exporting UML diagrams — Use Case, Class, Sequence, and Activity — with collaborative editing capabilities.",
    image: "https://images.unsplash.com/photo-1666148670142-2f01b117e6e0?w=800&h=450&fit=crop&auto=format",
    tags: ["React", "TypeScript", "UML", "Collaboration"],
    color: "#7c3aed",
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Interactive Portfolio Website",
    desc: "This very portfolio — built with React, Motion, and a custom design system. Dark-theme, glassmorphism, scroll-driven animations, and fully responsive across all viewports.",
    image: "https://images.unsplash.com/photo-1604177420682-0c840feb01de?w=800&h=450&fit=crop&auto=format",
    tags: ["React", "TypeScript", "Motion", "Tailwind CSS"],
    color: "#00e5ff",
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "AI Project Management Assistant",
    desc: "An LLM-powered assistant that helps PMs draft project plans, identify risks, generate sprint reports, and auto-summarise stakeholder meeting notes.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=450&fit=crop&auto=format",
    tags: ["Python", "LLM", "FastAPI", "AI", "Project Management"],
    color: "#a78bfa",
    demo: "#",
    github: "#",
    featured: false,
  },
];

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-2xl border overflow-hidden cursor-default transition-all duration-400"
      style={{
        background: "var(--glass)",
        borderColor: hovered ? project.color + "50" : "var(--glass-border)",
        backdropFilter: "blur(16px)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px ${project.color}20` : "none",
        transition: "all 0.35s ease",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52 bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 30%, ${project.color}40 100%)`,
          }}
        />
        {project.featured && (
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: project.color, color: "#fff", fontFamily: "var(--font-mono)" }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", fontWeight: 700, fontSize: "1.1rem" }}
        >
          {project.title}
        </h3>
        <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg"
              style={{
                fontFamily: "var(--font-mono)",
                background: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={project.demo}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:opacity-90"
            style={{
              background: project.color,
              color: "#fff",
              fontFamily: "var(--font-body)",
            }}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.github}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm border transition-all hover:border-opacity-80"
            style={{
              borderColor: project.color + "40",
              color: project.color,
              fontFamily: "var(--font-body)",
              background: `${project.color}08`,
            }}
          >
            <Github size={13} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="projects" ref={ref} className="py-28 px-6" style={{ background: "var(--navy)" }}>
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
            03 / Projects
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
            Featured{" "}
            <span style={{ background: "linear-gradient(135deg, #2979ff, #00e5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Work
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
            Projects that blend engineering precision with product thinking — from IoT hardware to AI-powered tooling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 text-sm border px-6 py-3 rounded-xl transition-all hover:border-primary hover:text-primary"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--muted-foreground)",
              borderColor: "var(--glass-border)",
            }}
          >
            View all projects on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
