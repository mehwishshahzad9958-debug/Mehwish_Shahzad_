"use client";

import React, { useMemo, useState } from "react";
import { motion } from "motion/react";

type FlowDirection = "down" | "up";

type SocialNode = {
  label: string;
  shortLabel: string;
  glow: string;
  id: string;
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

export default function Animate() {
  const [mode, setMode] = useState<"consuming" | "creating">("consuming");
  const [tick, setTick] = useState(0);
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const nodes: SocialNode[] = useMemo(
    () =>
      [
        { id: "asana", label: "Asana", shortLabel: "Asana", glow: "#ff6b9a" },
        { id: "bootstrap", label: "Bootstrap", shortLabel: "Bootstrap", glow: "#9d6cff" },
        { id: "claude", label: "Claude", shortLabel: "Claude", glow: "#ffb454" },
        { id: "clickup", label: "ClickUp", shortLabel: "ClickUp", glow: "#00e5ff" },
        { id: "codex", label: "Codex", shortLabel: "Codex", glow: "#4f9aff" },
        { id: "confluence", label: "Confluence", shortLabel: "Confluence", glow: "#5eead4" },
        { id: "expogo", label: "Expo Go", shortLabel: "Expo", glow: "#ff7a90" },
        { id: "figma", label: "Figma", shortLabel: "Figma", glow: "#ff8a3d" },
        { id: "gemini", label: "Gemini", shortLabel: "Gemini", glow: "#4ade80" },
        { id: "github", label: "GitHub", shortLabel: "GitHub", glow: "#d8e3f8" },
        { id: "lucid", label: "Lucidchart", shortLabel: "Lucid", glow: "#ffd166" },
        { id: "notion", label: "Notion", shortLabel: "Notion", glow: "#f8fafc" },
        { id: "powerbi", label: "Power BI", shortLabel: "Power BI", glow: "#f9d65c" },
        { id: "relay", label: "Relay", shortLabel: "Relay", glow: "#f0abfc" },
        { id: "tableau", label: "Tableau", shortLabel: "Tableau", glow: "#7dd3fc" },
        { id: "visio", label: "Visio", shortLabel: "Visio", glow: "#8da2ff" },
      ] as SocialNode[],
    []
  );

  const displayed = nodes;

  const direction: FlowDirection = mode === "consuming" ? "down" : "up";
  const flowColor = mode === "consuming" ? "#ff8a7a" : "#00e5ff";
  const pulseColor = mode === "consuming" ? "#ffd166" : "#5eead4";
  const accentColor = mode === "consuming" ? "#ff6b9a" : "#4f9aff";

  const onToggle = () => {
    setMode((m) => (m === "consuming" ? "creating" : "consuming"));
    setTick((t) => t + 1);
  };

  // Layout constants (vector-ish)
  const WIDTH = 960;
  const HEIGHT = 560;
  const centerX = WIDTH / 2;
  const personY = 292;
  const personFlowY = personY - 52;

  // Keep all tools readable by distributing them around the central figure.
  const logoPositions = useMemo(() => {
    const positions = [
      [172, 70],
      [377, 56],
      [583, 56],
      [788, 70],
      [104, 158],
      [104, 238],
      [104, 318],
      [104, 398],
      [856, 158],
      [856, 238],
      [856, 318],
      [856, 398],
      [172, 490],
      [377, 504],
      [583, 504],
      [788, 490],
    ];

    return displayed.map((n, i) => {
      const [x, y] = positions[i] ?? [centerX, 80];
      return { ...n, x, y };
    });
  }, [displayed]);

  const flowPaths = useMemo(() => {
    // Create four dashed lines from each logo to the person.
    return logoPositions.map((p) => {
      const dx = p.x - centerX;
      const dy = personFlowY - p.y;
      const c1x = p.x - dx * 0.18;
      const c1y = p.y + dy * 0.32;
      const c2x = centerX + dx * 0.12;
      const c2y = p.y + dy * 0.82;
      return {
        id: p.id,
        d: `M ${p.x} ${p.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${centerX} ${personFlowY}`,
      };
    });
  }, [logoPositions]);

  const particles = useMemo(() => {
    // Keep motion subtle so 16 tools stay professional and readable.
    const countPerPath = 2;
    const base = Array.from({ length: displayed.length * countPerPath }).map((_, idx) => {
      const pathIndex = Math.floor(idx / countPerPath);
      const iWithin = idx % countPerPath;
      return {
        id: `p-${idx}`,
        pathIndex,
        delay: iWithin * 0.55 + pathIndex * 0.08,
        // Spread positions along the curve
        startOffset: iWithin / (countPerPath + 1),
      };
    });
    return base;
  }, [displayed.length]);

  return (
    <div
      style={{
        width: "100%",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        width="min(1040px, 100%)"
        height="auto"
        role="img"
        aria-label="You social consuming/creating flow animation"
        style={{
          filter: "drop-shadow(0 0 10px rgba(255,255,255,0.06))",
        }}
      >
        <defs>
          <filter id="glowWhite" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glowNeon" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="labelGlow" x="-35%" y="-80%" width="170%" height="260%">
            <feGaussianBlur stdDeviation="1.15" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="badgeSurface" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(79,154,255,0.24)" />
            <stop offset="52%" stopColor="rgba(13,17,48,0.82)" />
            <stop offset="100%" stopColor="rgba(0,229,255,0.12)" />
          </linearGradient>

          <linearGradient id="centerScreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(79,154,255,0.34)" />
            <stop offset="50%" stopColor="rgba(10,15,46,0.96)" />
            <stop offset="100%" stopColor="rgba(157,108,255,0.3)" />
          </linearGradient>

          {/* Invisible paths for motion */}
          {flowPaths.map((fp) => (
            <path key={fp.id} id={`path-${fp.id}`} d={fp.d} fill="none" stroke="transparent" pathLength={1} />
          ))}
        </defs>

        {/* Background subtle grid */}
        <g opacity={0.18}>
          {Array.from({ length: 22 }).map((_, i) => {
            const x = 34 + i * 40;
            return <line key={`gx-${i}`} x1={x} y1={10} x2={x} y2={HEIGHT - 10} stroke="#223047" strokeWidth={1} />;
          })}
          {Array.from({ length: 14 }).map((_, i) => {
            const y = 24 + i * 38;
            return <line key={`gy-${i}`} x1={16} y1={y} x2={WIDTH - 16} y2={y} stroke="#223047" strokeWidth={1} />;
          })}
        </g>

        {/* Dashed connection lines */}
        <g>
          {flowPaths.map((fp) => (
            <motion.path
              key={fp.id}
              d={fp.d}
              fill="none"
              stroke={activeTool === fp.id ? pulseColor : flowColor}
              strokeOpacity={activeTool === fp.id ? 0.72 : 0.34}
              strokeWidth={1.25}
              strokeDasharray={activeTool === fp.id ? "9 7" : "5 10"}
              initial={{ strokeDashoffset: 0 }}
              animate={{
                strokeDashoffset: direction === "down" ? -40 : 40,
              }}
              transition={{ duration: activeTool === fp.id ? 0.85 : 1.25, repeat: Infinity, ease: "linear" }}
              filter="url(#glowWhite)"
            />
          ))}
        </g>

        {/* Neon Logos (simple stylized white-outline text badges) */}
        <g>
          {logoPositions.map((p) => {
            const isGreen = mode === "creating";
            const stroke = p.glow;
            const highlighted = activeTool === p.id;
            return (
              <g
                key={p.id}
                transform={`translate(${p.x}, ${p.y})`}
                tabIndex={0}
                role="button"
                aria-label={`${p.label} tool`}
                onMouseEnter={() => setActiveTool(p.id)}
                onMouseLeave={() => setActiveTool(null)}
                onFocus={() => setActiveTool(p.id)}
                onBlur={() => setActiveTool(null)}
                onClick={() => setActiveTool((current) => (current === p.id ? null : p.id))}
                style={{ cursor: "pointer", outline: "none" }}
              >
                {/* glow halo */}
                <motion.circle
                  r={highlighted ? 30 : 22}
                  cx={0}
                  cy={0}
                  fill={stroke}
                  opacity={highlighted ? 0.12 : 0.045}
                  filter="url(#glowNeon)"
                  animate={{ r: highlighted ? [24, 31, 24] : 22 }}
                  transition={{ duration: 1.2, repeat: highlighted ? Infinity : 0, ease: "easeInOut" }}
                />

                {/* badge */}
                <motion.rect
                  x={-72}
                  y={-21}
                  width={144}
                  height={42}
                  rx={7}
                  fill={highlighted ? "url(#badgeSurface)" : "rgba(8, 12, 32, 0.88)"}
                  stroke={stroke}
                  strokeWidth={highlighted ? 2.25 : 1.45}
                  opacity={highlighted ? 1 : 0.98}
                  animate={{ y: highlighted ? -22 : -19 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />

                {/* tiny dot bullet */}
                <motion.circle
                  cx={-58}
                  cy={0}
                  r={highlighted ? 5.5 : 4}
                  fill={stroke}
                  opacity={0.95}
                  filter="url(#glowNeon)"
                  animate={{ opacity: highlighted ? [0.75, 1, 0.75] : 0.95 }}
                  transition={{ duration: 0.9, repeat: highlighted ? Infinity : 0 }}
                />

                {/* controlled label glow */}
                <text
                  x={6}
                  y={1}
                  fontSize={p.label.length > 10 ? 12 : 13}
                  fontWeight={900}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
                  fill={stroke}
                  opacity={highlighted ? 0.34 : 0.18}
                  filter="url(#labelGlow)"
                  style={{ letterSpacing: 0 }}
                >
                  {p.label}
                </text>

                {/* sharp label */}
                <text
                  x={6}
                  y={1}
                  fontSize={p.label.length > 10 ? 12 : 13}
                  fontWeight={900}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
                  fill="#ffffff"
                  stroke="rgba(3, 6, 20, 0.95)"
                  strokeWidth={2.2}
                  paintOrder="stroke fill"
                  opacity={1}
                  style={{ letterSpacing: 0 }}
                >
                  {p.label}
                </text>

                {/* extra neon line */}
                <motion.line
                  x1={-60}
                  y1={13}
                  x2={60}
                  y2={13}
                  stroke={isGreen ? "#00e5ff" : "#ff8a7a"}
                  strokeWidth={highlighted ? 1.8 : 1.2}
                  opacity={highlighted ? 0.95 : 0.65}
                  animate={{ x1: highlighted ? -64 : -60, x2: highlighted ? 64 : 60 }}
                  transition={{ duration: 0.25 }}
                />
              </g>
            );
          })}
        </g>

        {/* Person: clearer figure at the center of the flow */}
        <g transform={`translate(${centerX}, ${personY})`}>
          <ellipse cx={0} cy={38} rx={76} ry={14} fill="rgba(255,255,255,0.07)" />
          <circle
            r={21}
            cx={0}
            cy={-58}
            fill="rgba(255,255,255,0.08)"
            stroke="#fff"
            strokeWidth={2.4}
            filter="url(#glowWhite)"
          />
          <path
            d="M -39 -8 C -34 -40, 34 -40, 39 -8 L 48 30 C 26 42, -26 42, -48 30 Z"
            fill="rgba(255,255,255,0.055)"
            stroke="#fff"
            strokeWidth={2.4}
            strokeLinejoin="round"
            filter="url(#glowWhite)"
          />
          <path
            d="M -26 -6 C -16 -18, -7 -18, 0 -8 C 7 -18, 16 -18, 26 -6"
            fill="none"
            stroke="#fff"
            strokeWidth={2.2}
            opacity={0.9}
          />
          <rect
            x={-58}
            y={8}
            width={116}
            height={48}
            rx={6}
            fill="url(#centerScreen)"
            stroke={accentColor}
            strokeWidth={2}
            filter="url(#glowNeon)"
          />
          <line x1={-44} y1={56} x2={44} y2={56} stroke="#fff" strokeWidth={2.2} opacity={0.75} />
          <motion.circle
            cx={0}
            cy={32}
            r={4}
            fill={pulseColor}
            filter="url(#glowNeon)"
            animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />

          <text
            x={0}
            y={82}
            textAnchor="middle"
            fontSize={16}
            fontWeight={800}
            fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
            fill="#fff"
            opacity={1}
            style={{ letterSpacing: 0 }}
          >
            You
          </text>
        </g>

        {/* Data pulses flowing along curves */}
        <g>
          {particles.map((pt) => {
            const p = logoPositions[pt.pathIndex];
            if (!p) return null;

            const start = clamp(pt.startOffset, 0, 1);
            const duration = 2.0 + (pt.pathIndex % 2) * 0.35 + (pt.id.length % 3) * 0.1;

            const reverse = direction === "up";
            const key = `${pt.id}-${tick}-${mode}`;
            const highlighted = activeTool === p.id;

            return (
              <g
                key={key}
                opacity={highlighted ? 1 : 0.82}
                filter="url(#glowNeon)"
              >
                <circle r={highlighted ? 6 : 4.5} fill={highlighted ? pulseColor : flowColor} />
                <path d="M -2.5 -5 L 5 0 L -2.5 5 Z" fill="#ffffff" opacity={0.9} />
                <animate
                  attributeName="opacity"
                  values="0;1;0.86;0"
                  keyTimes="0;0.18;0.82;1"
                  dur={`${highlighted ? duration * 0.72 : duration}s`}
                  begin={`${pt.delay + start * 0.45}s`}
                  repeatCount="indefinite"
                />
                <animateMotion
                  dur={`${highlighted ? duration * 0.72 : duration}s`}
                  begin={`${pt.delay + start * 0.45}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  keyPoints={reverse ? "1;0" : "0;1"}
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href={`#path-${p.id}`} />
                </animateMotion>
              </g>
            );
          })}
        </g>

        {/* Toggle area */}
        <foreignObject x={centerX - 104} y={386} width={208} height={58}>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <button
              onClick={onToggle}
              style={{
                width: "100%",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "linear-gradient(135deg, rgba(79,154,255,0.18), rgba(157,108,255,0.14))",
                color: "#fff",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                cursor: "pointer",
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              }}
            >
              <span
                style={{
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  fontSize: 13,
                  color: mode === "consuming" ? "#ffd166" : "#5eead4",
                  fontWeight: 800,
                  letterSpacing: 0,
                }}
              >
                {mode === "consuming" ? "Consuming" : "Creating"}
              </span>

              {/* switch knob */}
              <motion.span
                style={{
                  width: 36,
                  height: 22,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  position: "relative",
                  display: "inline-block",
                  flexShrink: 0,
                }}
                animate={{
                  backgroundColor: mode === "consuming" ? "rgba(239,68,68,0.10)" : "rgba(34,197,94,0.10)",
                }}
                transition={{ duration: 0.25 }}
              >
                <motion.span
                  style={{
                    position: "absolute",
                    top: 2,
                    left: 2,
                    width: 18,
                    height: 18,
                    borderRadius: "999px",
                    background: mode === "consuming" ? "#ffd166" : "#5eead4",
                    boxShadow:
                      mode === "consuming"
                        ? "0 0 14px rgba(255,209,102,0.58)"
                        : "0 0 14px rgba(94,234,212,0.58)",
                  }}
                  animate={{ x: mode === "consuming" ? 0 : 14 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                />
              </motion.span>
            </button>
          </div>
        </foreignObject>

        {/* Subtle instruction */}
        <text
          x={centerX}
          y={458}
          textAnchor="middle"
          fontSize={12}
          fontWeight={700}
          fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fill="#d4d4d8"
          opacity={0.82}
        >
          toggle to reverse flow
        </text>
      </svg>
    </div>
  );
}

