import { useRef, useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SiteNav, SiteFooter } from "@/components/site-nav";
import hero from "@/assets/film-1.jpeg";
import featuredStill from "@/assets/film-2.jpeg";
import film2 from "@/assets/film-2.jpeg";
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
  { title: "The Quiet Hours", year: "2026", src: film2 },
  { title: "Long Road Home", year: "2025", src: film3 },
  { title: "Doorway", year: "2024", src: film4 },
  { title: "Salt & Light", year: "2023", src: film5 },
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
              href="#stories"
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

      <section id="stories" className="px-6 pt-28 md:px-10 md:pt-40">
        <p className="label-caps text-gold/80">Our Stories</p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-16 md:gap-8">
          {films.map((film) => (
            <article key={film.title} className="group cursor-pointer">
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={film.src}
                  alt={film.title}
                  width={800}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="label-caps text-foreground/90">
                    View Film <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h2 className="film-title text-xl md:text-2xl">{film.title}</h2>
                <span className="label-caps text-muted-foreground">{film.year}</span>
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
