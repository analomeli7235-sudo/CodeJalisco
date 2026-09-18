// Datos centrales del proyecto CodeJalisco (Sprint 1).
// Se mantienen en un solo archivo para que la documentación mostrada
// en la plataforma y el contenido del repositorio sean consistentes.

export type Prioridad = "Alta" | "Media" | "Baja";
export type EstadoHistoria = "Completada" | "En progreso" | "Pendiente";

export interface HistoriaUsuario {
  id: string;
  rol: string;
  historia: string;
  criterios: string[];
  prioridad: Prioridad;
  puntos: number;
  sprint: number;
  estado: EstadoHistoria;
}

export const proyecto = {
  nombre: "CodeJalisco",
  lema: "Plataforma ciudadana para el reporte de problemas urbanos",
  curso: "Uso de Big Data para la Toma de Decisiones",
  carrera: "Desarrollo de Sistemas Web",
  autora: "Ana Karen Lomelí Lozano",
  descripcion:
    "Plataforma que permite a la ciudadanía reportar problemas urbanos (baches, alumbrado, árboles caídos, basura y fugas de agua) con fotografía y ubicación, y consultar el estado del reporte mediante un folio.",
};

export const productBacklog: HistoriaUsuario[] = [
  {
    id: "HU-01",
    rol: "Ciudadano",
    historia:
      "Quiero conocer el propósito de la plataforma y las categorías de problemas que puedo reportar, para saber si es el canal correcto.",
    criterios: [
      "Se muestran las cinco categorías definidas.",
      "Se explica en lenguaje sencillo qué hace la plataforma.",
    ],
    prioridad: "Alta",
    puntos: 3,
    sprint: 1,
    estado: "Completada",
  },
  {
    id: "HU-02",
    rol: "Equipo de desarrollo",
    historia:
      "Quiero contar con el Product Backlog documentado y priorizado, para planear los sprints siguientes con claridad.",
    criterios: [
      "Cada historia tiene rol, necesidad, criterios de aceptación y prioridad.",
      "Las historias están asignadas a un sprint tentativo.",
    ],
    prioridad: "Alta",
    puntos: 5,
    sprint: 1,
    estado: "Completada",
  },
  {
    id: "HU-03",
    rol: "Equipo de desarrollo",
    historia:
      "Quiero definir el modelo de datos del reporte y el formato del folio, para que los sprints de desarrollo partan de una base estable.",
    criterios: [
      "Se listan los campos del reporte y sus tipos.",
      "Se define la regla de generación del folio.",
    ],
    prioridad: "Alta",
    puntos: 5,
    sprint: 1,
    estado: "Completada",
  },
  {
    id: "HU-04",
    rol: "Ciudadano",
    historia:
      "Quiero probar un borrador del formulario de reporte y obtener un folio de demostración, para validar que el flujo es comprensible.",
    criterios: [
      "El formulario valida categoría, descripción y ubicación.",
      "Al enviar se genera un folio con formato definido.",
    ],
    prioridad: "Media",
    puntos: 8,
    sprint: 1,
    estado: "Completada",
  },
  {
    id: "HU-05",
    rol: "Ciudadano",
    historia:
      "Quiero registrarme e iniciar sesión, para dar seguimiento a todos mis reportes desde un perfil.",
    criterios: ["Registro con correo y contraseña.", "Recuperación de contraseña."],
    prioridad: "Alta",
    puntos: 8,
    sprint: 3,
    estado: "Pendiente",
  },
  {
    id: "HU-06",
    rol: "Ciudadano",
    historia:
      "Quiero adjuntar una fotografía al reporte, para evidenciar el problema reportado.",
    criterios: ["Carga de imagen desde cámara o galería.", "Vista previa antes de enviar."],
    prioridad: "Alta",
    puntos: 8,
    sprint: 4,
    estado: "Pendiente",
  },
  {
    id: "HU-07",
    rol: "Ciudadano",
    historia:
      "Quiero marcar la ubicación exacta en un mapa, para que la dependencia localice el problema.",
    criterios: ["Selección en mapa y ubicación automática.", "Se guardan latitud y longitud."],
    prioridad: "Alta",
    puntos: 13,
    sprint: 5,
    estado: "Pendiente",
  },
  {
    id: "HU-08",
    rol: "Ciudadano",
    historia:
      "Quiero consultar el estado de mi reporte con el folio, para saber si ya fue atendido.",
    criterios: ["Búsqueda por folio.", "Historial de cambios de estado."],
    prioridad: "Alta",
    puntos: 8,
    sprint: 6,
    estado: "Pendiente",
  },
  {
    id: "HU-09",
    rol: "Dependencia responsable",
    historia:
      "Quiero un panel administrativo para revisar y actualizar los reportes asignados a mi dependencia.",
    criterios: ["Filtros por categoría y estado.", "Cambio de estado con comentario."],
    prioridad: "Media",
    puntos: 13,
    sprint: 7,
    estado: "Pendiente",
  },
  {
    id: "HU-10",
    rol: "Autoridad municipal",
    historia:
      "Quiero visualizar indicadores de los reportes recibidos, para tomar decisiones sobre dónde priorizar recursos.",
    criterios: ["Conteo por categoría y colonia.", "Tiempo promedio de atención."],
    prioridad: "Media",
    puntos: 13,
    sprint: 7,
    estado: "Pendiente",
  },
];

