import Link from "next/link";
import type { ReactNode } from "react";

export default function HobbyLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="hobby-link">
      {children}
    </Link>
  );
}
