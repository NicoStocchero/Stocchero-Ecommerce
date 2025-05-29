// usePageVisibility.jsx - Hook personalizado: detecta si la pestaña del navegador está visible o no

// React
import { useEffect, useState } from "react";

// Hook: devuelve true si la pestaña está visible, false si está en segundo plano
export const usePageVisibility = () => {
  const [isVisible, setIsVisible] = useState(true); // Estado: visibilidad actual de la pestaña

  useEffect(() => {
    // Manejador del evento "visibilitychange"
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === "visible");
    };

    // Agregar listener al cargar el componente
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup: quitar listener al desmontar
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []); // Solo al montar/desmontar

  // Devolvemos la visibilidad actual: true o false
  return isVisible;
};