export const sprintPlanning = {
  objetivo:
    "Dejar definido el alcance del proyecto CodeJalisco: levantar los requisitos, construir y priorizar el Product Backlog, definir el modelo de datos del reporte y entregar una base de código funcional y publicable que sirva como punto de partida para los sprints de diseño y desarrollo.",
  duracion: "Dos semanas (Semana 1 y 2 de 16)",
  capacidad: "24 puntos de historia estimados",
  comprometido: "21 puntos de historia (HU-01 a HU-04)",
  tareas: [
    {
      tarea: "Levantamiento de requisitos y análisis del problema ciudadano",
      historia: "HU-01",
      resultado: "Documento de contexto, problema y solución propuesta.",
    },
    {
      tarea: "Redacción y priorización de las historias de usuario",
      historia: "HU-02",
      resultado: "Product Backlog con 10 historias priorizadas y estimadas.",
    },
    {
      tarea: "Definición del modelo de datos del reporte y regla del folio",
      historia: "HU-03",
      resultado: "Tabla de campos y formato CJ-AAAA-NNNN.",
    },
    {
      tarea: "Configuración del proyecto, estructura de carpetas y sistema de diseño",
      historia: "HU-02",
      resultado: "Base de código organizada y lista para GitHub.",
    },
    {
      tarea: "Construcción del borrador navegable del formulario de reporte",
      historia: "HU-04",
      resultado: "Formulario validado que genera folio de demostración.",
    },
    {
      tarea: "Elaboración del README y de la documentación del sprint",
      historia: "HU-02",
      resultado: "Documentación de planeación, resultados y retrospectiva.",
    },
  ],
  expectativa:
    "Al cerrar el sprint se esperaba tener el alcance del proyecto acordado, el Product Backlog listo para planear el Sprint 2 y una aplicación ejecutable que mostrara la documentación y un primer prototipo del flujo de reporte.",
};

export const camposReporte = [
  { campo: "folio", tipo: "texto", descripcion: "Identificador público con formato CJ-AAAA-NNNN." },
  { campo: "categoria", tipo: "lista", descripcion: "Una de las cinco categorías definidas." },
  { campo: "descripcion", tipo: "texto largo", descripcion: "Detalle del problema reportado." },
  { campo: "ubicacion", tipo: "texto", descripcion: "Calle, colonia o referencia; en Sprint 5 se añaden coordenadas." },
  { campo: "fotografia", tipo: "archivo", descripcion: "Evidencia visual opcional (Sprint 4)." },
  { campo: "estado", tipo: "lista", descripcion: "Recibido, En revisión, En atención, Atendido." },
  { campo: "fecha", tipo: "fecha", descripcion: "Momento en que se registró el reporte." },
];

