import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
<<<<<<< HEAD
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";
=======
import { Github, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import powerBiVideo from "../../assets/videos/PowerBI.mp4";
>>>>>>> main

const projects = [
  {
    id: 1,
<<<<<<< HEAD
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
=======
    title: "Agile Project Portfolio Dashboard",
    desc: "An executive-level Power BI dashboard for monitoring Agile project portfolios — tracking budget utilization, completion rates, and project health with dynamic DAX-driven KPIs across the organization.",
    video: powerBiVideo,
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling", "Business Intelligence"],
    color: "#2979ff",
    github: "https://github.com/mehwishshahzad9958-debug/PowerBI-Agile-Project-Dashboard.git",
    featured: true,
  },
>>>>>>> main
];

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
<<<<<<< HEAD
=======
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleLeave = () => {
    setHovered(false);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };
>>>>>>> main

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
<<<<<<< HEAD
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
=======
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
>>>>>>> main
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
<<<<<<< HEAD
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
=======
      {/* Video preview - 16:9 widescreen */}
      <div className="relative overflow-hidden aspect-video bg-muted">
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
>>>>>>> main
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
<<<<<<< HEAD
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="mb-2"
          style={{ fontFamily: "var(--font-display)", color: "#e8eaf6", fontWeight: 700, fontSize: "1.1rem" }}
        >
          {project.title}
        </h3>
        <p className="text-sm mb-4 leading-relaxed" style={{ color: "#8892b0", fontFamily: "var(--font-body)" }}>
=======
        {!hovered && (
          <div
            className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-xs pointer-events-none"
            style={{ background: "rgba(0,0,0,0.55)", color: "#fff", fontFamily: "var(--font-mono)" }}
          >
            Hover to play
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <h3
          className="mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", fontWeight: 700, fontSize: "1.4rem" }}
        >
          {project.title}
        </h3>
        <p className="text-sm mb-5 leading-relaxed" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
>>>>>>> main
          {project.desc}
        </p>

        {/* Tags */}
<<<<<<< HEAD
        <div className="flex flex-wrap gap-2 mb-5">
=======
        <div className="flex flex-wrap gap-2 mb-6">
>>>>>>> main
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
<<<<<<< HEAD
            href={project.demo}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:opacity-90"
=======
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-90 w-full sm:w-auto"
>>>>>>> main
            style={{
              background: project.color,
              color: "#fff",
              fontFamily: "var(--font-body)",
            }}
          >
<<<<<<< HEAD
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
=======
            <Github size={14} />
            <span>View on GitHub</span>
>>>>>>> main
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { ref, inView } = useInView(0.1);

  return (
<<<<<<< HEAD
    <section id="projects" ref={ref} className="py-28 px-6" style={{ background: "#080c26" }}>
=======
    <section id="projects" ref={ref} className="py-28 px-6" style={{ background: "var(--navy)" }}>
>>>>>>> main
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
<<<<<<< HEAD
              color: "#e8eaf6",
            }}
          >
            Featured{" "}
            <span style={{ background: "linear-gradient(135deg, #2979ff, #00e5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Work
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm" style={{ color: "#8892b0", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
            Projects that blend engineering precision with product thinking — from IoT hardware to AI-powered tooling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
=======
              color: "var(--foreground)",
            }}
          >
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2979ff, #00e5ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto text-sm"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}
          >
            Projects that blend engineering precision with product thinking — from business intelligence
            dashboards to data-driven tooling.
          </p>
        </motion.div>

        {/* Single wide card, no grid needed */}
        <div className="max-w-4xl mx-auto">
>>>>>>> main
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
<<<<<<< HEAD
            href="https://github.com"
            className="inline-flex items-center gap-2 text-sm border px-6 py-3 rounded-xl transition-all hover:border-primary hover:text-primary"
            style={{
              fontFamily: "var(--font-body)",
              color: "#8892b0",
=======
            href="https://github.com/mehwishshahzad9958-debug"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border px-6 py-3 rounded-xl transition-all hover:border-primary hover:text-primary"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--muted-foreground)",
>>>>>>> main
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
<<<<<<< HEAD
}
=======
}
>>>>>>> main
