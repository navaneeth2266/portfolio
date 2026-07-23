import Reveal from "./Reveal";

export default function SectionHeading({
  lines,
  align = "left",
  className = "",
}: {
  lines: string[];
  align?: "left" | "right";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <h2
        className={`heading-stack text-[clamp(2.75rem,9vw,7rem)] ${
          align === "right" ? "text-right" : "text-left"
        }`}
      >
        {lines.map((line) => (
          <div key={line} className="block">
            <span className="hollow-purple-text">
              {line}
            </span>
          </div>
        ))}
      </h2>
    </Reveal>
  );
}
