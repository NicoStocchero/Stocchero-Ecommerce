// Nosotros.jsx - Página "Sobre Nosotros": historia, misión, valores, hitos y testimonios

// React y librerías externas
import { Link } from "react-router-dom";

// Componentes internos
import AnimatedSection from "@/animations/AnimatedSection";
import { Button } from "@/components/ui/button";
import Hito from "@/components/features/about/Hito";
import MisionCard from "@/components/features/about/MisionCard";
import ValorItem from "@/components/features/about/ValorItem";
import TestimonioCard from "@/components/features/about/TestimonioCard";

// Datos de contenido (textos e información)
import {
  heroText,
  historiaText,
  misionData,
  valoresData,
  testimoniosData,
  hitosData,
} from "@/data/about";

const Nosotros = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      {/* Hero: título principal y descripción corta */}
      <AnimatedSection
        custom={0}
        onScroll={false}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight tracking-tight">
          {heroText.title}
        </h1>
        <p className="text-neutral-700 text-lg leading-relaxed max-w-2xl mx-auto">
          {heroText.description}
        </p>
      </AnimatedSection>

      {/* Historia: párrafo largo sobre la creación y propósito del club */}
      <AnimatedSection
        onScroll={false}
        custom={1}
        className="mb-12 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          Nuestra Historia
        </h2>
        <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">
          {historiaText}
        </p>
      </AnimatedSection>

      {/* Misión & Visión: tarjetas con iconos y textos cortos */}
      <div className="mb-16 grid gap-6 md:grid-cols-2">
        {misionData.map((item, idx) => (
          <MisionCard key={item.title} {...item} custom={idx + 2} />
        ))}
      </div>

      {/* Valores: lista con íconos y descripciones */}
      <AnimatedSection custom={4} className="mb-16">
        <h2 className="text-2xl font-bold text-neutral-900 mb-8">
          Nuestros Valores
        </h2>
        <ul className="space-y-4">
          {valoresData.map((val, idx) => (
            <ValorItem key={idx} {...val} custom={idx + 6} />
          ))}
        </ul>
      </AnimatedSection>

      {/* Hitos: números destacados sobre logros */}
      <div className="mb-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {hitosData.map((hito, idx) => (
          <Hito key={idx} {...hito} custom={idx + 12} />
        ))}
      </div>

      {/* Testimonios: frases de clientes satisfechos */}
      <AnimatedSection custom={15} className="mb-16">
        <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
          Lo que dicen nuestros jugadores
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimoniosData.map((t, idx) => (
            <TestimonioCard key={idx} {...t} custom={idx + 16} />
          ))}
        </div>
      </AnimatedSection>

      {/* CTA final: llamado a la acción para contacto */}
      <AnimatedSection custom={20} className="text-center">
        <h2 className="text-2xl font-bold text-neutral-900 mb-8">
          ¿Listo para mejorar tu juego?
        </h2>
        <p className="text-neutral-700 text-lg leading-relaxed mb-6">
          Contactanos y descubrí cómo podemos ayudarte a alcanzar tu mejor
          versión en la cancha.
        </p>
        <Link to="/contacto">
          <Button
            size="lg"
            aria-label="Ir a la página de contacto"
            className="hover:scale-105 transition-transform duration-300"
          >
            Contactanos
          </Button>
        </Link>
      </AnimatedSection>
    </section>
  );
};

export default Nosotros;
