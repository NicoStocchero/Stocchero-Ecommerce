// Item.jsx - Tarjeta de producto individual

import { memo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

// Aplica memo al componente para evitar re-renders innecesarios
const Item = memo(({ product }) => {
  const { id, marca, title, precio, precioAnterior, imagen, descuento, stock } =
    product;
  const { getStockAvailable } = useCart();

  const stockAvailable = getStockAvailable(id, stock);

  return (
    <Link
      to={`/item/${id}`}
      aria-label={`Ver detalles del producto ${title}`}
      className={`bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col ${
        stockAvailable === 0 ? "opacity-30" : ""
      }`}
    >
      {/* Imagen */}
      <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg">
        <img
          loading="lazy"
          decoding="async"
          src={imagen}
          alt={title}
          width={300}
          height={225} // 4:3 aspect ratio
          role="img"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info producto */}
      <div className="p-3 flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase text-gray-500">
          {marca}
        </span>
        <p className="text-sm font-semibold text-gray-800 line-clamp-2">
          {title}
        </p>
        {precioAnterior && (
          <p className="text-xs text-gray-400 line-through">
            ${precioAnterior.toLocaleString()}
          </p>
        )}
        <div className="flex items-center gap-1">
          <span
            className="text-base font-bold text-gray-900"
            aria-label={`Precio ${precio.toLocaleString()} pesos`}
          >
            ${precio.toLocaleString()}
          </span>
          {descuento && (
            <span className="text-xs font-semibold text-green-600">
              {descuento}% OFF
            </span>
          )}
        </div>
        {stockAvailable > 0 ? (
          <p className="text-xs font-semibold text-green-600">Envío gratis</p>
        ) : (
          <p
            className="text-xs text-red-600 font-semibold"
            role="alert"
            aria-live="assertive"
          >
            Sin stock
          </p>
        )}
      </div>
    </Link>
  );
});

export default Item;
