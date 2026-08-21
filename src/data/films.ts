export interface Film {
  slug: string;
  title: string;
  year: number;
  director: string;
  description: string;
  trailerId: string;
  poster: string;
  stills: string[];
  cast: string[];
  runtime: string;
  genre: string;
}

export const films: Film[] = [
  {
    slug: "the-quiet-hours",
    title: "The Quiet Hours",
    year: 2026,
    director: "Benedict Dorsey",
    description:
      "A woman returns home to her family's coastal homestead and learns what it means to stay amidst lingering quiet.",
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/the-quiet-hours.jpg",
    stills: [
      "/images/stills/the-quiet-hours-1.jpg",
      "/images/stills/the-quiet-hours-2.jpg",
    ],
    cast: ["Clara Vance", "Julian Mercer", "Hanna Lind"],
    runtime: "108 min",
    genre: "Drama",
  },
  {
    slug: "long-road-home",
    title: "Long Road Home",
    year: 2025,
    director: "Benedict Dorsey",
    description:
      "An intimate portrait of a traveling craftsman navigating grief and grace across the changing Southern landscape.",
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/long-road-home.jpg",
    stills: [
      "/images/stills/long-road-home-1.jpg",
      "/images/stills/long-road-home-2.jpg",
    ],
    cast: ["Arthur Pendelton", "Evelyn Reed", "Thomas Wright"],
    runtime: "115 min",
    genre: "Drama",
  },
  {
    slug: "doorway",
    title: "Doorway",
    year: 2024,
    director: "Benedict Dorsey",
    description:
      "A solitary caretaker guards a historic landmark, reflecting on memory, passage, and unspoken reconciliation.",
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/doorway.jpg",
    stills: [
      "/images/stills/doorway-1.jpg",
      "/images/stills/doorway-2.jpg",
    ],
    cast: ["Marcus Thorne", "Eleanor Vance"],
    runtime: "94 min",
    genre: "Drama",
  },
  {
    slug: "salt-and-light",
    title: "Salt & Light",
    year: 2023,
    director: "Benedict Dorsey",
    description:
      "Two estranged siblings reunite at an old lighthouse to sort through their late father's forgotten archives.",
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/salt-and-light.jpg",
    stills: [
      "/images/stills/salt-and-light-1.jpg",
      "/images/stills/salt-and-light-2.jpg",
    ],
    cast: ["Gabriel Finch", "Sophia Hayes", "Robert Sterling"],
    runtime: "102 min",
    genre: "Drama",
  },
  {
    slug: "silent-grace",
    title: "Silent Grace",
    year: 2022,
    director: "Benedict Dorsey",
    description:
      "A serene examination of faith and endurance in a small agrarian community during a harsh winter.",
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/silent-grace.jpg",
    stills: [
      "/images/stills/silent-grace-1.jpg",
      "/images/stills/silent-grace-2.jpg",
    ],
    cast: ["Miriam Cole", "David O'Connor", "Sarah Jennings"],
    runtime: "98 min",
    genre: "Drama",
  },
];
