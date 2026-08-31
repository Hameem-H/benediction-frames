export interface Film {
  slug: string;
  title: string;
  year: number;
  director: string;
  description: string | null;
  trailerId: string;
  poster: string;
  stills: string[];
  cast: string[];
  runtime: string;
  genre: string;
}

export const films: Film[] = [
  {
    slug: "the-human-web",
    title: "The Human Web",
    year: 2011,
    director: "Benedict A.Dorsey",
    description:
      "Once headed for Yale, C.J. Tate emerges from prison after paying the price for a crime he didn't commit. Struggling to rebuild his life, he is pulled into a dangerous web of drugs, betrayal and revenge—where every choice carries a consequence.",
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/the-quiet-hours.jpg",
    stills: [
      "/images/stills/the-quiet-hours-1.jpg",
      "/images/stills/the-quiet-hours-2.jpg",
    ],
    cast: ["Lloyd Watts", "Robert Franks", "Christie Pridgen", "Ivanan Vaughn", "Xiavian Brown"],

    runtime: "108 min",
    genre: "Drama",
  },
  {
    slug: "4-corners",
    title: "4 Corners",
    year: 2012,
    director: "Benedict A.Dorsey",
    description:
      "The haunting drama follows a mother trying to protect her 22-year-old son from a 150-year-old family curse that claims the lives of all male heirs before they turn 23. The plot centers on a conflict between turning to voodoo to reverse the curse or trusting in God.",
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/long-road-home.jpg",
    stills: [
      "/images/stills/long-road-home-1.jpg",
      "/images/stills/long-road-home-2.jpg",
    ],
    cast: ["Pattrezzes Myles", "Christie M. Pridgen", "Sandra L. Jenkins", "Natalie Pullman", "Micah Canon", "Kemo Coleman", "Penny Demps", "Brett Diggs", "Chris Haley"],

    runtime: "115 min",
    genre: "Drama",
  },
  {
    slug: "football",
    title: "Football",
    year: 2016,
    director: "Benedict A.Dorsey",
    description:
      "For Ricky, football could be his ticket out of a life of struggle. But with a younger brother depending on him, chasing his dream means carrying responsibilities far beyond the football field. FOOTBALL is a story of brotherhood, sacrifice, survival—and what it means to become someone’s village when there is no one else.",
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/doorway.jpg",
    stills: [
      "/images/stills/doorway-1.jpg",
      "/images/stills/doorway-2.jpg",
    ],
    cast: ["Demetrius Marshall-Stephens", "Asjah Ford", "Sonia Boyle", "Jamal Fisher", "Corey Vent"],
    runtime: "94 min",
    genre: "Drama",
  },
  {
    slug: "the-advice",
    title: "The Advice",
    year: 2018,
    director: "Benedict A.Dorsey",
    description:
      "After returning from a business trip with an STD, a married attorney fears he may have infected his wife. Too afraid to confess, he turns to his friends, who devise a scheme to secretly treat her without revealing the truth. But their plan unravels when the woman from his trip appears at his law firm demanding money—turning one bad decision into a dangerous web of lies, blackmail, and consequences. Sometimes the advice you take can get you into more trouble than the mistake you made in the first place.",
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/salt-and-light.jpg",
    stills: [
      "/images/stills/salt-and-light-1.jpg",
      "/images/stills/salt-and-light-2.jpg",
    ],
    cast: ["Paul Cottman", "Christie M. Pridgen", "Crystal Swann", "Madison Sowell", "Renee Ambush Rucker", "Robert J. Franks", "Jossan Robinson", "Dallas N. White", "Tatiana Ford", "Geoff Haverstock", "Nina Perez"],
    runtime: "102 min",
    genre: "Drama",
  },
  {
    slug: "the-yarboroughs-way",
    title: "The Yarborough's Way",
    year: 2020,
    director: "Benedict A.Dorsey",
    description:
      "After the death of the leader of a powerful worldwide religious organization, a bitter battle erupts within the Yarborough family over who will inherit the position. As Michael fights to secure the leadership for his son and his sister Judy fights to stop him, buried secrets, old betrayals, and family crimes begin coming to light. When power and legacy are at stake, nothing is off limits—even death. Because that’s The Yarborough’s Way.",
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/silent-grace.jpg",
    stills: [
      "/images/stills/silent-grace-1.jpg",
      "/images/stills/silent-grace-2.jpg",
    ],
  cast: ["John Henry Carter", "Reginald Baskerville", "Bolas Vodopia", "Latisha Harrison", "Quincy Vicks", "Christie M. Pridgen", "Kevin Anderson", "Rodney L. Wilson"],


    runtime: "98 min",
    genre: "Drama",
  },
  {
    slug: "the-girll-on-route-83",
    title: "The Girll on Route 83",
    year: 2023,
    director: "Benedict A.Dorsey",
    description:null,
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/silent-grace.jpg",
    stills: [
      "/images/stills/silent-grace-1.jpg",
      "/images/stills/silent-grace-2.jpg",
    ],
  cast: ["Ayomide Adeloye", "Christie M. Pridgen", "Reginald Baskerville", "Crystal Sayles Horshaw", "Gloria Bass", "Evan Carrington"],


    runtime: "98 min",
    genre: "Drama",
  },
  {
    slug: "agbarra",
    title: "AGBARRA",
    year: 2026,
    director: "Benedict A.Dorsey",
    description:null,
    trailerId: "jHUTrZBtbkM",
    poster: "/images/posters/silent-grace.jpg",
    stills: [
      "/images/stills/silent-grace-1.jpg",
      "/images/stills/silent-grace-2.jpg",
    ],
  cast: ["AJ", "Evan T. Carrington", "Matthew J. Murray", "Kevin Seymore", "Tanya Smith", "Olawall Kusimo", "Christie M. Pridgen", "Stanley Kidd"],



    runtime: "98 min",
    genre: "Drama",
  },
];
