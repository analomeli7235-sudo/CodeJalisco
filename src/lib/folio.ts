// Regla de generación del folio definida en el Sprint 1 (HU-03).
// Formato: CJ-AAAA-NNNN  ->  CJ-2026-0184
export function generarFolio(fecha: Date = new Date()): string {
  const anio = fecha.getFullYear();
  const consecutivo = Math.floor(Math.random() * 9999) + 1;
  return `CJ-${anio}-${String(consecutivo).padStart(4, "0")}`;
}

export interface BorradorReporte {
  categoria: string;
  descripcion: string;
  ubicacion: string;
}

export interface ErroresReporte {
  categoria?: string;
  descripcion?: string;
  ubicacion?: string;
}

export function validarReporte(datos: BorradorReporte): ErroresReporte {
  const errores: ErroresReporte = {};
  if (!datos.categoria) errores.categoria = "Selecciona una categoría.";
  if (datos.descripcion.trim().length < 15)
    errores.descripcion = "Describe el problema con al menos 15 caracteres.";
  if (datos.ubicacion.trim().length < 5)
    errores.ubicacion = "Indica calle, colonia o una referencia cercana.";
  return errores;
}
