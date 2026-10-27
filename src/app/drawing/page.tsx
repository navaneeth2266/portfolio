import type { Metadata } from "next";
import HobbyPage from "@/components/HobbyPage";
import { hobbies } from "@/lib/hobbies";

const hobby = hobbies.drawing;

export const metadata: Metadata = {
  title: `${hobby.label} — Navaneeth KRISHNAN P K`,
  description: hobby.intro,
};

export default function DrawingPage() {
  return <HobbyPage hobby={hobby} />;
}
