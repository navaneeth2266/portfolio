export default function GloveFlower({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46 60 C46 30 76 14 100 14 C124 14 150 32 150 66 L150 160 C150 190 124 206 98 206 C72 206 46 190 46 160 Z"
        fill="var(--color-lime)"
        stroke="#0b1a0e"
        strokeWidth="7"
      />
      <ellipse cx="76" cy="58" rx="13" ry="17" fill="#eef2e4" stroke="#0b1a0e" strokeWidth="6" />
      <circle cx="80" cy="62" r="5" fill="#0b1a0e" />
      <ellipse cx="112" cy="52" rx="13" ry="17" fill="#eef2e4" stroke="#0b1a0e" strokeWidth="6" />
      <circle cx="116" cy="56" r="5" fill="#0b1a0e" />
      <g transform="translate(98 148)">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-22"
            rx="9"
            ry="20"
            fill="var(--color-tangerine)"
            stroke="#0b1a0e"
            strokeWidth="4"
            transform={`rotate(${i * 45})`}
          />
        ))}
        <circle r="12" fill="var(--color-bubblegum)" stroke="#0b1a0e" strokeWidth="4" />
      </g>
    </svg>
  );
}
