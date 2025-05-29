// useProducts.js - Hook personalizado: obtiene productos filtrados por categoría desde la base de datos o API

// React y librerías externas
import { useState, useEffect } from "react";

// Función para obtener los productos (puede ser Firestore, API REST, etc.)
import { getProducts } from "@/utils/getProducts";

// Hook principal: recibe la categoría como argumento
export const useProducts = (categoryId) => {
  // Estado para almacenar los productos obtenidos
  const [products, setProducts] = useState([]);

  // Estado para indicar si está cargando
  const [loading, setLoading] = useState(true);

  // Estado para errores en la carga
  const [error, setError] = useState(null);

  // useEffect: se ejecuta cuando cambia la categoría
  useEffect(() => {
    setLoading(true); // Activamos loader

    // Llamamos a la función para obtener productos
    getProducts(categoryId)
      .then(setProducts) // Guardamos los productos en el estado
      .catch((err) => setError(err.message || "Error al cargar productos")) // Guardamos error si ocurre
      .finally(() => setLoading(false)); // Finalizamos carga
  }, [categoryId]); // Dependencia: cuando cambia la categoría

  // Retornamos el estado: productos, loading y error
  return { products, loading, error };
};
