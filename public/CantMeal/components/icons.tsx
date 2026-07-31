import type { ReactNode, SVGProps } from "react";

function Icon({
  children,
  className = "h-5 w-5",
  ...props
}: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </Icon>
  );
}

export function IconX(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </Icon>
  );
}

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12,7 12,12 16,14" />
    </Icon>
  );
}

export function IconUsers(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
    </Icon>
  );
}

export function IconLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M5 19c8 0 13-5 13-13 0 0-9-1-13 5-2.5 3-2.5 5.5 0 8Z" />
      <path d="M5 19c2-4 5-7 9-9" />
    </Icon>
  );
}

export function IconCheckCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8,12.5 11,15.5 16,9" />
    </Icon>
  );
}

export function IconSmartphone(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <line x1="11" y1="18.5" x2="13" y2="18.5" />
    </Icon>
  );
}

export function IconChefHat(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M7 11c-1.9 0-3.4-1.6-3.2-3.5.2-1.7 1.7-3 3.4-3 .3 0 .6 0 .8.1C8.6 3 10.2 2 12 2s3.4 1 3.9 2.6c.3-.1.6-.1.9-.1 1.9 0 3.4 1.5 3.4 3.4 0 1.9-1.5 3.4-3.4 3.4H7Z" />
      <line x1="7" y1="11" x2="7.6" y2="19" />
      <line x1="17" y1="11" x2="16.4" y2="19" />
      <line x1="7.3" y1="16" x2="16.7" y2="16" />
    </Icon>
  );
}

export function IconTrendingUp(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <polyline points="3,17 9,11 13,15 21,7" />
      <polyline points="15,7 21,7 21,13" />
    </Icon>
  );
}

export function IconArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14,6 20,12 14,18" />
    </Icon>
  );
}

export function IconGraduationCap(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
    </Icon>
  );
}

export function IconBarChart(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <line x1="4" y1="20" x2="20" y2="20" />
      <rect x="6" y="13" width="3" height="7" />
      <rect x="11" y="9" width="3" height="11" />
      <rect x="16" y="5" width="3" height="15" />
    </Icon>
  );
}

export function IconMapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </Icon>
  );
}
