import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { films } from "@/data/films";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { TrailerModal } from "@/components/trailer-modal";
import film1 from "@/assets/film-1.jpeg";
import film2 from "@/assets/film-2.jpeg";
import film3 from "@/assets/film-3.jpg";
import film4 from "@/assets/film-4.jpg";
import film5 from "@/assets/film-5.jpg";

const fallbackMap: Record<string, { poster: string; stills: string[] }> = {
  "the-quiet-hours": { poster: film2, stills: [film1, film3] },
  "long-road-home": { poster: film3, stills: [film2, film4] },
  "doorway": { poster: film4, stills: [film5, film1] },
  "salt-and-light": { poster: film5, stills: [film3, film2] },
  "silent-grace": { poster: film1, stills: [film4, film5] },
};

export const Route = createFileRoute("/films/$slug")({
  loader: ({ params }) => {
    const film = films.find((f) => f.slug === params.slug);
    if (!film) {
      throw notFound();
    }
    return { film };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.film?.title ?? "Film"} — Benediction Studios` },
      {
        name: "description",
        content: loaderData?.film?.description ?? "Independent motion picture by Benediction Studios",
      },
    ],
  }),
  component: FilmDetail,
});

function FilmDetail() {
  const { film } = Route.useLoaderData();
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const fallback = fallbackMap[film.slug] || { poster: film1, stills: [film2, film3] };

  // First still for hero background
  const heroStill = film.stills && film.stills[0] ? film.stills[0] : fallback.stills[0];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      <SiteNav />

      {/* TOP: Fullscreen Background Hero */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={heroStill}
          onError={(e) => {
            if (e.currentTarget.src !== fallback.stills[0]) {
              e.currentTarget.src = fallback.stills[0];
            }
          }}
          alt={`${film.title} background still`}
          className="slow-zoom absolute inset-0 h-full w-full object-cover opacity-75"
        />

        {/* Ambient Dark Gradient & Vignette */}
        <div className="hero-gradient pointer-events-none absolute inset-0" />

        {/* Hero Overlay Content */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-12 md:pb-24">
          <Link
            to="/"
            className="label-caps inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-opacity duration-300 mb-8"
          >
            <span aria-hidden="true">←</span> BACK TO ALL STORIES
          </Link>

          <p className="label-caps fade-up text-gold/90 mb-3 tracking-widest">
            A Film by {film.director}
          </p>

          <h1 className="film-title fade-up text-[13vw] sm:text-[10vw] md:text-[7vw] leading-[0.88] text-foreground tracking-tight">
            {film.title}
          </h1>

          <div className="fade-up mt-8 [animation-delay:300ms]">
            <button
              onClick={() => setIsTrailerOpen(true)}
              className="label-caps inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-foreground/90 transition-opacity duration-300 hover:opacity-60 cursor-pointer focus:outline-none"
            >
              WATCH TRAILER <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: THE STORY */}
      <section className="px-6 py-24 md:px-12 md:py-36 max-w-5xl">
        <p className="label-caps text-gold/80 mb-6">THE STORY</p>
        <p className="film-title text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground/90 font-light max-w-4xl">
          {film.description}
        </p>
      </section>

      {/* METADATA SECTION */}
      <section className="px-6 py-12 md:px-12 max-w-5xl border-t border-border/40">
        <p className="label-caps text-gold/80 mb-8">DETAILS</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          <div>
            <span className="label-caps text-xs text-muted-foreground block mb-2">Director</span>
            <span className="text-foreground/90 text-sm md:text-base font-light">{film.director}</span>
          </div>

          <div>
            <span className="label-caps text-xs text-muted-foreground block mb-2">Year</span>
            <span className="text-foreground/90 text-sm md:text-base font-light">{film.year}</span>
          </div>

          <div>
            <span className="label-caps text-xs text-muted-foreground block mb-2">Runtime</span>
            <span className="text-foreground/90 text-sm md:text-base font-light">{film.runtime}</span>
          </div>

          <div>
            <span className="label-caps text-xs text-muted-foreground block mb-2">Genre</span>
            <span className="text-foreground/90 text-sm md:text-base font-light">{film.genre}</span>
          </div>

          <div className="col-span-2 sm:col-span-1 md:col-span-1">
            <span className="label-caps text-xs text-muted-foreground block mb-2">Cast</span>
            <span className="text-foreground/90 text-sm md:text-base font-light block leading-relaxed">
              {film.cast.join(", ")}
            </span>
          </div>
        </div>
      </section>

      {/* GALLERY: FILM STILLS */}
      {film.stills && film.stills.length > 0 && (
        <section className="px-6 py-20 md:px-12 md:py-28">
          <p className="label-caps text-gold/80 mb-8">STILLS</p>
          <div className="grid gap-8 sm:grid-cols-2">
            {film.stills.map((still, idx) => (
              <div
                key={idx}
                className="group relative aspect-[16/9] w-full overflow-hidden bg-secondary/20"
              >
                <img
                  src={still}
                  onError={(e) => {
                    const fallbackStill = fallback.stills[idx] || film1;
                    if (e.currentTarget.src !== fallbackStill) {
                      e.currentTarget.src = fallbackStill;
                    }
                  }}
                  alt={`${film.title} still ${idx + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reusable Trailer Modal */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
        trailerId={film.trailerId}
        title={film.title}
      />

      <SiteFooter />
    </main>
  );
}
