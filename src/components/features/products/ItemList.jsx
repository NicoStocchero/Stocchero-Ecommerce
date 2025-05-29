// ItemList.jsx - Lista de productos con grid

import Item from "./Item";

const ItemList = ({ products = [], className = "" }) => {
  // Si no hay productos, muestra mensaje
  if (!products.length) {
    return (
      <p className="text-center text-gray-500 py-8" aria-live="polite">
        No hay productos para mostrar.
      </p>
    );
  }

  // Renderiza el grid de productos
  return (
    <div
      role="list"
      aria-label="Listado de productos"
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ${className}`}
    >
      {products.map((product) => (
        <Item key={product.id} product={product} role="listitem" />
      ))}
    </div>
  );
};

export default ItemList;
