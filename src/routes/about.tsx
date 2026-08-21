import { createFileRoute } from "@tanstack/react-router";

import { SiteNav, SiteFooter } from "@/components/site-nav";
import portrait from "@/assets/film-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Benediction Studios" },
      {
        name: "description",
        content:
          "Benediction Studios is a small independent studio in the American South, making patient films about faith and humanity.",
      },
      { property: "og:title", content: "About — Benediction Studios" },
      {
        property: "og:description",
        content:
          "A small independent studio making patient films about faith and humanity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <SiteNav />

      <section className="px-6 pt-40 md:px-12 md:pt-56">
        <p className="label-caps text-gold/80">About</p>
        <h1 className="film-title fade-up mt-10 max-w-4xl text-4xl leading-[1.05] md:text-7xl">
          We film slowly, and only what we love.
        </h1>
      </section>

      <section className="mt-24 grid gap-16 px-6 md:mt-40 md:grid-cols-2 md:gap-24 md:px-12">
        <img
          src={portrait}
          alt="An old man holding a candle in the dark"
          width={1200}
          height={1504}
          loading="lazy"
          className="w-full object-cover opacity-85"
        />
        <div className="space-y-10 self-center">
          <p className="max-w-sm text-lg leading-relaxed text-foreground/80">
            A small studio in the American South. Four people, one camera, and a
            long attention span.
          </p>
          <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
            Our films sit with ordinary people at the edge of belief.
          </p>
          <p className="label-caps text-gold/70">Est. 2019 · Nashville</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
