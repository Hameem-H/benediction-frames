import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { films } from "@/data/films";
import { SiteNav, SiteFooter } from "@/components/site-nav";
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
        content: loaderData?.film?.description ?? "Independent film by Benediction Studios",
      },
    ],
  }),
  component: FilmDetail,
});

function FilmDetail() {
  const { film } = Route.useLoaderData();
  const fallback = fallbackMap[film.slug] || { poster: film1, stills: [film2, film3] };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero Poster / Detail Section */}
      <section className="px-6 pt-32 md:px-12 md:pt-40">
        <Link
          to="/"
          className="label-caps inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <span aria-hidden="true">←</span> Back to All Stories
        </Link>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Poster */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-secondary/20">
              <img
                src={film.poster}
                onError={(e) => {
                  if (e.currentTarget.src !== fallback.poster) {
                    e.currentTarget.src = fallback.poster;
                  }
                }}
                alt={film.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="label-caps text-gold/80 mb-2">{film.genre} · {film.runtime}</p>
              <h1 className="film-title text-5xl md:text-7xl font-light leading-none">
                {film.title}
              </h1>
              <p className="label-caps text-muted-foreground mt-4">
                {film.year} · Directed by {film.director}
              </p>
            </div>

            <p className="text-lg leading-relaxed text-foreground/80 max-w-2xl font-light">
              {film.description}
            </p>

            {film.cast && film.cast.length > 0 && (
              <div>
                <h2 className="label-caps text-xs text-gold/80 mb-2">Starring</h2>
                <p className="text-foreground/90 font-light">{film.cast.join(", ")}</p>
              </div>
            )}

            {/* Trailer embed */}
            {film.trailerId && (
              <div className="pt-6">
                <h2 className="label-caps text-xs text-gold/80 mb-4">Official Trailer</h2>
                <div className="relative aspect-video w-full overflow-hidden bg-black/50">
                  <iframe
                    src={`https://www.youtube.com/embed/${film.trailerId}`}
                    title={`${film.title} Trailer`}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stills Gallery */}
      {film.stills && film.stills.length > 0 && (
        <section className="px-6 py-24 md:px-12">
          <h2 className="label-caps text-gold/80 mb-8">Film Stills</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {film.stills.map((still, idx) => (
              <div key={idx} className="aspect-video w-full overflow-hidden bg-secondary/20">
                <img
                  src={still}
                  onError={(e) => {
                    const fallbackStill = fallback.stills[idx] || film1;
                    if (e.currentTarget.src !== fallbackStill) {
                      e.currentTarget.src = fallbackStill;
                    }
                  }}
                  alt={`${film.title} still ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
