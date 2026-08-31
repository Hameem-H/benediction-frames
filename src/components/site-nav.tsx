import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

const items = [
  { to: "/", label: "Films" },
  { to: "/books", label: "Books" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/60" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="label-caps text-foreground/90 transition-opacity duration-300 hover:opacity-60"
        >
          Benediction Studios
        </Link>
        <ul className="flex items-center gap-6 md:gap-10">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                activeOptions={{ exact: true }}
                className="label-caps text-foreground/70 transition-opacity duration-300 hover:opacity-100 [&.active]:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-6 pb-10 pt-32 md:px-10">
      <p className="label-caps text-muted-foreground">
        Benediction Studios — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
