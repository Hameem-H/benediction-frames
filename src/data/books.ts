import book1 from "../assets/living-under-an-open-heaven.jpg";
import book2 from "../assets/taking-but-saying-good-stuff.jpg";
import book3 from "../assets/ripples-of-holiness.jpg";

export interface Book {
  title: string;
  image: string;
  description: string;
}

export interface Play {
  title: string;
  youtubeId: string;
}

export const books: Book[] = [
  {
    title: "Living Under an Open Heaven",
    image: book1,
    description: "",
  },
  {
    title: "Taking But Saying Good Stuff",
    image: book2,
    description: "",
  },
  {
    title: "Ripples of Holiness",
    image: book3,
    description: "",
  },
];

// export const plays: Play[] = [
//   {
//     title: "B.A.D. Talking Good Stuff ",
//     youtubeId: "S0kMPbyOigw",
//   }

// ];
