import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, Panel } from "@/components/Layout";
import { productBacklog, type EstadoHistoria, type Prioridad } from "@/data/sprint1";

export const Route = createFileRoute("/backlog")({
  head: () => ({
    meta: [
      { title: "Product Backlog — CodeJalisco" },
      {
        name: "description",
        content:
          "Product Backlog priorizado de CodeJalisco: historias de usuario con criterios de aceptación, estimación y sprint asignado.",
      },
      { property: "og:title", content: "Product Backlog — CodeJalisco" },
      {
        property: "og:description",
        content: "Diez historias de usuario priorizadas y estimadas para los ocho sprints.",
      },
    ],
  }),
  component: BacklogPage,
});

const colorPrioridad: Record<Prioridad, string> = {
  Alta: "bg-destructive/10 text-destructive",
  Media: "bg-warning/20 text-warning-foreground",
  Baja: "bg-muted text-muted-foreground",
};

const colorEstado: Record<EstadoHistoria, string> = {
  Completada: "bg-success/15 text-success",
  "En progreso": "bg-accent/20 text-accent-foreground",
  Pendiente: "bg-muted text-muted-foreground",
};

function BacklogPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Entregable HU-02"
        title="Product Backlog"
        description="Lista priorizada de todo lo que la plataforma debe hacer. Cada historia indica quién la necesita, para qué, cómo se sabrá que está terminada, su prioridad, su estimación en puntos y el sprint en el que se planea trabajarla."
      />

      <div className="space-y-4">
        {productBacklog.map((h) => (
          <article key={h.id} className="card-panel p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs font-semibold text-primary">
                {h.id}
              </span>
              <span className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                {h.rol}
              </span>
              <span className={`rounded-md px-2 py-1 text-xs font-medium ${colorPrioridad[h.prioridad]}`}>
                Prioridad {h.prioridad}
              </span>
              <span className={`rounded-md px-2 py-1 text-xs font-medium ${colorEstado[h.estado]}`}>
                {h.estado}
              </span>
              <span className="ml-auto text-xs text-muted-foreground">
                {h.puntos} pts · Sprint {h.sprint}
              </span>
            </div>

            <p className="mt-4 text-lg leading-relaxed">
              <span className="text-muted-foreground">Como {h.rol.toLowerCase()}, </span>
              {h.historia}
            </p>

            <div className="mt-4">
              <p className="text-sm font-semibold">Criterios de aceptación</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {h.criterios.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Panel title="Cómo se priorizó">
          <p className="leading-relaxed text-muted-foreground">
            Se colocaron primero las historias que definen el proyecto y el flujo principal de
            reporte, porque sin ellas el resto no tiene sentido. Después se ubicaron las funciones
            de cuenta de usuario, ubicación y seguimiento; al final, el panel de las dependencias y
            los indicadores para la toma de decisiones, que dependen de que ya existan reportes
            registrados.
          </p>
        </Panel>
      </div>
    </Layout>
  );
}
