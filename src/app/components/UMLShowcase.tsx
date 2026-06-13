import { motion, AnimatePresence } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const diagrams = [
  {
    id: "usecase",
    label: "Use Case Diagram",
    subtitle: "DCEM System — Actor Interactions",
    color: "#2979ff",
    svg: (
      <svg viewBox="0 0 400 280" className="w-full h-full" style={{ fontFamily: "var(--font-mono)" }}>
        {/* System boundary */}
        <rect x="80" y="20" width="260" height="240" rx="8" fill="none" stroke="#2979ff" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.5" />
        <text x="210" y="14" textAnchor="middle" fill="#2979ff" fontSize="10" opacity="0.7">DC Energy Meter System</text>

        {/* Actors */}
        {/* Admin */}
        <ellipse cx="30" cy="80" rx="14" ry="10" fill="none" stroke="#4f9aff" strokeWidth="1.5" />
        <line x1="30" y1="90" x2="30" y2="120" stroke="#4f9aff" strokeWidth="1.5" />
        <line x1="30" y1="100" x2="15" y2="115" stroke="#4f9aff" strokeWidth="1.5" />
        <line x1="30" y1="100" x2="45" y2="115" stroke="#4f9aff" strokeWidth="1.5" />
        <line x1="30" y1="120" x2="18" y2="138" stroke="#4f9aff" strokeWidth="1.5" />
        <line x1="30" y1="120" x2="42" y2="138" stroke="#4f9aff" strokeWidth="1.5" />
        <text x="30" y="150" textAnchor="middle" fill="#8892b0" fontSize="9">Admin</text>

        {/* Engineer */}
        <ellipse cx="30" cy="200" rx="14" ry="10" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
        <line x1="30" y1="210" x2="30" y2="240" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="30" y="255" textAnchor="middle" fill="#8892b0" fontSize="9">Engineer</text>

        {/* Use cases */}
        {[
          { cx: 210, cy: 60, label: "Monitor Power", w: 90 },
          { cx: 210, cy: 115, label: "Set Thresholds", w: 90 },
          { cx: 210, cy: 170, label: "View Reports", w: 80 },
          { cx: 210, cy: 225, label: "Export Data", w: 80 },
        ].map(({ cx, cy, label, w }) => (
          <g key={label}>
            <ellipse cx={cx} cy={cy} rx={w / 2} ry="18" fill="rgba(41,121,255,0.08)" stroke="#2979ff" strokeWidth="1" opacity="0.8" />
            <text x={cx} y={cy + 4} textAnchor="middle" fill="#ccd6f6" fontSize="9">{label}</text>
          </g>
        ))}

        {/* Connections */}
        {[60, 115, 170].map((y) => (
          <line key={y} x1="44" y1={y < 140 ? 90 : 210} x2="165" y2={y} stroke="#4f9aff" strokeWidth="1" opacity="0.4" />
        ))}
        <line x1="44" y1="210" x2="170" y2="170" stroke="#7c3aed" strokeWidth="1" opacity="0.4" />
        <line x1="44" y1="210" x2="170" y2="225" stroke="#7c3aed" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "class",
    label: "Class Diagram",
    subtitle: "DCEM Core Classes",
    color: "#7c3aed",
    svg: (
      <svg viewBox="0 0 400 280" className="w-full h-full" style={{ fontFamily: "var(--font-mono)" }}>
        {/* EnergyMeter class */}
        <rect x="20" y="30" width="160" height="110" rx="6" fill="rgba(41,121,255,0.08)" stroke="#2979ff" strokeWidth="1.5" />
        <rect x="20" y="30" width="160" height="24" rx="6" fill="rgba(41,121,255,0.15)" />
        <text x="100" y="47" textAnchor="middle" fill="#4f9aff" fontSize="10" fontWeight="bold">EnergyMeter</text>
        <line x1="20" y1="54" x2="180" y2="54" stroke="#2979ff" strokeWidth="1" opacity="0.4" />
        <text x="28" y="70" fill="#8892b0" fontSize="8">- meterId: String</text>
        <text x="28" y="83" fill="#8892b0" fontSize="8">- voltage: Float</text>
        <text x="28" y="96" fill="#8892b0" fontSize="8">- current: Float</text>
        <line x1="20" y1="103" x2="180" y2="103" stroke="#2979ff" strokeWidth="1" opacity="0.4" />
        <text x="28" y="117" fill="#ccd6f6" fontSize="8">+ readVoltage(): Float</text>
        <text x="28" y="130" fill="#ccd6f6" fontSize="8">+ readCurrent(): Float</text>

        {/* Dashboard class */}
        <rect x="220" y="30" width="160" height="110" rx="6" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" strokeWidth="1.5" />
        <rect x="220" y="30" width="160" height="24" rx="6" fill="rgba(124,58,237,0.15)" />
        <text x="300" y="47" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">Dashboard</text>
        <line x1="220" y1="54" x2="380" y2="54" stroke="#7c3aed" strokeWidth="1" opacity="0.4" />
        <text x="228" y="70" fill="#8892b0" fontSize="8">- userId: String</text>
        <text x="228" y="83" fill="#8892b0" fontSize="8">- refreshRate: Int</text>
        <line x1="220" y1="90" x2="380" y2="90" stroke="#7c3aed" strokeWidth="1" opacity="0.4" />
        <text x="228" y="105" fill="#ccd6f6" fontSize="8">+ displayData(): void</text>
        <text x="228" y="118" fill="#ccd6f6" fontSize="8">+ exportReport(): File</text>
        <text x="228" y="131" fill="#ccd6f6" fontSize="8">+ setThreshold(): void</text>

        {/* Alert class */}
        <rect x="120" y="185" width="160" height="75" rx="6" fill="rgba(0,229,255,0.08)" stroke="#00e5ff" strokeWidth="1.5" />
        <rect x="120" y="185" width="160" height="24" rx="6" fill="rgba(0,229,255,0.12)" />
        <text x="200" y="202" textAnchor="middle" fill="#00e5ff" fontSize="10" fontWeight="bold">AlertSystem</text>
        <line x1="120" y1="209" x2="280" y2="209" stroke="#00e5ff" strokeWidth="1" opacity="0.4" />
        <text x="128" y="225" fill="#8892b0" fontSize="8">- threshold: Float</text>
        <text x="128" y="238" fill="#ccd6f6" fontSize="8">+ triggerAlert(): void</text>
        <text x="128" y="251" fill="#ccd6f6" fontSize="8">+ notify(user): void</text>

        {/* Relationships */}
        <line x1="180" y1="85" x2="220" y2="85" stroke="#4f9aff" strokeWidth="1.5" strokeDasharray="4,2" opacity="0.6" />
        <text x="198" y="80" textAnchor="middle" fill="#8892b0" fontSize="7">uses</text>
        <line x1="100" y1="140" x2="180" y2="185" stroke="#00e5ff" strokeWidth="1.5" opacity="0.5" />
        <line x1="300" y1="140" x2="240" y2="185" stroke="#00e5ff" strokeWidth="1.5" opacity="0.5" />
        <polygon points="180,185 172,175 190,175" fill="#00e5ff" opacity="0.5" />
        <polygon points="240,185 230,175 248,175" fill="#00e5ff" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "sequence",
    label: "Sequence Diagram",
    subtitle: "Data Collection Flow",
    color: "#00e5ff",
    svg: (
      <svg viewBox="0 0 400 280" className="w-full h-full" style={{ fontFamily: "var(--font-mono)" }}>
        {/* Lifeline headers */}
        {[
          { x: 60, label: "User", color: "#2979ff" },
          { x: 160, label: "Dashboard", color: "#7c3aed" },
          { x: 270, label: "Meter", color: "#00e5ff" },
          { x: 360, label: "Database", color: "#a78bfa" },
        ].map(({ x, label, color }) => (
          <g key={label}>
            <rect x={x - 35} y="10" width="70" height="22" rx="4" fill={`${color}20`} stroke={color} strokeWidth="1" />
            <text x={x} y="25" textAnchor="middle" fill={color} fontSize="9" fontWeight="bold">{label}</text>
            <line x1={x} y1="32" x2={x} y2="265" stroke={color} strokeWidth="1" strokeDasharray="4,3" opacity="0.3" />
          </g>
        ))}

        {/* Messages */}
        {[
          { from: 60, to: 160, y: 60, label: "requestData()", color: "#2979ff" },
          { from: 160, to: 270, y: 90, label: "fetchReading()", color: "#7c3aed" },
          { from: 270, to: 160, y: 120, label: "voltage, current", color: "#00e5ff", dashed: true },
          { from: 160, to: 360, y: 150, label: "storeReading(data)", color: "#7c3aed" },
          { from: 360, to: 160, y: 178, label: "ack()", color: "#a78bfa", dashed: true },
          { from: 160, to: 60, y: 210, label: "renderDashboard()", color: "#2979ff", dashed: true },
        ].map(({ from, to, y, label, color, dashed }, i) => {
          const dir = to > from ? 1 : -1;
          return (
            <g key={i}>
              <line
                x1={from}
                y1={y}
                x2={to - dir * 6}
                y2={y}
                stroke={color}
                strokeWidth="1.5"
                strokeDasharray={dashed ? "4,2" : "none"}
                opacity="0.7"
              />
              <polygon
                points={`${to - dir * 6},${y - 4} ${to},${y} ${to - dir * 6},${y + 4}`}
                fill={color}
                opacity="0.7"
              />
              <text
                x={(from + to) / 2}
                y={y - 5}
                textAnchor="middle"
                fill="#8892b0"
                fontSize="7.5"
              >
                {label}
              </text>
            </g>
          );
        })}

        {/* Activation boxes */}
        <rect x="155" y="52" width="10" height="165" rx="2" fill="rgba(124,58,237,0.25)" stroke="#7c3aed" strokeWidth="1" />
        <rect x="265" y="82" width="10" height="45" rx="2" fill="rgba(0,229,255,0.2)" stroke="#00e5ff" strokeWidth="1" />
      </svg>
    ),
  },
];

export function UMLShowcase() {
  const { ref, inView } = useInView(0.1);
  const [active, setActive] = useState<string | null>(null);

  const activeDiagram = diagrams.find((d) => d.id === active);

  return (
    <section
      id="uml"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "var(--navy)" }}
    >
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
            04 / UML Showcase
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#e8eaf6",
            }}
          >
            System Design{" "}
            <span style={{ background: "linear-gradient(135deg, #7c3aed, #00e5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Blueprints
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm" style={{ color: "#8892b0", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
            UML diagrams from the DC Energy Meter (DCEM) project — click to zoom and explore each diagram in detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {diagrams.map((diagram, i) => (
            <motion.div
              key={diagram.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => setActive(diagram.id)}
              className="group relative p-4 rounded-2xl border cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "var(--glass)",
                borderColor: "var(--glass-border)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-sm font-semibold mb-0.5" style={{ fontFamily: "var(--font-display)", color: diagram.color }}>
                    {diagram.label}
                  </h3>
                  <p className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "#8892b0" }}>
                    {diagram.subtitle}
                  </p>
                </div>
                <ZoomIn size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="h-44 rounded-xl overflow-hidden" style={{ background: "rgba(5,7,26,0.5)" }}>
                {diagram.svg}
              </div>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: `${diagram.color}08` }}
              >
                <span className="px-3 py-1.5 rounded-xl text-xs font-medium" style={{ background: diagram.color, color: "#fff", fontFamily: "var(--font-body)" }}>
                  Click to zoom
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeDiagram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(5, 7, 26, 0.92)", backdropFilter: "blur(20px)" }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl rounded-2xl border p-6"
              style={{
                background: "#0d1130",
                borderColor: activeDiagram.color + "40",
                boxShadow: `0 0 80px ${activeDiagram.color}25`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 p-2 rounded-lg border hover:border-destructive transition-colors"
                style={{ borderColor: "var(--glass-border)" }}
              >
                <X size={16} className="text-muted-foreground" />
              </button>
              <h3
                className="mb-1 text-lg"
                style={{ fontFamily: "var(--font-display)", color: activeDiagram.color, fontWeight: 700 }}
              >
                {activeDiagram.label}
              </h3>
              <p className="text-xs mb-5" style={{ fontFamily: "var(--font-mono)", color: "#8892b0" }}>
                {activeDiagram.subtitle}
              </p>
              <div className="rounded-xl overflow-hidden" style={{ background: "rgba(5,7,26,0.6)", padding: "1rem" }}>
                <div style={{ height: 320 }}>{activeDiagram.svg}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
