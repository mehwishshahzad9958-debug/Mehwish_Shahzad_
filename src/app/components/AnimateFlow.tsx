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

  const nodes: SocialNode[] = useMemo(
    () =>
      [
        { id: "asana", label: "Asana", shortLabel: "Asana", glow: "#fb7185" },
        { id: "bootstrap", label: "Bootstrap", shortLabel: "Bootstrap", glow: "#a78bfa" },
        { id: "claude", label: "Claude", shortLabel: "Claude", glow: "#f59e0b" },
        { id: "clickup", label: "ClickUp", shortLabel: "ClickUp", glow: "#38bdf8" },
        { id: "codex", label: "Codex", shortLabel: "Codex", glow: "#60a5fa" },
        { id: "confluence", label: "Confluence", shortLabel: "Confluence", glow: "#22d3ee" },
        { id: "expogo", label: "Expo Go", shortLabel: "Expo", glow: "#f87171" },
        { id: "figma", label: "Figma", shortLabel: "Figma", glow: "#f97316" },
        { id: "gemini", label: "Gemini", shortLabel: "Gemini", glow: "#22c55e" },
        { id: "github", label: "GitHub", shortLabel: "GitHub", glow: "#cbd5e1" },
        { id: "lucid", label: "Lucidchart", shortLabel: "Lucid", glow: "#fbbf24" },
        { id: "notion", label: "Notion", shortLabel: "Notion", glow: "#e5e7eb" },
        { id: "powerbi", label: "Power BI", shortLabel: "Power BI", glow: "#facc15" },
        { id: "relay", label: "Relay", shortLabel: "Relay", glow: "#fda4af" },
        { id: "tableau", label: "Tableau", shortLabel: "Tableau", glow: "#7dd3fc" },
        { id: "visio", label: "Visio", shortLabel: "Visio", glow: "#818cf8" },
      ] as SocialNode[],
    []
  );

  const displayed = nodes;

  const direction: FlowDirection = mode === "consuming" ? "down" : "up";

  const onToggle = () => {
    setMode((m) => (m === "consuming" ? "creating" : "consuming"));
    setTick((t) => t + 1);
  };

  // Layout constants (vector-ish)
  const WIDTH = 900;
  const HEIGHT = 560;
  const centerX = WIDTH / 2;
  const personY = 292;
  const personFlowY = personY - 52;

  // Keep all tools readable by distributing them around the central figure.
  const logoPositions = useMemo(() => {
    const positions = [
      [165, 70],
      [355, 56],
      [545, 56],
      [735, 70],
      [96, 158],
      [96, 238],
      [96, 318],
      [96, 398],
      [804, 158],
      [804, 238],
      [804, 318],
      [804, 398],
      [165, 490],
      [355, 504],
      [545, 504],
      [735, 490],
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
        width="min(980px, 100%)"
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

          <linearGradient id="dollarGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>

          <linearGradient id="dollarGradCons" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
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
              stroke={mode === "consuming" ? "#fca5a5" : "#86efac"}
              strokeOpacity={0.28}
              strokeWidth={1.25}
              strokeDasharray="5 10"
              initial={{ strokeDashoffset: 0 }}
              animate={{
                strokeDashoffset: direction === "down" ? -40 : 40,
              }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              filter="url(#glowWhite)"
            />
          ))}
        </g>

        {/* Neon Logos (simple stylized white-outline text badges) */}
        <g>
          {logoPositions.map((p) => {
            const isGreen = mode === "creating";
            const stroke = p.glow;
            return (
              <g key={p.id} transform={`translate(${p.x}, ${p.y})`}>
                {/* glow halo */}
                <circle r={22} cx={0} cy={0} fill={stroke} opacity={0.07} filter="url(#glowNeon)" />

                {/* badge */}
                <rect
                  x={-60}
                  y={-19}
                  width={120}
                  height={38}
                  rx={7}
                  fill="rgba(13, 17, 48, 0.68)"
                  stroke={stroke}
                  strokeWidth={1.45}
                  opacity={0.98}
                />

                {/* tiny dot bullet */}
                <circle cx={-47} cy={0} r={4} fill={stroke} opacity={0.95} filter="url(#glowNeon)" />

                {/* label */}
                <text
                  x={5}
                  y={5}
                  fontSize={p.label.length > 10 ? 11 : 12}
                  fontWeight={800}
                  textAnchor="middle"
                  fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
                  fill="#fff"
                  opacity={1}
                  style={{ letterSpacing: 0 }}
                >
                  {p.label}
                </text>

                {/* extra neon line */}
                <line x1={-50} y1={13} x2={50} y2={13} stroke={isGreen ? "#22c55e" : "#ef4444"} strokeWidth={1.2} opacity={0.65} />
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
            fill="rgba(10,10,18,0.92)"
            stroke={mode === "consuming" ? "#ef4444" : "#22c55e"}
            strokeWidth={2}
            filter="url(#glowNeon)"
          />
          <line x1={-44} y1={56} x2={44} y2={56} stroke="#fff" strokeWidth={2.2} opacity={0.75} />
          <circle cx={0} cy={32} r={4} fill={mode === "consuming" ? "#ef4444" : "#22c55e"} filter="url(#glowNeon)" />

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

        {/* Dollar particles flowing along curves */}
        <g>
          {particles.map((pt) => {
            const p = logoPositions[pt.pathIndex];
            if (!p) return null;

            const isConsuming = mode === "consuming";

            const start = clamp(pt.startOffset, 0, 1);
            const duration = 2.0 + (pt.pathIndex % 2) * 0.35 + (pt.id.length % 3) * 0.1;

            const reverse = direction === "up";
            const key = `${pt.id}-${tick}-${mode}`;

            return (
              <text
                key={key}
                fontSize={20}
                fontWeight={900}
                fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
                fill={isConsuming ? "#ef4444" : "#22c55e"}
                opacity={0.95}
                filter="url(#glowNeon)"
                style={{
                  textShadow: `0 0 12px ${isConsuming ? "rgba(239,68,68,0.55)" : "rgba(34,197,94,0.55)"}`,
                  letterSpacing: 0,
                }}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                $
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.18;0.82;1"
                  dur={`${duration}s`}
                  begin={`${pt.delay + start * 0.45}s`}
                  repeatCount="indefinite"
                />
                <animateMotion
                  dur={`${duration}s`}
                  begin={`${pt.delay + start * 0.45}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  keyPoints={reverse ? "1;0" : "0;1"}
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href={`#path-${p.id}`} />
                </animateMotion>
              </text>
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
                background: "rgba(255,255,255,0.04)",
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
                  color: mode === "consuming" ? "#ef4444" : "#22c55e",
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
                    background: mode === "consuming" ? "#ef4444" : "#22c55e",
                    boxShadow:
                      mode === "consuming"
                        ? "0 0 14px rgba(239,68,68,0.55)"
                        : "0 0 14px rgba(34,197,94,0.55)",
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

