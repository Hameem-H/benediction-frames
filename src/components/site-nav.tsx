import { Link } from "@tanstack/react-router";

const items = [
  { to: "/", label: "Films" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav className="flex items-baseline justify-between px-6 py-7 md:px-12">
        <Link to="/" className="label-caps text-foreground/90 transition-opacity hover:opacity-60">
          Benediction
        </Link>
        <ul className="flex items-baseline gap-7 md:gap-12">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                activeOptions={{ exact: true }}
                className="label-caps text-foreground/60 transition-opacity duration-500 hover:opacity-100 [&.active]:text-foreground"
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
    <footer className="px-6 pb-10 pt-32 md:px-12">
      <p className="label-caps text-muted-foreground">
        Benediction Studios — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
