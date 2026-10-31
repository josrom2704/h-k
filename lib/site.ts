/**
 * Datos centrales de House & Keeping.
 * Todo lo marcado con TODO es un placeholder pendiente de rellenar.
 */

export const site = {
  name: "House & Keeping",
  tagline: "Servicios del hogar",
  url: "https://h-k-vert.vercel.app", // TODO: dominio definitivo
  description:
    "Limpieza de hogar, fontanería, electricidad, jardinería y organización del hogar. Presupuesto sin compromiso, precio cerrado y garantía de satisfacción.",

  // TODO: teléfono real (formato visible)
  phoneDisplay: "+34 600 000 000",
  // TODO: teléfono real (formato enlace tel:, sin espacios)
  phoneHref: "+34600000000",
  // TODO: número de WhatsApp con prefijo de país, sin "+" ni espacios
  whatsapp: "34600000000",
  // TODO: email real
  email: "hola@houseandkeeping.com",
  // TODO: ciudad / país
  location: "Tu ciudad, País",
  // TODO: zonas que atendéis
  zones: ["Zona 1", "Zona 2", "Zona 3", "Zona 4", "Zona 5"],
  // TODO: horario
  hours: "Lunes a sábado · 8:00 – 18:00",

  social: {
    instagram: "https://www.instagram.com/keepitspotless_sv",
    tiktok: "https://www.tiktok.com/@keepitspotless_sv",
  },
} as const;

