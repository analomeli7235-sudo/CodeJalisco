import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, Panel } from "@/components/Layout";
import { sprintPlanning } from "@/data/sprint1";

export const Route = createFileRoute("/planning")({
  head: () => ({
    meta: [
      { title: "Sprint Planning — Sprint 1 de CodeJalisco" },
      {
        name: "description",
        content:
          "Objetivo, tareas planificadas y expectativas del Sprint 1 de CodeJalisco, relacionadas con el Product Backlog.",
      },
      { property: "og:title", content: "Sprint Planning — Sprint 1 de CodeJalisco" },
      {
        property: "og:description",
        content: "Objetivo del sprint, tareas planificadas y su relación con el Product Backlog.",
      },
    ],
  }),
  component: PlanningPage,
});

function PlanningPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Sprint 1 · Semanas 1 y 2"
        title="Sprint Planning"
        description="Reunión de planeación en la que el equipo acordó el objetivo del primer sprint, seleccionó las historias del Product Backlog y las desglosó en tareas concretas."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Panel title="Objetivo del sprint">
            <p className="text-lg leading-relaxed">{sprintPlanning.objetivo}</p>
          </Panel>
        </div>
        <Panel title="Datos del sprint">
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Duración</dt>
              <dd className="font-medium">{sprintPlanning.duracion}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Capacidad estimada</dt>
              <dd className="font-medium">{sprintPlanning.capacidad}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Comprometido</dt>
              <dd className="font-medium">{sprintPlanning.comprometido}</dd>
            </div>
          </dl>
        </Panel>
      </div>

      <div className="mt-6">
        <Panel title="Tareas planificadas y su relación con el Product Backlog">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="pb-3 pr-4 font-medium">Tarea</th>
                  <th className="pb-3 pr-4 font-medium">Historia</th>
                  <th className="pb-3 font-medium">Resultado esperado</th>
                </tr>
              </thead>
              <tbody>
                {sprintPlanning.tareas.map((t) => (
                  <tr key={t.tarea} className="border-b border-border/60 last:border-0">
                    <td className="py-3 pr-4 font-medium">{t.tarea}</td>
                    <td className="py-3 pr-4">
                      <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs font-semibold text-primary">
                        {t.historia}
                      </span>
                    </td>
                    <td className="py-3 text-muted-foreground">{t.resultado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>

      <div className="mt-6">
        <Panel title="Qué se esperaba obtener al finalizar el sprint">
          <p className="leading-relaxed text-muted-foreground">{sprintPlanning.expectativa}</p>
        </Panel>
      </div>
    </Layout>
  );
}
