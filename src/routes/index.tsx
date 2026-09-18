import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, Panel } from "@/components/Layout";
import { categorias, proyecto, productBacklog } from "@/data/sprint1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeJalisco — Sprint 1 | Reporte ciudadano de problemas urbanos" },
      {
        name: "description",
        content:
          "Documentación y prototipo del Sprint 1 de CodeJalisco: plataforma ciudadana para reportar baches, alumbrado, basura, árboles caídos y fugas de agua.",
      },
      { property: "og:title", content: "CodeJalisco — Sprint 1" },
      {
        property: "og:description",
        content:
          "Product Backlog, Sprint Planning, desarrollo y retrospectiva del primer sprint de CodeJalisco.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const completadas = productBacklog.filter((h) => h.estado === "Completada");
  const puntos = completadas.reduce((total, h) => total + h.puntos, 0);

  return (
    <Layout>
      <section className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Sprint 1 de 8 · Análisis y planeación
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            {proyecto.nombre}
          </h1>
          <p className="mt-2 text-xl text-primary">{proyecto.lema}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            {proyecto.descripcion}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/planning"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver Sprint Planning
            </Link>
            <Link
              to="/reportar"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Probar el prototipo
            </Link>
          </div>
        </div>

        <div className="card-panel grid grid-cols-2 gap-4 p-6">
          <Dato valor={String(productBacklog.length)} texto="Historias en el backlog" />
          <Dato valor={String(completadas.length)} texto="Historias completadas" />
          <Dato valor={String(puntos)} texto="Puntos entregados" />
          <Dato valor="8" texto="Sprints de 2 semanas" />
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="El problema">
          <p className="leading-relaxed text-muted-foreground">
            Reportar un problema de la ciudad suele ser complicado: la persona no sabe a qué
            dependencia acudir ni por qué medio hacerlo. Eso provoca que los problemas tarden en
            atenderse o que simplemente no se reporten.
          </p>
        </Panel>
        <Panel title="La solución">
          <p className="leading-relaxed text-muted-foreground">
            Un solo canal digital donde el ciudadano registra el problema, agrega fotografía y
            ubicación, envía el reporte y recibe un folio para consultar después si ya fue
            atendido. El sistema canaliza cada reporte a la dependencia correspondiente.
          </p>
        </Panel>
      </div>

      <section className="mt-6">
        <Panel title="Categorías que atiende la plataforma">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categorias.map((c) => (
              <li
                key={c.nombre}
                className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3"
              >
                <span className="text-2xl" aria-hidden>
                  {c.icono}
                </span>
                <span>
                  <span className="block font-medium">{c.nombre}</span>
                  <span className="block text-sm text-muted-foreground">{c.dependencia}</span>
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </section>
    </Layout>
  );
}

function Dato({ valor, texto }: { valor: string; texto: string }) {
  return (
    <div className="rounded-lg bg-muted/60 p-4">
      <p className="font-display text-3xl font-semibold text-primary">{valor}</p>
      <p className="mt-1 text-sm text-muted-foreground">{texto}</p>
    </div>
  );
}
