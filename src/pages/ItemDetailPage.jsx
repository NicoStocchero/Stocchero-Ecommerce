// ItemDetailPage.jsx - Página de detalle del producto: muestra la información completa de un producto seleccionado

// React y librerías externas
import { useParams } from "react-router-dom";

// Componentes
import ItemDetail from "@/components/features/products/ItemDetail";

// Hook personalizado
import { useProductById } from "@/hooks/useProductById";
import SkeletonItemDetail from "@/components/ui/SkeletonItemDetail";

const ItemDetailPage = () => {
  // Obtenemos el ID del producto desde la URL (parámetro dinámico)
  const { itemId } = useParams();

  // Hook para cargar el producto
  const { product, loading, error } = useProductById(itemId);

  // Render condicional: error al cargar producto
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Error al cargar el producto
        </h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  // Render condicional: loader mientras se carga el producto
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <SkeletonItemDetail />
      </div>
    );
  }

  // Render principal: detalle del producto
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailPage;
