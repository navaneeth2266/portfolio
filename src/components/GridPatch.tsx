const maskByCorner = {
  "top-right": "mask-fade-tr",
  "top-left": "mask-fade-tl",
  "bottom-right": "mask-fade-br",
  "bottom-left": "mask-fade-bl",
} as const;

export default function GridPatch({
  corner = "top-right",
  className = "",
}: {
  corner?: keyof typeof maskByCorner;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute bg-grid ${maskByCorner[corner]} ${className}`}
    />
  );
}
