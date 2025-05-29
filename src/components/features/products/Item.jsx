// Item.jsx - Tarjeta de producto individual

import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, marca, title, precio, precioAnterior, imagen, descuento } =
    product;

  return (
    <Link
      to={`/item/${id}`}
      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col"
    >
      {/* Imagen */}
      <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg">
        <img src={imagen} alt={title} className="w-full h-full object-cover" />
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
          <span className="text-base font-bold text-gray-900">
            ${precio.toLocaleString()}
          </span>
          {descuento && (
            <span className="text-xs font-semibold text-green-600">
              {descuento}% OFF
            </span>
          )}
        </div>

        <p className="text-xs font-semibold text-green-600">Envío gratis</p>
      </div>
    </Link>
  );
};

export default Item;
