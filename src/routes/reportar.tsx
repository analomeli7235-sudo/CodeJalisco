import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout, PageHeader, Panel } from "@/components/Layout";
import { categorias } from "@/data/sprint1";
import { generarFolio, validarReporte, type ErroresReporte } from "@/lib/folio";

export const Route = createFileRoute("/reportar")({
  head: () => ({
    meta: [
      { title: "Prototipo de reporte — CodeJalisco" },
      {
        name: "description",
        content:
          "Prototipo del formulario de reporte ciudadano de CodeJalisco: categoría, descripción, ubicación y generación de folio de demostración.",
      },
      { property: "og:title", content: "Prototipo de reporte — CodeJalisco" },
      {
        property: "og:description",
        content: "Borrador navegable del flujo de reporte con validaciones y folio.",
      },
    ],
  }),
  component: ReportarPage,
});

function ReportarPage() {
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [errores, setErrores] = useState<ErroresReporte>({});
  const [folio, setFolio] = useState<string | null>(null);

  function enviar(evento: FormEvent) {
    evento.preventDefault();
    const encontrados = validarReporte({ categoria, descripcion, ubicacion });
    setErrores(encontrados);
    if (Object.keys(encontrados).length > 0) {
      setFolio(null);
      return;
    }
    setFolio(generarFolio());
  }

  function limpiar() {
    setCategoria("");
    setDescripcion("");
    setUbicacion("");
    setErrores({});
    setFolio(null);
  }

  return (
    <Layout>
      <PageHeader
        eyebrow="Historia HU-04"
        title="Prototipo del reporte ciudadano"
        description="Borrador navegable del flujo principal de la plataforma. Sirve para validar con usuarios que el formulario se entiende y que la información solicitada es suficiente. La fotografía, el mapa y el guardado del reporte se incorporan en los Sprints 4 y 5."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Panel title="Nuevo reporte">
          <form onSubmit={enviar} className="space-y-5" noValidate>
            <div>
              <label htmlFor="categoria" className="mb-1.5 block text-sm font-medium">
                Tipo de problema
              </label>
              <select
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-ring"
              >
                <option value="">Selecciona una opción</option>
                {categorias.map((c) => (
                  <option key={c.nombre} value={c.nombre}>
                    {c.icono} {c.nombre}
                  </option>
                ))}
              </select>
              {errores.categoria ? <Error texto={errores.categoria} /> : null}
            </div>

            <div>
              <label htmlFor="descripcion" className="mb-1.5 block text-sm font-medium">
                Descripción del problema
              </label>
              <textarea
                id="descripcion"
                rows={4}
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Ejemplo: bache profundo a mitad del carril que ya provocó ponchaduras."
                className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-ring"
              />
              {errores.descripcion ? <Error texto={errores.descripcion} /> : null}
            </div>

            <div>
              <label htmlFor="ubicacion" className="mb-1.5 block text-sm font-medium">
                Ubicación o referencia
              </label>
              <input
                id="ubicacion"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
                placeholder="Calle, número y colonia"
                className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-ring"
              />
              {errores.ubicacion ? <Error texto={errores.ubicacion} /> : null}
            </div>

            <div className="rounded-lg border border-dashed border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
              📷 Fotografía del problema — disponible en el Sprint 4.
              <br />
              🗺️ Selección en mapa — disponible en el Sprint 5.
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar reporte
              </button>
              <button
                type="button"
                onClick={limpiar}
                className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
              >
                Limpiar
              </button>
            </div>
          </form>
        </Panel>

        <div className="space-y-6">
          {folio ? (
            <section className="card-panel border-success/40 bg-success/5 p-6">
              <h2 className="text-lg font-semibold text-success">Reporte registrado</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Guarda este folio para consultar después el estado de tu reporte.
              </p>
              <p className="mt-4 font-mono text-2xl font-semibold tracking-wide">{folio}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Estado inicial: <strong className="text-foreground">Recibido</strong>
              </p>
            </section>
          ) : (
            <Panel title="Folio">
              <p className="text-sm text-muted-foreground">
                Al enviar un reporte válido se genera un folio con el formato{" "}
                <span className="font-mono">CJ-AAAA-NNNN</span>, donde AAAA es el año y NNNN el
                consecutivo del reporte.
              </p>
            </Panel>
          )}

          <Panel title="Estados del reporte">
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li>1. Recibido — el reporte llegó a la plataforma.</li>
              <li>2. En revisión — se canaliza a la dependencia.</li>
              <li>3. En atención — la dependencia trabaja en él.</li>
              <li>4. Atendido — el problema fue resuelto.</li>
            </ol>
          </Panel>
        </div>
      </div>
    </Layout>
  );
}

function Error({ texto }: { texto: string }) {
  return <p className="mt-1.5 text-sm text-destructive">{texto}</p>;
}
