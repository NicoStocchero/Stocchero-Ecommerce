// useCart.jsx - Hook personalizado para acceder al contexto global del carrito de compras

// React y dependencias
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

// Hook principal: obtiene el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext); // Obtiene el contexto actual

  // Validación: si el hook se usa fuera del CartProvider, lanza un error
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }

  return context; // Devuelve todas las funciones y estados del carrito
};
