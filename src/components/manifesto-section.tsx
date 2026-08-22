import { useEffect, useRef, useState } from "react";

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] w-full bg-black flex flex-col justify-center px-6 py-24 md:px-12 lg:px-20 text-foreground overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Line by line text fade-in */}
        <div className="space-y-1">
          <h2
            className={`film-title text-[15vw] sm:text-[13vw] md:text-[10vw] leading-[0.84] text-foreground tracking-tight transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            STORY
          </h2>
          <h2
            className={`film-title text-[15vw] sm:text-[13vw] md:text-[10vw] leading-[0.84] text-gold/90 tracking-tight transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            BEFORE
          </h2>
          <h2
            className={`film-title text-[15vw] sm:text-[13vw] md:text-[10vw] leading-[0.84] text-foreground tracking-tight transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "650ms" }}
          >
            SPECTACLE.
          </h2>
        </div>

        {/* Statement text below */}
        <p
          className={`mt-12 sm:mt-16 max-w-2xl text-xl sm:text-2xl md:text-3xl text-foreground/80 font-light leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "950ms" }}
        >
          We believe a powerful film doesn't begin with a budget. It begins with something worth saying.
        </p>
      </div>
    </section>
  );
}
