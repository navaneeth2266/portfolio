export type Hobby = {
  href: string;
  label: string;
  lines: string[];
  intro: string;
  /** Add photos here, e.g. { src: "/hobbies/camping/lake.jpg", alt: "Lakeside camp" } */
  gallery: { src: string; alt: string }[];
};

export const hobbies = {
  camping: {
    href: "/camping",
    label: "Camping trips",
    lines: ["CAMPING", "TRIPS"],
    intro:
      "Nothing resets my head like a good camping trip. I love planning the route, packing the gear, and waking up somewhere new.",
    gallery: [],
  },
  crafts: {
    href: "/crafts",
    label: "Crafting things",
    lines: ["CRAFT", "THINGS"],
    intro:
      "I love making things with my hands. If it can be cut, folded, glued or painted, I'm probably going to try it.",
    gallery: [],
  },
  drawing: {
    href: "/drawing",
    label: "Drawing designs",
    lines: ["DRAW", "DESIGNS"],
    intro:
      "Away from the screen, I draw and paint designs just for the joy of it. Sketchbooks, colours and a lot of doodles.",
    gallery: [],
  },
} satisfies Record<string, Hobby>;

export type HobbySlug = keyof typeof hobbies;
