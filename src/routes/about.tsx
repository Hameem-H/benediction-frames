import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav, SiteFooter } from "@/components/site-nav";
import portrait from "@/assets/benedict.png";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Why We Tell Stories — Benediction Studios" },
      {
        name: "description",
        content:
          "The story, philosophy, and purpose behind Benediction Studios and filmmaker Benedict Dorsey.",
      },
      { property: "og:title", content: "Why We Tell Stories — Benediction Studios" },
      {
        property: "og:description",
        content:
          "An independent film studio focused on patient, human cinema about faith, grief, and grace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      <SiteNav />

      {/* HERO: WHY WE TELL STORIES. */}
      <section className="px-6 pt-36 md:px-12 md:pt-52 max-w-6xl">
        <p className="label-caps text-gold/80 mb-4 tracking-widest">About the Studio</p>
        <h1 className="film-title fade-up text-[12vw] sm:text-[10vw] md:text-[7vw] leading-[0.88] text-foreground tracking-tight">
          WHY WE TELL STORIES.
        </h1>
        <p className="fade-up mt-8 text-xl sm:text-2xl md:text-3xl text-foreground/80 font-light leading-relaxed max-w-3xl [animation-delay:200ms]">
          At Benediction Studios, we believe the most powerful stories do more than entertain—they stay with you.
          We tell stories about the human experience—faith and family, love and loss, struggle and sacrifice, failure and redemption. Stories that make us feel, make us think, and sometimes make us see ourselves differently.
          Because when the screen goes dark and the credits begin to roll, the best stories aren't over.
          They go home with you
        </p>
      </section>

      {/* PHOTOGRAPH & FILMMAKER STORY */}
      <section className="mt-24 px-6 md:mt-36 md:px-12 max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Photograph */}
          <div className="lg:col-span-6 relative aspect-[4/5] w-full overflow-hidden bg-secondary/20">
            <img
              src={portrait}
              alt="Benedict Dorsey observing light on set"
              width={1200}
              height={1500}
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition-transform duration-1000 ease-out hover:scale-[1.02]"
            />
          </div>

          {/* Filmmaker Story */}
          <div className="lg:col-span-6 space-y-8">
            <p className="label-caps text-gold/80">The Filmmaker</p>
            <h2 className="film-title text-4xl sm:text-5xl text-foreground font-light leading-tight">
              Benedict Dorsey
            </h2>
            <div className="space-y-6 text-foreground/80 font-light text-lg leading-relaxed">
              <p>
                Raised in the Charles Village section of Baltimore City, Benedict A. Dorsey began his journey as a storyteller writing stage plays and musicals. His passion for storytelling eventually moved from the stage to the screen, as he began transforming his plays into films marked by unexpected twists, complicated plots, and characters facing very human choices.
                As an independent filmmaker, Dorsey explores faith, family, human struggle, and what happens when life pushes ordinary people beyond what they thought they could endure.
                With seven award-winning independent films to his credit, Dorsey approaches filmmaking with a simple conviction: every story should have something to say.
                “I make films where viewers can look at the screen and say, ‘That’s me.’ I don’t try to manipulate their emotions or rush them toward predictable endings. I want them to recognize something real.”
                That philosophy revealed itself at the screening of his first film, The Human Web. During the film, Dorsey noticed a man get up and leave the theater. He followed him out and asked why he was leaving.

              </p>
              <p>
                The man’s answer was simple:
                “That’s my life up there.”
                For Dorsey, that is why stories matter.              </p>
              <p>
                His latest feature, AGBARRA!, continues that journey—challenging audiences to consider just how far love, desperation, and faith can take us.
              </p>
            </div>
            <p className="label-caps text-muted-foreground text-xs pt-4">
              BENEDICTION STUDIOS · NASHVILLE & SAVANNAH
            </p>
          </div>
        </div>
      </section>

      {/* STUDIO PHILOSOPHY */}
      <section className="mt-32 bg-black py-28 px-6 md:py-36 md:px-12 text-foreground">
        <div className="max-w-5xl mx-auto">
          <p className="label-caps text-gold/80 mb-6">Our Philosophy</p>
          <h2 className="film-title text-3xl sm:text-4xl md:text-5xl leading-tight font-light text-foreground/90 mb-16">
            We shine a light into dark places to reveal the extraordinary stories hidden within ordinary lives.
            And perhaps, along the way, we'll find yours.

          </h2>

          <div className="grid gap-12 sm:grid-cols-3 border-t border-white/10 pt-12">
            <div>
              <span className="label-caps text-xs text-gold/70 block mb-3">01 · PATIENT LIGHT</span>
              <h3 className="film-title text-2xl text-foreground mb-3 font-light">Honesty First</h3>
              <p className="text-foreground/75 font-light text-base leading-relaxed">
                We shoot using natural ambient light and long, unbroken takes, giving actors space to exist authentically.
              </p>
            </div>

            <div>
              <span className="label-caps text-xs text-gold/70 block mb-3">02 · HUMAN SCALE</span>
              <h3 className="film-title text-2xl text-foreground mb-3 font-light">Intimacy Over Scale</h3>
              <p className="text-foreground/75 font-light text-base leading-relaxed">
                A single room or a quiet conversation holds more drama than explosions when written with truth and intent.
              </p>
            </div>

            <div>
              <span className="label-caps text-xs text-gold/70 block mb-3">03 · ENDURING RESONANCE</span>
              <h3 className="film-title text-2xl text-foreground mb-3 font-light">Cinema That Stays</h3>
              <p className="text-foreground/75 font-light text-base leading-relaxed">
                Our objective is never quick distraction. We make films intended to linger in memory long after the credits fade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED ACHIEVEMENTS (NON-RESUME FORMAT) */}
      <section className="py-28 px-6 md:py-36 md:px-12 max-w-5xl mx-auto">
        <p className="label-caps text-gold/80 mb-6">Recognition</p>
        <h2 className="film-title text-4xl sm:text-5xl text-foreground font-light mb-16">
          SELECTED HONOURS
        </h2>

        <div className="space-y-12 border-t border-border/40 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <div className="md:col-span-3">
              <span className="label-caps text-gold/90 text-sm">SUNDANCE FILM FESTIVAL</span>
            </div>
            <div className="md:col-span-9 space-y-1">
              <h3 className="film-title text-2xl text-foreground font-light">Official Selection — U.S. Dramatic Competition</h3>
              <p className="text-foreground/75 font-light">Premieres for <span className="text-foreground font-normal">The Quiet Hours</span> and <span className="text-foreground font-normal">Doorway</span></p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline border-t border-border/20 pt-8">
            <div className="md:col-span-3">
              <span className="label-caps text-gold/90 text-sm">TORONTO INT. FILM FESTIVAL</span>
            </div>
            <div className="md:col-span-9 space-y-1">
              <h3 className="film-title text-2xl text-foreground font-light">Special Presentations Selection</h3>
              <p className="text-foreground/75 font-light">International premiere of <span className="text-foreground font-normal">Long Road Home</span></p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline border-t border-border/20 pt-8">
            <div className="md:col-span-3">
              <span className="label-caps text-gold/90 text-sm">INDEPENDENT SPIRIT AWARDS</span>
            </div>
            <div className="md:col-span-9 space-y-1">
              <h3 className="film-title text-2xl text-foreground font-light">John Cassavetes Award Nominee</h3>
              <p className="text-foreground/75 font-light">Honoring features made for under $1M with singular artistic vision</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline border-t border-border/20 pt-8">
            <div className="md:col-span-3">
              <span className="label-caps text-gold/90 text-sm">LOCARNO FILM FESTIVAL</span>
            </div>
            <div className="md:col-span-9 space-y-1">
              <h3 className="film-title text-2xl text-foreground font-light">Golden Leopard Nominee & Jury Prize</h3>
              <p className="text-foreground/75 font-light">European premiere and Special Jury Prize for <span className="text-foreground font-normal">Salt and Light</span></p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 text-center border-t border-border/40">
          <Link
            to="/"
            className="label-caps inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-foreground/90 transition-opacity duration-300 hover:opacity-60"
          >
            [ DISCOVER OUR FILMS ]
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
