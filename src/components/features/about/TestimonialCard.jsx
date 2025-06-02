// TestimonioCard.jsx - Tarjeta de testimonio con icono y cita

// Animación
import AnimatedSection from "@/animations/AnimatedSection";

// Iconos
import { FaQuoteLeft } from "react-icons/fa";

const TestimonioCard = ({ quote, author, custom }) => (
  <AnimatedSection
    custom={custom} // Delay/orden de animación
    as="blockquote" // Se renderiza como <blockquote>
    className="relative bg-white p-6 rounded-lg shadow-sm border border-neutral-200"
  >
    {/* Icono de cita */}
    <FaQuoteLeft className="absolute top-4 left-4 text-primary/30 text-2xl" />

    {/* Texto de testimonio */}
    <p className="text-neutral-700 leading-relaxed pl-8">{quote}</p>

    {/* Autor */}
    <cite className="block mt-4 text-sm text-neutral-600 font-medium text-right">
      - {author}
    </cite>
  </AnimatedSection>
);

export default TestimonioCard;
