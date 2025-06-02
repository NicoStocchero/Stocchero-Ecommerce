// MisionCard.jsx - Tarjeta de misión/valor con icono, título y texto

// Animación
import AnimatedSection from "@/animations/AnimatedSection";

const MisionCard = ({ icon, title, text, custom }) => (
  <AnimatedSection
    key={title} // Clave única (usa el título)
    custom={custom} // Delay/orden de animación
    onScroll={false} // No activa onScroll
    className="p-6 border border-neutral-200 rounded-lg shadow-sm flex flex-col items-start bg-white"
  >
    {/* Icono */}
    <div className="text-3xl text-primary mb-4">{icon}</div>

    {/* Título */}
    <h3 className="text-lg font-bold text-neutral-900 mb-2">{title}</h3>

    {/* Texto descriptivo */}
    <p className="text-neutral-700 leading-relaxed">{text}</p>
  </AnimatedSection>
);

export default MisionCard;
