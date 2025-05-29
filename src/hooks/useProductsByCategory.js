// useProductsByCategory.jsx - Hook personalizado: carga múltiples categorías de productos

// React y dependencias
import { useState, useEffect } from "react";
import { getProducts } from "@/utils/getProducts";

// Hook: recibe un array de categorías y devuelve un objeto con productos por categoría
export const useProductsByCategory = (categories = []) => {
  // Estado principal: productos organizados por categoría (ej: { paletas: [...], accesorios: [...] })
  const [products, setProducts] = useState({});

  useEffect(() => {
    // Efecto: carga los productos al montar o cambiar el array de categorías
    const fetchProducts = async () => {
      const results = {}; // Objeto para almacenar productos por categoría

      // Cargamos los productos uno a uno por categoría
      for (const category of categories) {
        const data = await getProducts(category);
        results[category] = data;
      }

      // Actualizamos el estado con los productos organizados
      setProducts(results);
    };

    fetchProducts();
  }, [categories]); // Dependencia: se ejecuta cuando cambian las categorías

  // Retornamos los productos organizados por categoría
  return products;
};
