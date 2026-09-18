import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, Panel } from "@/components/Layout";
import { retrospectiva } from "@/data/sprint1";

export const Route = createFileRoute("/retrospectiva")({
  head: () => ({
    meta: [
      { title: "Reunión retrospectiva — Sprint 1 de CodeJalisco" },
      {
        name: "description",
        content:
          "Resultados de la retrospectiva del Sprint 1 de CodeJalisco: qué funcionó, dificultades encontradas, aprendizajes y conclusiones.",
      },
      { property: "og:title", content: "Reunión retrospectiva — Sprint 1" },
      {
        property: "og:description",
        content: "Qué funcionó, qué se dificultó, aprendizajes y conclusiones del primer sprint.",
      },
    ],
  }),
  component: RetrospectivaPage,
});

function RetrospectivaPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Cierre del Sprint 1"
        title="Reunión retrospectiva"
        description="Al terminar el sprint el equipo revisó cómo se trabajó, no solo qué se entregó. La conversación se organizó en tres preguntas: qué funcionó bien, qué se dificultó y qué se aprende de todo ello."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Lista
          titulo="Lo que funcionó"
          acento="text-success"
          simbolo="✓"
          items={retrospectiva.funciono}
        />
        <Lista
          titulo="Dificultades y áreas de oportunidad"
          acento="text-destructive"
          simbolo="!"
          items={retrospectiva.dificultades}
        />
        <Lista
          titulo="Aprendizajes"
          acento="text-accent"
          simbolo="★"
          items={retrospectiva.aprendizajes}
        />
      </div>

      <div className="mt-6">
        <Panel title="Conclusiones">
          <p className="text-lg leading-relaxed">{retrospectiva.conclusiones}</p>
        </Panel>
      </div>
    </Layout>
  );
}

function Lista({
  titulo,
  items,
  acento,
  simbolo,
}: {
  titulo: string;
  items: string[];
  acento: string;
  simbolo: string;
}) {
  return (
    <Panel title={titulo}>
      <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={`${acento} font-semibold`}>{simbolo}</span>
            {item}
          </li>
        ))}
      </ul>
    </Panel>
  );
}
