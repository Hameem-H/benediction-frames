import closingStill from "@/assets/film-5.jpg";

export function ClosingSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden flex flex-col justify-between px-6 py-16 md:px-16 md:py-20 text-foreground bg-black">
      {/* Background cinematic still */}
      <img
        src={closingStill}
        alt="Closing cinematic frame"
        width={1600}
        height={1067}
        loading="lazy"
        className="slow-zoom absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Ambient Dark Gradient Overlay */}
      <div className="hero-gradient pointer-events-none absolute inset-0" />

      {/* Spacer for top */}
      <div className="relative z-10" />

      {/* Main Stacked Typography */}
      <div className="relative z-10 max-w-6xl my-auto">
        <h2 className="film-title text-[14vw] sm:text-[12vw] md:text-[9vw] leading-[0.85] text-foreground tracking-tight">
          EVERY STORY
        </h2>
        <h2 className="film-title text-[14vw] sm:text-[12vw] md:text-[9vw] leading-[0.85] text-gold/90 tracking-tight">
          LEAVES SOMETHING
        </h2>
        <h2 className="film-title text-[14vw] sm:text-[12vw] md:text-[9vw] leading-[0.85] text-foreground tracking-tight">
          BEHIND.
        </h2>
      </div>

      {/* Closing Studio Branding */}
      <div className="relative z-10 pt-8 border-t border-white/15 max-w-xs">
        <p className="label-caps text-xs sm:text-sm text-foreground/80 tracking-[0.3em]">
          BENEDICTION STUDIOS
        </p>
      </div>
    </section>
  );
}
