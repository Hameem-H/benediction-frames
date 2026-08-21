import { createFileRoute } from "@tanstack/react-router";

import { SiteNav, SiteFooter } from "@/components/site-nav";
import hero from "@/assets/film-1.jpg";
import film2 from "@/assets/film-2.jpg";
import film3 from "@/assets/film-3.jpg";
import film4 from "@/assets/film-4.jpg";
import film5 from "@/assets/film-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Benediction Studios — Independent Films" },
      {
        name: "description",
        content:
          "An independent film studio making quiet, human stories about faith, grief and grace.",
      },
      { property: "og:title", content: "Benediction Studios — Independent Films" },
      {
        property: "og:description",
        content:
          "An independent film studio making quiet, human stories about faith, grief and grace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Films,
});

const films = [
  { title: "The Quiet Hours", year: "2026", note: "Feature", src: film2 },
  { title: "Long Road Home", year: "2025", note: "Feature", src: film3 },
  { title: "Doorway", year: "2024", note: "Short", src: film4 },
  { title: "Salt & Light", year: "2023", note: "Feature", src: film5 },
];

function Films() {
  return (
    <main>
      <SiteNav />

      <section className="vignette relative h-[100svh] w-full overflow-hidden">
        <img
          src={hero}
          alt="A woman standing alone in a cathedral as light falls through a high window"
          width={1600}
          height={912}
          className="reveal-slow h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-12 md:pb-20">
          <h1 className="film-title fade-up text-[13vw] leading-[0.85] md:text-[7.5vw]">
            Benediction
          </h1>
          <p className="fade-up label-caps mt-6 text-muted-foreground [animation-delay:600ms]">
            Stories of faith, grief and grace
          </p>
        </div>
      </section>

      <section className="px-6 pt-28 md:px-12 md:pt-40">
        <p className="label-caps text-gold/80">Films</p>

        <div className="mt-16 space-y-28 md:mt-24 md:space-y-44">
          {films.map((film, i) => (
            <article
              key={film.title}
              className={
                i % 2 === 0
                  ? "md:w-[62%]"
                  : "md:ml-auto md:w-[46%] md:-translate-y-24"
              }
            >
              <div className="overflow-hidden">
                <img
                  src={film.src}
                  alt={film.title}
                  width={1200}
                  height={1504}
                  loading="lazy"
                  className="w-full object-cover opacity-85 transition-all duration-[1400ms] ease-out hover:scale-[1.03] hover:opacity-100"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6">
                <h2 className="film-title text-3xl md:text-5xl">{film.title}</h2>
                <span className="label-caps whitespace-nowrap text-muted-foreground">
                  {film.note} · {film.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pt-40 md:px-12">
        <p className="film-title max-w-3xl text-3xl leading-tight text-foreground/90 md:text-5xl">
          We make small films about people who are still hoping.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
