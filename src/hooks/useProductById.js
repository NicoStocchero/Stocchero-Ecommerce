// useProductById.js - Hook personalizado: carga un producto individual por su ID desde la base de datos o API

// React y librerías externas
import { useState, useEffect } from "react";

// Función para obtener el producto (puede ser Firestore, API REST, etc.)
import { getProductById } from "@/utils/getProducts";

// Hook principal
export const useProductById = (id) => {
  // Estado para almacenar el producto encontrado
  const [product, setProduct] = useState(null);

  // Estado para indicar si está cargando el producto
  const [loading, setLoading] = useState(true);

  // Estado para manejar errores en la carga
  const [error, setError] = useState(null);

  // useEffect: ejecuta la carga cuando cambia el ID
  useEffect(() => {
    if (!id) return; // Si no hay ID, no hacemos nada

    const fetchProduct = async () => {
      setLoading(true); // Activamos el loader

      try {
        // Llamada a la función que obtiene el producto por ID
        const productData = await getProductById(id);

        // Guardamos el producto en el estado
        setProduct(productData);
        setError(null); // Limpiamos errores previos
      } catch {
        // Si hay un error, lo guardamos
        setError("Error al cargar el producto");
        setProduct(null); // Limpiamos el producto si falla
      } finally {
        setLoading(false); // Terminamos la carga
      }
    };

    fetchProduct(); // Ejecutamos la función
  }, [id]); // Dependencia: cuando cambia el ID

  // Retornamos el producto, el estado de carga y el error
  return { product, loading, error };
};
