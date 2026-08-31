// src/data/films.ts

// IMPORT POSTERS
import fourCorners from "../assets/4 CORNERS.png";
import football from "../assets/Football.png";
import advice from "../assets/The Advice.png";
import route83 from "../assets/The Girl On Route.png";
import humanWeb from "../assets/The Human Web.png";
import yarborough from "../assets/The Yarborough Way.png";
import agbarra from "../assets/Agbarra.png";

// TYPE
export interface Film {
  slug: string;
  title: string;
  year: number;
  director: string;
  description: string | null;
  trailerId: string | null;
  poster: string;
  stills: string[];
  cast: string[];
  runtime: string;
  genre: string;
}

// DATA
export const films: Film[] = [
  {
    slug: "the-human-web",
    title: "The Human Web",
    year: 2011,
    director: "Benedict A. Dorsey",
    description:
      "Once headed for Yale, C.J. Tate emerges from prison after paying the price for a crime he didn't commit. Struggling to rebuild his life, he is pulled into a dangerous web of drugs, betrayal and revenge.",
    trailerId: "mCJ4O1RXnFc",
    poster: humanWeb,
    stills: [humanWeb],
    cast: ["Lloyd Watts", "Robert Franks", "Christie Pridgen", "Ivanan Vaughn", "Xiavian Brown"],
    runtime: "108 min",
    genre: "Drama",
  },
  {
    slug: "4-corners",
    title: "4 Corners",
    year: 2012,
    director: "Benedict A. Dorsey",
    description:
      "A mother fights to protect her son from a generational curse threatening his life.",
    trailerId: "eBeJgYi3VZQ",
    poster: fourCorners,
    stills: [fourCorners],
    cast: ["Pattrezzes Myles"],
    runtime: "115 min",
    genre: "Drama",
  },
  {
    slug: "football",
    title: "Football",
    year: 2016,
    director: "Benedict A. Dorsey",
    description:
      "A young man balances dreams of football with responsibility for his family.",
    trailerId: null,
    poster: football,
    stills: [football],
    cast: ["Demetrius Marshall-Stephens"],
    runtime: "94 min",
    genre: "Drama",
  },
  {
    slug: "the-advice",
    title: "The Advice",
    year: 2018,
    director: "Benedict A. Dorsey",
    description:
      "A lie spirals into blackmail and moral collapse after a man hides a dangerous truth.",
    trailerId: null,
    poster: advice,
    stills: [advice],
    cast: ["Paul Cottman"],
    runtime: "102 min",
    genre: "Drama",
  },
  {
    slug: "the-girl-on-route-83",
    title: "The Girl On Route",
    year: 2023,
    director: "Benedict A. Dorsey",
    description: null,
    trailerId: "d4ua4NBMo2A",
    poster: route83,
    stills: [route83],
    cast: ["Ayomide Adeloye"],
    runtime: "98 min",
    genre: "Drama",
  },
  {
    slug: "the-yarboroughs-way",
    title: "The Yarborough's Way",
    year: 2020,
    director: "Benedict A. Dorsey",
    description:
      "A family power struggle unfolds after the death of a religious leader.",
    trailerId: null,
    poster: yarborough,
    stills: [yarborough],
    cast: ["John Henry Carter"],
    runtime: "98 min",
    genre: "Drama",
  },
  {
    slug: "agbarra",
    title: "AGBARRA",
    year: 2026,
    director: "Benedict A. Dorsey",
    description: null,
    trailerId: null,
    poster: agbarra,
    stills: [agbarra],
    cast: ["AJ"],
    runtime: "98 min",
    genre: "Drama",
  },

];