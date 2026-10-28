export type Hobby = {
  href: string;
  label: string;
  lines: string[];
  intro: string;
  /** Add photos here, e.g. { src: "/hobbies/camping/lake.jpg", alt: "Lakeside camp", width: 1280, height: 720 } */
  gallery: { src: string; alt: string; width: number; height: number }[];
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
    gallery: [
      {
        src: "/hobbies/crafts/krishna-drawing.jpg",
        alt: "Pen drawing of Krishna with a flute on green paper",
        width: 721,
        height: 1280,
      },
      {
        src: "/hobbies/crafts/spiderman-wall-art.jpg",
        alt: "Painted Spider-Man mask with three lightning bolts on a wall",
        width: 721,
        height: 1280,
      },
      {
        src: "/hobbies/crafts/paper-bats.jpg",
        alt: "Black paper bats stuck in a wall corner",
        width: 721,
        height: 1280,
      },
    ],
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