export const categorias = [
  { nombre: "Baches", dependencia: "Obras Públicas", icono: "🕳️" },
  { nombre: "Alumbrado público", dependencia: "Servicios Municipales", icono: "💡" },
  { nombre: "Árboles caídos", dependencia: "Parques y Jardines", icono: "🌳" },
  { nombre: "Acumulación de basura", dependencia: "Aseo Público", icono: "🗑️" },
  { nombre: "Fugas de agua", dependencia: "Organismo de Agua", icono: "💧" },
];

export const retrospectiva = {
  funciono: [
    "El alcance del sprint se mantuvo acotado a análisis y planeación, lo que evitó adelantar desarrollo sin requisitos claros.",
    "Escribir las historias con criterios de aceptación facilitó estimar y ordenar el backlog.",
    "Definir el modelo de datos desde el inicio dio una base común para los sprints siguientes.",
    "La estructura de carpetas y la documentación quedaron listas para revisarse en GitHub sin explicaciones adicionales.",
  ],
  dificultades: [
    "Al principio las historias mezclaban varias funciones en una sola; hubo que dividirlas para poder estimarlas.",
    "La estimación en puntos fue imprecisa por falta de referencias previas del equipo.",
    "Se dedicó más tiempo del planeado a la parte visual, restando tiempo a la documentación.",
    "Quedó pendiente confirmar con qué dependencia se relaciona cada categoría en un caso real.",
  ],
  aprendizajes: [
    "Un backlog bien redactado reduce la ambigüedad y acelera el Sprint Planning.",
    "Es preferible comprometer menos puntos y cumplirlos que sobrecargar el sprint.",
    "La documentación conviene escribirse durante el sprint, no al final.",
    "Definir datos y estados desde el análisis evita retrabajo en las etapas de desarrollo.",
  ],
  conclusiones:
    "El Sprint 1 cumplió su objetivo: el proyecto cuenta con requisitos claros, un Product Backlog priorizado, un modelo de datos definido y una base de código funcional y publicable. Se entregaron las cuatro historias comprometidas (21 puntos) y el equipo tiene ahora criterios suficientes para iniciar el diseño de interfaz en el Sprint 2.",
};

export const ajustes = [
  {
    ajuste: "Dividir las historias grandes (mayores a 8 puntos) antes de planear",
    porque: "HU-07 y HU-09 resultaron demasiado amplias para estimarse con confianza.",
    beneficio: "Permite medir el avance diario y detectar retrasos a tiempo.",
    relacion: "Sprints 5 y 7",
  },
  {
    ajuste: "Reservar el último día del sprint exclusivamente para documentación y revisión",
    porque: "La documentación se realizó con prisa al cierre del Sprint 1.",
    beneficio: "Entregables más completos y revisión más ordenada del incremento.",
    relacion: "Todos los sprints",
  },
  {
    ajuste: "Definir un sistema de diseño y componentes reutilizables antes de programar pantallas",
    porque: "Se invirtió tiempo ajustando estilos de forma repetida.",
    beneficio: "Acelera el Sprint 2, dedicado a interfaz, estructura y navegación.",
    relacion: "Sprint 2",
  },
  {
    ajuste: "Validar el catálogo de categorías y dependencias con una fuente oficial",
    porque: "La asignación categoría–dependencia se hizo por supuesto, no verificada.",
    beneficio: "Evita rediseñar el flujo de canalización de reportes más adelante.",
    relacion: "Sprints 4 y 6",
  },
  {
    ajuste: "Ajustar la capacidad del Sprint 2 a 20 puntos y registrar el tiempo real por tarea",
    porque: "La estimación del Sprint 1 no tenía referencias históricas.",
    beneficio: "Mejora progresivamente la precisión de las estimaciones del equipo.",
    relacion: "Sprint 2 en adelante",
  },
];
