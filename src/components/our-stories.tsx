import { Link } from "@tanstack/react-router";
import { films, type Film } from "@/data/films";

interface OurStoriesProps {
  filmList?: Film[];
}

export function OurStories({ filmList = films }: OurStoriesProps) {
  return (
    <section id="stories" className="px-6 py-24 md:px-10 md:py-36">
      <header className="mb-12 md:mb-16">
        <p className="label-caps text-gold/80 mb-2">Filmography</p>
        <h2 className="film-title text-5xl sm:text-6xl md:text-7xl font-light text-foreground tracking-tight">
          OUR STORIES
        </h2>
      </header>

      {/* Grid: 1-2 columns mobile, 3-4 columns desktop, clean spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-16">
        {filmList.map((film) => (
          <Link
            key={film.slug}
            to="/films/$slug"
            params={{ slug: film.slug }}
            className="group block cursor-pointer text-left focus:outline-none"
          >
            <article>
              {/* Poster container (Dominant vertical aspect, no borders, no cards) */}
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-secondary/20">
                <img
                  src={film.poster}

                  alt={`${film.title} (${film.year}) poster`}
                  width={800}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay: VIEW FILM → */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="label-caps text-xs tracking-widest text-foreground font-medium flex items-center gap-2 transform translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                    VIEW FILM <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>

              {/* Title & Year */}
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="film-title text-2xl md:text-3xl text-foreground/90 font-light group-hover:text-gold transition-colors duration-300">
                  {film.title}
                </h3>
                <span className="label-caps text-xs text-muted-foreground shrink-0">
                  {film.year}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
