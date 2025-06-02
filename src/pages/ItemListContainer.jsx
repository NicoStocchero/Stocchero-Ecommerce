// ItemListContainer.jsx - Lista de productos filtrados por categoría

// React y librerías externas
import { useParams } from "react-router-dom";

// Hooks personalizados
import { useProducts } from "@/hooks/useProducts";

// Utils y componentes
import ItemList from "../components/features/products/ItemList";
import AnimatedSection from "@/animations/AnimatedSection";
import SkeletonList from "@/components/ui/SkeletonList";
import CategoryFilters from "@/components/ui/CategoryFilters";
import { categories } from "@/data/categories";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useProducts(categoryId || "all");

  // Error
  if (error) {
    return (
      <p
        className="text-sm text-red-500 mt-2"
        role="alert"
        aria-live="assertive"
      >
        Error al cargar los productos
      </p>
    );
  }

  // Loader
  if (loading) {
    return (
      <AnimatedSection
        custom={0}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        onScroll={false}
      >
        <SkeletonList />
      </AnimatedSection>
    );
  }

  // Sin productos
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        No hay productos para mostrar en esta categoría.
      </p>
    );
  }

  // Render principal
  return (
    <AnimatedSection
      custom={0}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      onScroll={false}
    >
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">
        Productos
      </h1>

      {/* Filtros de categorías (modularizados) */}
      <CategoryFilters categories={categories} />

      <ItemList products={products} />
    </AnimatedSection>
  );
};

export default ItemListContainer;
