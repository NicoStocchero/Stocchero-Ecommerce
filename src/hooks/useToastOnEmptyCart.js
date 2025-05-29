// useToastOnEmptyCart.jsx - Hook personalizado: muestra un toast y redirige si el carrito está vacío

// React y librerías externas
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Hook: verifica si el carrito está vacío, muestra un toast y redirige al catálogo
export const useToastOnEmptyCart = (cart) => {
  const navigate = useNavigate(); // Para redirigir al usuario

  useEffect(() => {
    if (cart.length === 0) {
      // Si el carrito está vacío, mostramos un toast de error
      toast.error(
        "¡Oops! El carrito está vacío. Agregá productos antes de finalizar la compra."
      );

      // Redirigimos automáticamente a la categoría principal
      navigate("/category/all", { replace: true });
    }
  }, [cart, navigate]); // Se ejecuta al montar o cuando cambie el carrito
};
