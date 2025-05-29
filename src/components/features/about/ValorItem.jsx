// ValorItem.jsx - Item individual de la sección Valores

// Animación
import AnimatedSection from "@/animations/AnimatedSection";

const ValorItem = ({ icon, text, custom }) => (
  <AnimatedSection
    key={custom} // Clave única (custom = índice de animación)
    custom={custom} // Delay o velocidad de animación
    as="li" // Se renderiza como <li>
    className="flex items-start gap-3 text-neutral-700 leading-relaxed"
  >
    <span className="text-primary text-xl shrink-0">{icon}</span>
    <p>{text}</p>
  </AnimatedSection>
);

export default ValorItem;
