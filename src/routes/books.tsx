import { createFileRoute } from "@tanstack/react-router";
import { BooksPage } from "@/pages/BooksPage";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books & Plays — Benediction Studios" },
      {
        name: "description",
        content: "Stories beyond the screen. Books and stage plays by Benediction Studios.",
      },
      { property: "og:title", content: "Books & Plays — Benediction Studios" },
      {
        property: "og:description",
        content: "Stories beyond the screen. Books and stage plays by Benediction Studios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BooksPage,
});
