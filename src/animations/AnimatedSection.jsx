// AnimatedSection.jsx - Sección animada reutilizable (Framer Motion + forwardRef)

// Librerías
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Framer Motion para animaciones
import { forwardRef } from "react"; // Permite pasar el ref hacia dentro

// Variantes de animación
import { fadeInUp } from "./fadeInUp";

const AnimatedSection = forwardRef(
  ({ children, custom = 0, className = "", onScroll = true }, ref) => {
    return (
      <motion.section
        ref={ref} // Forward ref para poder usar inView (por ejemplo)
        initial="hidden" // Estado inicial
        animate={onScroll ? undefined : "visible"} // Si onScroll es false, arranca visible
        whileInView={onScroll ? "visible" : undefined} // Si onScroll es true, activa al entrar en viewport
        viewport={onScroll ? { once: true, amount: 0.2 } : undefined} // Configura cuándo se dispara
        variants={fadeInUp} // Variantes (importadas)
        custom={custom} // Delay o índice de animación
        className={className} // Clases extra
      >
        {children}
      </motion.section>
    );
  }
);

export default AnimatedSection;