/** Construye un enlace de WhatsApp con mensaje prellenado. */
export function waLink(message = "Hola House & Keeping, quiero pedir un presupuesto."): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phoneHref}`;

/** Imágenes de Unsplash (placeholders). TODO: reemplazar imagen — cambia la URL por tu foto en /public. */
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const images = {
  // TODO: reemplazar imagen (hero: persona limpiando en casa)
  hero: u("1581578731548-c64695cc6952", 1920),
  // TODO: reemplazar imagen (sección "Cómo trabajamos")
  process: u("1628177142898-93e36e4e3a50", 1000),
  // TODO: reemplazar imagen (página de contacto)
  contact: u("1556911220-bff31c812dba", 1200),
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  /** "Desde $XX" o "Presupuesto en sitio" */
  price: string;
  image: string;
  imageAlt: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "limpieza",
    title: "Limpieza de hogar",
    short: "Higiene profunda en cada rincón de tu casa o apartamento.",
    description:
      "Limpieza general o a fondo de casas y apartamentos: cocina, baños, suelos, cristales y esos rincones que siempre se quedan para otro día. Llevamos nuestros propios productos y materiales.",
    price: "Desde $XX", // TODO: precio
    // TODO: reemplazar imagen
    image: u("1527515637462-cff94eecc1ac", 900),
    imageAlt: "Aspiradora limpiando una alfombra en un hogar",
    includes: [
      "Cocina y electrodomésticos por fuera",
      "Baños completos y desinfección",
      "Suelos, polvo y cristales",
      "Productos y materiales incluidos",
    ],
  },
  {
    slug: "fontaneria",
    title: "Fontanería",
    short: "Fugas, grifos y atascos resueltos, sin sorpresas.",
    description:
      "Reparaciones de fontanería del día a día: fugas, grifos que gotean, cisternas, atascos y cambio de sanitarios. Te decimos el precio antes de empezar.",
    price: "Desde $XX", // TODO: precio
    // TODO: reemplazar imagen
    image: u("1585704032915-c3400ca199e7", 900),
    imageAlt: "Grifo de baño recién instalado",
    includes: [
      "Detección y reparación de fugas",
      "Cambio de grifos y cisternas",
      "Desatascos de lavabos y fregaderos",
      "Instalación de sanitarios",
    ],
  },
  {
    slug: "electricidad",
    title: "Electricidad",
    short: "Instalaciones seguras, funcionales y al instante.",
    description:
      "Trabajos eléctricos básicos con seguridad: enchufes, interruptores, lámparas, ventiladores de techo y revisión de cuadros. Todo queda probado antes de irnos.",
    price: "Desde $XX", // TODO: precio
    // TODO: reemplazar imagen
    image: u("1621905251189-08b45d6a269e", 900),
    imageAlt: "Electricista revisando un cuadro eléctrico",
    includes: [
      "Enchufes e interruptores",
      "Lámparas y ventiladores de techo",
      "Revisión de cuadro eléctrico",
      "Diagnóstico de averías",
    ],
  },
  {
    slug: "jardineria",
    title: "Jardinería",
    short: "Tu jardín, siempre vibrante y ordenado.",
    description:
      "Mantenimiento de jardines y zonas verdes: poda, corte de césped, limpieza de hojas, plantación y cuidado de macetas. Visitas puntuales o periódicas.",
    price: "Presupuesto en sitio",
    // TODO: reemplazar imagen
    image: u("1416879595882-3373a0480b5b", 900),
    imageAlt: "Pala de jardín con tierra y plantas",
    includes: [
      "Corte de césped y bordes",
      "Poda de arbustos y setos",
      "Limpieza de hojas y restos",
      "Plantación y abonado",
    ],
  },
  {
    slug: "organizacion",
    title: "Organización del hogar",
    short: "Espacios funcionales, armónicos y sin caos.",
    description:
      "Ordenamos armarios, despensas, trasteros y habitaciones completas con un sistema fácil de mantener. Ideal para mudanzas o para empezar de cero.",
    price: "Presupuesto en sitio",
    // TODO: reemplazar imagen
    image: u("1595428774223-ef52624120d2", 900),
    imageAlt: "Estantería ordenada con cajas y objetos del hogar",
    includes: [
      "Armarios y vestidores",
      "Cocina y despensa",
      "Trasteros y garajes",
      "Sistema de orden fácil de mantener",
    ],
  },
];

export const steps = [
  {
    n: "01",
    title: "Visita y presupuesto",
    text: "Nos cuentas qué necesitas por WhatsApp o vamos a verlo. Te damos un presupuesto claro y sin compromiso.",
  },
  {
    n: "02",
    title: "Precio cerrado",
    text: "El precio que aceptas es el que pagas. Sin extras ni sorpresas al terminar el trabajo.",
  },
  {
    n: "03",
    title: "Productos y materiales a la vista",
    text: "Te enseñamos qué productos y materiales usamos antes de empezar, para que sepas exactamente qué entra en tu casa.",
  },
  {
    n: "04",
    title: "Garantía de satisfacción",
    text: "Si algo no queda como esperabas, volvemos y lo dejamos bien. Sin discusiones.",
  },
];

export const testimonials = [
  {
    text: "El servicio fue puntual y muy profesional. Dejaron mi casa impecable, ¡100% recomendado!",
    author: "Carolina M.",
  },
  {
    text: "Me ayudaron con la fontanería del baño y todo quedó perfecto. El trato fue muy amable.",
    author: "Luis R.",
  },
  {
    text: "Muy buena organización y excelente trabajo en jardinería. Se nota que les importa el detalle.",
    author: "Ana P.",
  },
];

export const faqs = [
  {
    q: "¿El presupuesto tiene algún coste?",
    a: "No. El presupuesto es gratis y sin compromiso. Puedes pedirlo por WhatsApp con unas fotos o solicitar una visita.",
  },
  {
    q: "¿Lleváis vuestros propios productos y herramientas?",
    a: "Sí. Llevamos los productos de limpieza, herramientas y materiales necesarios. Si prefieres que usemos los tuyos, solo dínoslo.",
  },
  {
    q: "¿Cuánto tardáis en responder?",
    a: "Respondemos normalmente en menos de 2 horas en horario laboral. Para urgencias, llámanos directamente.",
  },
  {
    q: "¿El precio puede cambiar al terminar?",
    a: "No. Trabajamos con precio cerrado: lo que aceptas en el presupuesto es lo que pagas.",
  },
  {
    q: "¿Qué pasa si no quedo satisfecho?",
    a: "Volvemos sin coste para corregir lo que no haya quedado bien. Todos nuestros trabajos tienen garantía.",
  },
  {
    q: "¿En qué zonas trabajáis?",
    a: `Atendemos en ${site.zones.join(", ")} y alrededores. Si no ves tu zona, escríbenos y lo vemos.`,
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "senales-limpieza-profunda",
    title: "5 señales de que necesitas una limpieza profunda",
    excerpt:
      "¿Hace cuánto no limpias detrás del refrigerador? Descubre si tu hogar necesita una limpieza intensiva.",
    // TODO: reemplazar imagen
    image: u("1584622650111-993a426fbf0a", 900),
    imageAlt: "Baño limpio y luminoso",
    body: [
      // TODO: contenido completo del artículo
      "1. Hay polvo que vuelve aunque limpies a diario. 2. Las juntas del baño se han oscurecido. 3. La cocina huele aunque esté recogida. 4. Detrás de los muebles hay cosas que prefieres no mirar. 5. Te cuesta encontrar tiempo para hacerlo tú.",
      "Si te identificas con dos o más, una limpieza a fondo devuelve tu casa a cero y hace que el mantenimiento diario sea mucho más fácil.",
    ],
  },
  {
    slug: "errores-mantenimiento-electrico",
    title: "Errores comunes al hacer mantenimiento eléctrico",
    excerpt:
      "Conoce qué evitar para no poner en riesgo tu hogar cuando manejas instalaciones básicas.",
    // TODO: reemplazar imagen
    image: u("1558211583-d26f610c1eb1", 900),
    imageAlt: "Salón luminoso con lámpara y enchufes",
    body: [
      // TODO: contenido completo del artículo
      "No cortar la corriente desde el cuadro, sobrecargar regletas o usar cables de sección incorrecta son los errores que más vemos.",
      "Ante la duda, mejor que lo revise alguien con experiencia: un pequeño fallo eléctrico puede convertirse en un problema serio.",
    ],
  },
];
