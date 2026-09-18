import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { proyecto } from "@/data/sprint1";

const navegacion = [
  { to: "/", label: "Inicio" },
  { to: "/backlog", label: "Product Backlog" },
  { to: "/planning", label: "Sprint Planning" },
  { to: "/desarrollo", label: "Desarrollo" },
  { to: "/reportar", label: "Prototipo" },
  { to: "/retrospectiva", label: "Retrospectiva" },
  { to: "/ajustes", label: "Ajustes" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4">
          <Link to="/" className="font-display text-lg font-semibold text-primary">
            {proyecto.nombre}
          </Link>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            {navegacion.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10">{children}</main>

      <footer className="border-t border-border bg-card/60">
        <div className="mx-auto max-w-6xl px-5 py-6 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">
            {proyecto.nombre} — {proyecto.lema}
          </p>
          <p className="mt-1">
            {proyecto.curso} · {proyecto.carrera} · Sprint 1 de 8
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">{title}</h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

export function Panel({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="card-panel p-6">
      {title ? <h2 className="mb-4 text-xl font-semibold">{title}</h2> : null}
      {children}
    </section>
  );
}
