import { SiteNav, SiteFooter } from "@/components/site-nav";
import { books } from "@/data/books";

export function BooksPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      <SiteNav />

      {/* SECTION 1 — HERO */}
      <section className="px-6 pt-36 pb-20 md:px-12 md:pt-52 text-center max-w-5xl mx-auto">
        <p className="label-caps text-gold/80 mb-4 tracking-widest">Benediction Works</p>
        <h1 className="film-title fade-up text-[12vw] sm:text-[10vw] md:text-[7vw] leading-[0.88] text-foreground tracking-tight">
          BOOKS & PLAYS
        </h1>
        <p className="fade-up mt-6 text-xl sm:text-2xl text-foreground/80 font-light tracking-wide [animation-delay:200ms]">
          Stories beyond the screen.
        </p>
      </section>

      {/* SECTION 2 — BOOKS GRID */}
      <section className="px-6 py-24 md:px-12 md:py-32 max-w-6xl mx-auto border-t border-border/20">
        <h2 className="film-title text-3xl sm:text-4xl md:text-5xl text-foreground font-light text-center mb-16 sm:mb-20 tracking-wider">
          BOOKS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-10 md:gap-14">
          {books.map((book) => (
            <div key={book.title} className="flex flex-col items-center group text-center">
              <div className="overflow-hidden w-full aspect-[2/3] max-w-[320px]">
                <img
                  src={book.image}
                  alt={book.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="film-title mt-6 text-xl sm:text-2xl text-foreground/90 font-light tracking-wide">
                {book.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — PLAYS */}
      {/* <section className="px-6 py-24 md:px-12 md:py-32 max-w-[900px] mx-auto border-t border-border/20 text-center">
        <h2 className="film-title text-3xl sm:text-4xl md:text-5xl text-foreground font-light mb-16 sm:mb-20 tracking-wider">
          PLAYS
        </h2>
        <div className="space-y-20 sm:space-y-24">
          {plays.map((play) => (
            <div key={play.title} className="flex flex-col items-center">
              <h3 className="film-title text-2xl sm:text-3xl text-foreground/90 font-light mb-6">
                {play.title}
              </h3>
              <div className="w-full aspect-video bg-secondary/30 overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${play.youtubeId}`}
                  title={play.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <SiteFooter />
    </main>
  );
}
