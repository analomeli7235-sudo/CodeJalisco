import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, Panel } from "@/components/Layout";
import { ajustes } from "@/data/sprint1";

export const Route = createFileRoute("/ajustes")({
  head: () => ({
    meta: [
      { title: "Ajustes para el siguiente sprint — CodeJalisco" },
      {
        name: "description",
        content:
          "Modificaciones y mejoras propuestas a partir de la retrospectiva del Sprint 1 de CodeJalisco y su relación con los sprints siguientes.",
      },
      { property: "og:title", content: "Ajustes para el siguiente sprint — CodeJalisco" },
      {
        property: "og:description",
        content: "Cinco ajustes derivados de la retrospectiva, con justificación y beneficio.",
      },
    ],
  }),
  component: AjustesPage,
});

const sprints = [
  { n: 2, titulo: "Diseño de interfaz, estructura y navegación" },
  { n: 3, titulo: "Registro, inicio de sesión y perfiles" },
  { n: 4, titulo: "Registro de problemas, categorías, descripción y fotografías" },
  { n: 5, titulo: "Ubicación, generación de folios y consulta de reportes" },
  { n: 6, titulo: "Seguimiento y actualización de estados" },
  { n: 7, titulo: "Panel administrativo y pruebas integrales" },
  { n: 8, titulo: "Correcciones, pruebas de aceptación, documentación y entrega" },
];

function AjustesPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Mejora continua"
        title="Modificaciones y ajustes para el siguiente sprint"
        description="Cada punto surge directamente de la retrospectiva. Se indica por qué se considera necesario, cómo mejora el trabajo del equipo y con qué sprint o actividad se relaciona."
      />

      <div className="space-y-4">
        {ajustes.map((a, i) => (
          <article key={a.ajuste} className="card-panel p-6">
            <div className="flex flex-wrap items-start gap-4">
              <span className="font-display text-2xl font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 space-y-3">
                <h2 className="text-lg font-semibold">{a.ajuste}</h2>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Por qué es necesario: </strong>
                  {a.porque}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Cómo mejora el desarrollo: </strong>
                  {a.beneficio}
                </p>
                <p className="text-sm">
                  <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                    Se aplica en: {a.relacion}
                  </span>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Panel title="Ruta de los sprints siguientes">
          <ul className="grid gap-3 sm:grid-cols-2">
            {sprints.map((s) => (
              <li
                key={s.n}
                className="flex gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm"
              >
                <span className="font-display font-semibold text-primary">S{s.n}</span>
                <span className="text-muted-foreground">{s.titulo}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </Layout>
  );
}
