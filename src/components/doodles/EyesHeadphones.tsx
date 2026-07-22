"use client";

import { useEffect, useRef } from "react";

const EYES = [
  { cx: 80, cy: 72 },
  { cx: 128, cy: 66 },
];
const VIEW_W = 200;
const VIEW_H = 140;
const MAX_OFFSET = 6;

export default function EyesHeadphones({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pupilRefs = useRef<(SVGCircleElement | null)[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("pointermove", handleMove);

    let raf = 0;
    const tick = () => {
      const svg = svgRef.current;
      if (svg) {
        const rect = svg.getBoundingClientRect();
        EYES.forEach((eye, i) => {
          const pupil = pupilRefs.current[i];
          if (!pupil) return;
          const eyeScreenX = rect.left + (eye.cx / VIEW_W) * rect.width;
          const eyeScreenY = rect.top + (eye.cy / VIEW_H) * rect.height;
          const dx = mouse.current.x - eyeScreenX;
          const dy = mouse.current.y - eyeScreenY;
          const dist = Math.hypot(dx, dy) || 1;
          const x = eye.cx + (dx / dist) * MAX_OFFSET;
          const y = eye.cy + (dy / dist) * MAX_OFFSET;
          pupil.setAttribute("cx", String(x));
          pupil.setAttribute("cy", String(y));
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 60 C50 15 150 15 150 60"
        stroke="var(--color-bubblegum)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <rect
        x="24"
        y="52"
        width="34"
        height="46"
        rx="14"
        fill="var(--color-tangerine)"
        stroke="#0b1a0e"
        strokeWidth="6"
      />
      <rect
        x="142"
        y="52"
        width="34"
        height="46"
        rx="14"
        fill="var(--color-tangerine)"
        stroke="#0b1a0e"
        strokeWidth="6"
      />
      <g>
        <ellipse
          cx={EYES[0].cx}
          cy={EYES[0].cy}
          rx="20"
          ry="26"
          fill="#eef2e4"
          stroke="#0b1a0e"
          strokeWidth="6"
        />
        <circle
          ref={(el) => {
            pupilRefs.current[0] = el;
          }}
          cx={EYES[0].cx + 6}
          cy={EYES[0].cy + 4}
          r="8"
          fill="#0b1a0e"
        />
      </g>
      <g>
        <ellipse
          cx={EYES[1].cx}
          cy={EYES[1].cy}
          rx="20"
          ry="26"
          fill="#eef2e4"
          stroke="#0b1a0e"
          strokeWidth="6"
        />
        <circle
          ref={(el) => {
            pupilRefs.current[1] = el;
          }}
          cx={EYES[1].cx + 6}
          cy={EYES[1].cy + 4}
          r="8"
          fill="#0b1a0e"
        />
      </g>
    </svg>
  );
}
