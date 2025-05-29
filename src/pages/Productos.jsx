// productos.jsx - Página que muestra la lista de productos filtrados por categoría

// React y librerías externas
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Utils
import { getProducts } from "@/utils/getProducts";

// Data
import { categories } from "@/data/categories";

// Componentes
import ItemList from "@/components/features/products/ItemList";
import CategoryFilters from "@/components/ui/CategoryFilters";

const Productos = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((productsFromPromise) => {
        setProducts(productsFromPromise);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message || "Error al cargar productos");
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 py-10">{error}</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-semibold text-center text-gray-900 mb-8">
        Productos
      </h1>

      {/* Filtros de categorías modularizados */}
      <CategoryFilters categories={categories} />

      <ItemList products={products} />
    </section>
  );
};

export default Productos;
