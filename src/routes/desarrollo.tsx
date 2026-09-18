import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, Panel } from "@/components/Layout";
import { camposReporte, productBacklog } from "@/data/sprint1";

export const Route = createFileRoute("/desarrollo")({
  head: () => ({
    meta: [
      { title: "Desarrollo y resultados — Sprint 1 de CodeJalisco" },
      {
        name: "description",
        content:
          "Qué se desarrolló en el Sprint 1 de CodeJalisco, estructura de archivos, modelo de datos del reporte y resultados obtenidos.",
      },
      { property: "og:title", content: "Desarrollo y resultados — Sprint 1" },
      {
        property: "og:description",
        content: "Estructura del proyecto, modelo de datos del reporte y resultados del sprint.",
      },
    ],
  }),
  component: DesarrolloPage,
});

const estructura = `codejalisco/
├── README.md              Instrucciones para instalar, ejecutar y revisar
├── package.json           Dependencias y comandos del proyecto
├── docs/
│   └── sprint-1.md        Documentación completa del Sprint 1
└── src/
    ├── data/
    │   └── sprint1.ts     Product Backlog, planning, retrospectiva y ajustes
    ├── lib/
    │   └── folio.ts       Generación del folio y validación del reporte
    ├── components/
    │   └── Layout.tsx     Encabezado, navegación y estructura común
    ├── styles.css         Sistema de diseño (colores, tipografía, tarjetas)
    └── routes/
        ├── index.tsx          Presentación del proyecto
        ├── backlog.tsx        Product Backlog
        ├── planning.tsx       Sprint Planning
        ├── desarrollo.tsx     Desarrollo y resultados
        ├── reportar.tsx       Prototipo del formulario de reporte
        ├── retrospectiva.tsx  Reunión retrospectiva
        └── ajustes.tsx        Ajustes para el siguiente sprint`;

const resultados = [
  "Product Backlog con 10 historias de usuario priorizadas, estimadas y asignadas a un sprint.",
  "Sprint Planning documentado con objetivo, tareas y relación con el backlog.",
  "Modelo de datos del reporte y regla de folio (CJ-AAAA-NNNN) definidos.",
  "Aplicación web ejecutable, sin errores, con la documentación del sprint navegable.",
  "Prototipo funcional del formulario de reporte con validaciones y folio de demostración.",
  "Repositorio organizado con README e instrucciones de ejecución.",
];

function DesarrolloPage() {
  const delSprint = productBacklog.filter((h) => h.sprint === 1);

  return (
    <Layout>
      <PageHeader
        eyebrow="Incremento del Sprint 1"
        title="Desarrollo y resultados"
        description="El primer sprint corresponde al análisis y la planeación del proyecto, por lo que el código entregado tiene dos propósitos: presentar de forma navegable la documentación del sprint y dejar instalada la base técnica (estructura, sistema de diseño y reglas de negocio iniciales) sobre la que se construirán los sprints siguientes."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Qué se desarrolló">
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <strong className="text-foreground">Base del proyecto:</strong> estructura de
              carpetas, navegación entre secciones y un sistema de diseño con colores y tipografías
              definidos en un solo archivo.
            </li>
            <li>
              <strong className="text-foreground">Documentación viva:</strong> el backlog, el
              planning, la retrospectiva y los ajustes se guardan como datos del proyecto y se
              muestran en pantalla, así que basta actualizar un archivo para que todo el sitio
              refleje el cambio.
            </li>
            <li>
              <strong className="text-foreground">Reglas de negocio iniciales:</strong> validación
              del reporte y generación del folio, que en los siguientes sprints se conectarán a una
              base de datos real.
            </li>
          </ul>
        </Panel>

        <Panel title="Cómo funciona">
          <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
            <li>Cada sección del menú es una página independiente del proyecto.</li>
            <li>
              La información del sprint vive en <code className="font-mono text-xs">src/data/sprint1.ts</code>{" "}
              y las páginas solo la presentan.
            </li>
            <li>
              En el prototipo, al enviar el formulario se revisan los datos y, si son correctos, se
              genera un folio con el formato acordado.
            </li>
            <li>
              Al ser un prototipo del Sprint 1, la información aún no se guarda en un servidor: eso
              corresponde a los Sprints 4 y 5.
            </li>
          </ol>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Panel title="Estructura de archivos y carpetas">
          <pre className="overflow-x-auto rounded-lg bg-muted/70 p-4 font-mono text-xs leading-relaxed">
            {estructura}
          </pre>
        </Panel>

        <Panel title="Modelo de datos del reporte (HU-03)">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="pb-2 pr-3 font-medium">Campo</th>
                  <th className="pb-2 pr-3 font-medium">Tipo</th>
                  <th className="pb-2 font-medium">Descripción</th>
                </tr>
              </thead>
              <tbody>
                {camposReporte.map((c) => (
                  <tr key={c.campo} className="border-b border-border/60 last:border-0">
                    <td className="py-2 pr-3 font-mono text-xs">{c.campo}</td>
                    <td className="py-2 pr-3 text-muted-foreground">{c.tipo}</td>
                    <td className="py-2 text-muted-foreground">{c.descripcion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title="Resultados obtenidos">
          <ul className="space-y-2 text-muted-foreground">
            {resultados.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="text-success">✓</span>
                {r}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Historias entregadas en el sprint">
          <ul className="space-y-2">
            {delSprint.map((h) => (
              <li
                key={h.id}
                className="flex items-center justify-between rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm"
              >
                <span>
                  <span className="font-mono text-xs font-semibold text-primary">{h.id}</span>{" "}
                  <span className="text-muted-foreground">{h.rol}</span>
                </span>
                <span className="font-medium text-success">
                  {h.estado} · {h.puntos} pts
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Total entregado: {delSprint.reduce((t, h) => t + h.puntos, 0)} puntos de 24 de
            capacidad.
          </p>
        </Panel>
      </div>
    </Layout>
  );
}
