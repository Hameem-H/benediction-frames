import { useRef, useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SiteNav, SiteFooter } from "@/components/site-nav";
import hero from "@/assets/film-1.jpg";
import featuredStill from "@/assets/film-2.jpg";
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

function useScrollZoom<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  min = 1,
  max = 1.08
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (viewportH - rect.top) / (viewportH + rect.height))
      );
      const scale = min + (max - min) * progress;
      el.style.setProperty("--zoom", scale.toFixed(3));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [min, max]);
}

function useReveal<T extends HTMLElement>(ref: React.RefObject<T | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return visible;
}

function Films() {
  const featuredRef = useRef<HTMLElement>(null);
  const featuredImageRef = useRef<HTMLImageElement>(null);
  const featuredVisible = useReveal(featuredRef);
  useScrollZoom(featuredImageRef);

  return (
    <main>
      <SiteNav />

      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={hero}
          alt="A solitary figure in still, cinematic light"
          width={1600}
          height={912}
          className="slow-zoom absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="hero-gradient pointer-events-none absolute inset-0" />

        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-10 md:pb-24">
          <h1 className="film-title fade-up text-[14vw] leading-[0.82] text-foreground md:text-[8vw]">
            Benediction
          </h1>
          <h2 className="film-title fade-up text-[14vw] leading-[0.82] text-foreground md:text-[8vw] [animation-delay:180ms]">
            Studios
          </h2>
          <p className="fade-up label-caps mt-8 text-foreground/70 [animation-delay:420ms]">
            Independent Motion Pictures
          </p>
          <div className="fade-up mt-10 [animation-delay:620ms]">
            <a
              href="#films"
              className="label-caps inline-block border-b border-foreground/30 pb-1 text-foreground/90 transition-opacity duration-300 hover:opacity-60"
            >
              [ Explore Our Films ]
            </a>
          </div>
        </div>
      </section>

      <section
        ref={featuredRef}
        id="featured"
        className="bg-background px-6 py-28 md:px-10 md:py-40"
      >
        <p className="label-caps text-gold/80">Now Showing</p>

        <div className="mt-10 overflow-hidden">
          <img
            ref={featuredImageRef}
            src={featuredStill}
            alt="A woman standing at a kitchen window in soft morning light"
            width={1200}
            height={1504}
            loading="lazy"
            className="h-[50svh] w-full object-cover will-change-transform md:h-[65svh]"
            style={{ transform: "scale(var(--zoom, 1))" }}
          />
        </div>

        <div
          className={`mt-10 transition-all duration-1000 ease-out ${
            featuredVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="film-title text-[12vw] leading-[0.9] text-foreground md:text-[7vw]">
            The Quiet Hours
          </h2>
          <p className="label-caps mt-4 text-muted-foreground">
            Written & Directed by Benedict Dorsey
          </p>
          <p className="mt-6 max-w-xl text-foreground/80">
            A woman returns home and learns what it means to stay.
          </p>
          <a
            href="#trailer"
            className="label-caps mt-8 inline-flex items-center gap-2 text-foreground/90 transition-opacity duration-300 hover:opacity-60"
          >
            WATCH TRAILER <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section id="films" className="px-6 pt-28 md:px-10 md:pt-40">
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

      <section className="px-6 pt-40 md:px-10">
        <p className="film-title max-w-3xl text-3xl leading-tight text-foreground/90 md:text-5xl">
          We make small films about people who are still hoping.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
