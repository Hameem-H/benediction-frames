import { createFileRoute } from "@tanstack/react-router";

import { SiteNav, SiteFooter } from "@/components/site-nav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Benediction Studios" },
      {
        name: "description",
        content:
          "Reach Benediction Studios for festivals, distribution, press and submissions.",
      },
      { property: "og:title", content: "Contact — Benediction Studios" },
      {
        property: "og:description",
        content: "Festivals, distribution, press and submissions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const lines = [
  { label: "General", value: "hello@benediction.studio" },
  { label: "Press", value: "press@benediction.studio" },
  { label: "Submissions", value: "stories@benediction.studio" },
];

function Contact() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteNav />

      <section className="flex-1 px-6 pt-40 md:px-12 md:pt-56">
        <p className="label-caps text-gold/80">Contact</p>
        <h1 className="film-title fade-up mt-10 max-w-3xl text-4xl leading-[1.05] md:text-7xl">
          Tell us something true.
        </h1>

        <ul className="mt-24 max-w-xl space-y-12 md:mt-32">
          {lines.map((line) => (
            <li key={line.label}>
              <p className="label-caps text-muted-foreground">{line.label}</p>
              <a
                href={`mailto:${line.value}`}
                className="film-title mt-3 inline-block text-2xl text-foreground/90 transition-colors duration-500 hover:text-gold md:text-4xl"
              >
                {line.value}
              </a>
            </li>
          ))}
        </ul>

        <p className="label-caps mt-24 text-muted-foreground">Nashville, Tennessee</p>
      </section>

      <SiteFooter />
    </main>
  );
}
