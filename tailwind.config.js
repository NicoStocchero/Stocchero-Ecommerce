/** @type {import('tailwindcss').Config} */

// Importamos el plugin de animaciones
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/ui/**/*.{js,ts,jsx,tsx}", // Incluimos también los componentes UI de shadcn
  ],
  theme: {
    extend: {
      // Colores personalizados para Renace Padel Club
      colors: {
        primary: {
          DEFAULT: "#F97316", // Naranja principal (branding)
          dark: "#EA580C", // Variante más oscura para hover o acentos fuertes
          light: "#FDBA74", // Variante más clara para backgrounds o detalles
        },
        neutral: {
          DEFAULT: "#0F172A", // Gris oscuro: títulos y textos destacados
          light: "#64748B", // Gris medio: textos secundarios
          lighter: "#E2E8F0", // Gris claro: backgrounds, bordes suaves
        },
        background: "#FFFFFF", // Fondo principal claro
        accent: "#FACC15", // Amarillo: acentos opcionales (resaltados, etiquetas)
      },

      // Tipografías base
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Fuente general para textos
        heading: ["Inter", "sans-serif"], // Fuente para títulos (puede diferenciarse si se desea)
      },

      // Escala de tamaños de fuente para control total del diseño
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },

      // Radio de bordes para darle un look más soft y moderno (Nike/ML style)
      borderRadius: {
        DEFAULT: "0.75rem", // Usado por defecto (botones, tarjetas, etc.)
      },

      // Sombra básica para cards (limpia y sutil, no tan cargada)
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.06)",
      },

      // Espaciado base para containers y layouts
      spacing: {
        container: "1.5rem", // Útil para usar como padding horizontal base
      },

      animation: {
        shimmer: "shimmer 2s linear infinite", // Animación de shimmer para loaders y skeletons
      },

      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
    },
  },

  // 🧩 Plugins adicionales para mejorar la experiencia visual
  plugins: [typography, animate],
};
