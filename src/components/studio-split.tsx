import { Link } from "@tanstack/react-router";
import cinematicStill from "@/assets/film-1.jpeg";

export function StudioSplit() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        {/* Left: Cinematic image */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden bg-secondary/20">
          <img
            src={cinematicStill}
            alt="Solitary cinematic frame in patient light"
            width={1200}
            height={1500}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition-transform duration-1000 ease-out hover:scale-[1.03]"
          />
        </div>

        {/* Right: Studio messaging */}
        <div className="space-y-8 lg:pl-6">
          <p className="label-caps text-gold/80">Studio</p>

          <h2 className="film-title text-4xl sm:text-5xl md:text-6xl text-foreground font-light leading-[0.92] tracking-tight">
            STORIES WITH SOMETHING TO SAY
          </h2>

          <p className="text-lg sm:text-xl text-foreground/80 font-light leading-relaxed max-w-lg">
            We work slowly with light and silence, capturing ordinary lives at the fragile boundary of faith, grief, and quiet grace.
          </p>

          <div>
            <Link
              to="/about"
              className="label-caps inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-foreground/90 transition-opacity duration-300 hover:opacity-60"
            >
              LEARN MORE <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
