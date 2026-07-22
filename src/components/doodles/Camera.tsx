export default function Camera({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="18"
        y="46"
        width="164"
        height="104"
        rx="18"
        fill="var(--color-bubblegum)"
        stroke="#0b1a0e"
        strokeWidth="6"
      />
      <path
        d="M60 46 L78 20 H132 L150 46"
        fill="var(--color-bubblegum)"
        stroke="#0b1a0e"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <circle
        cx="100"
        cy="98"
        r="40"
        fill="var(--color-lime)"
        stroke="#0b1a0e"
        strokeWidth="6"
      />
      <circle
        cx="100"
        cy="98"
        r="22"
        fill="#eef2e4"
        stroke="#0b1a0e"
        strokeWidth="6"
      />
      <circle cx="100" cy="98" r="8" fill="var(--color-ink-900)" />
      <rect
        x="34"
        y="60"
        width="20"
        height="14"
        rx="4"
        fill="var(--color-lime)"
        stroke="#0b1a0e"
        strokeWidth="5"
      />
      <circle cx="158" cy="66" r="7" fill="#eef2e4" stroke="#0b1a0e" strokeWidth="5" />
    </svg>
  );
}
