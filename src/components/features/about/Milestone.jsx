// Hito.jsx - Tarjeta de hito con número animado y descripción

// Animación
import AnimatedSection from "@/animations/AnimatedSection";

// Hooks y librerías
import { useInView } from "react-intersection-observer"; // Hook para detectar si el elemento está en viewport
import CountUp from "react-countup"; // Animación de conteo numérico

const Hito = ({ num, suffix, desc, custom }) => {
  // Hook para saber si el hito está visible en pantalla
  const { ref, inView } = useInView({
    triggerOnce: true, // Se activa una sola vez
    threshold: 0.5, // Se activa cuando el 50% del elemento es visible
  });

  return (
    <AnimatedSection
      ref={ref} // Referencia para trigger inView
      custom={custom} // Delay/orden de animación
      className="p-6 border border-neutral-200 rounded-lg text-center shadow-sm bg-white"
    >
      {/* Número animado */}
      <h3 className="text-3xl font-bold text-primary mb-2">
        {inView ? (
          <CountUp end={num} duration={8} suffix={suffix} />
        ) : (
          `0${suffix}`
        )}
      </h3>

      {/* Descripción */}
      <p className="text-neutral-700">{desc}</p>
    </AnimatedSection>
  );
};

export default Hito;
