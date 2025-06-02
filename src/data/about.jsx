// Datos para la página "Sobre Nosotros": textos, iconos y datos de secciones

import {
  FaTrophy,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaStar,
} from "react-icons/fa";

// Hero: título principal y descripción
export const heroText = {
  title: "Sobre Nosotros",
  description: `
    En Renace Padel Club, no somos solo una tienda: somos una comunidad apasionada por el pádel. Nos impulsa un propósito claro: ofrecer productos de alta calidad, asesoramiento experto y una experiencia única que inspire a cada jugador a dar lo mejor de sí dentro y fuera de la cancha.
  `.trim(),
};

// Historia: párrafo largo con el storytelling del club
export const historiaText = `
  Renace Padel Club nació en 2025, cuando un grupo de hermanos, unidos por una pasión inquebrantable por el pádel, decidió transformar un sueño en realidad: crear un espacio único donde los jugadores pudieran sentirse parte de una comunidad.

  Lo que comenzó como una idea, pronto se convirtió en un punto de encuentro para cientos de jugadores, desde principiantes hasta profesionales. En cada producto, en cada clase, en cada conversación, llevamos la esencia de nuestra misión: ayudarte a superar tus límites y disfrutar al máximo del pádel.

  Más que una tienda, somos un equipo que crece junto a vos, celebra tus logros y te impulsa a ir siempre un paso más allá. Esto es Renace Padel Club: pasión, comunidad y compromiso con el deporte que nos une.
`.trim();

// Misión: tarjetas con icono, título y texto
export const missionData = [
  {
    icon: <FaTrophy />,
    title: "Excelencia Deportiva",
    text: "Te ayudamos a romper tus límites: productos de calidad premium, asesoramiento experto y una comunidad que te impulsa a ser mejor cada día.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovación",
    text: "Siempre un paso adelante: las últimas tecnologías, materiales y tendencias del pádel, para que estés a la vanguardia dentro y fuera de la cancha.",
  },
  {
    icon: <FaHandshake />,
    title: "Compromiso",
    text: "Estamos para vos: atención personalizada, cercanía y pasión por el pádel. Más que una tienda, una comunidad que crece con vos.",
  },
  {
    icon: <FaUsers />,
    title: "Comunidad",
    text: "Creemos en el poder de la unión: eventos, clínicas y experiencias únicas para que vivas el pádel como nunca antes.",
  },
];

// Valores: lista de principios del club con íconos y textos destacados
export const valuesData = [
  {
    icon: <FaHandshake />,
    text: (
      <>
        <span className="font-semibold text-neutral-900">
          Comprometidos con la comunidad:
        </span>{" "}
        creamos conexiones, apoyamos el crecimiento y fomentamos el espíritu del
        pádel.
      </>
    ),
  },
  {
    icon: <FaUsers />,
    text: (
      <>
        <span className="font-semibold text-neutral-900">
          Atención personalizada:
        </span>{" "}
        cada jugador es único, por eso te escuchamos, te aconsejamos y te
        acompañamos.
      </>
    ),
  },
  {
    icon: <FaTrophy />,
    text: (
      <>
        <span className="font-semibold text-neutral-900">
          Pasión por el deporte:
        </span>{" "}
        amamos el pádel y transmitimos esa energía en cada interacción.
      </>
    ),
  },
  {
    icon: <FaLightbulb />,
    text: (
      <>
        <span className="font-semibold text-neutral-900">
          Innovación constante:
        </span>{" "}
        buscamos lo último en tecnología, materiales y tendencias para
        mantenerte un paso adelante.
      </>
    ),
  },
  {
    icon: <FaStar />,
    text: (
      <>
        <span className="font-semibold text-neutral-900">
          Excelencia en cada detalle:
        </span>{" "}
        cuidamos cada aspecto de tu experiencia porque cada detalle cuenta.
      </>
    ),
  },
];

// Testimonios: frases de clientes + autor
export const testimonialsData = [
  {
    quote:
      "Gracias a Renace Padel Club, mejoré mi técnica, encontré el equipamiento ideal y volví a disfrutar del pádel como nunca. La atención es increíble y siempre me ayudan a elegir lo mejor para mi nivel.",
    author: "Julio Pérez",
  },
  {
    quote:
      "Productos de calidad premium, entregas rápidas y un equipo que realmente entiende lo que los jugadores de pádel necesitamos. Desde que los descubrí, no compro en otro lugar.",
    author: "Valeria Gómez",
  },
  {
    quote:
      "Empecé como principiante y gracias a sus recomendaciones y clínicas, logré progresar mucho más rápido. ¡El ambiente en la tienda es único, te sentís parte de una comunidad!",
    author: "Melisa Fernández",
  },
  {
    quote:
      "Son mi tienda de confianza para todo lo relacionado al pádel. Siempre tienen los últimos lanzamientos y te ayudan a elegir con honestidad, sin venderte por vender. ¡Se nota que aman este deporte!",
    author: "Nicolás Rodríguez",
  },
];

// Hitos: números clave + descripción
export const milestonesData = [
  { num: 500, suffix: "+", desc: "Jugadores que confían en nosotros" },
  { num: 5, suffix: " años", desc: "Impulsando el pádel en la comunidad" },
  { num: 20, suffix: "+", desc: "Torneos realizados" },
];
