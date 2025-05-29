// ItemDetail.jsx - Detalle de producto individual

import { useCart } from "@/hooks/useCart";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { getStockAvailable } = useCart();

  // Si no hay producto, no renderiza nada
  if (!product) return null;

  const stockAvailable = getStockAvailable(product.id, product.stock);

  const {
    imagen,
    title,
    descripcion,
    precio,
    precioAnterior,
    descuento,
    marca,
  } = product;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-wrap gap-8 justify-center items-start">
        {/* Imagen producto */}
        <img
          src={imagen}
          alt={title}
          className="w-96 max-w-full rounded-xl shadow-md object-contain bg-white"
          loading="lazy"
        />

        {/* Detalles */}
        <div className="flex flex-col gap-6 max-w-lg w-full">
          <span className="text-xs font-bold uppercase text-gray-500">
            {marca}
          </span>

          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

          <p className="text-base text-gray-600 leading-relaxed">
            {descripcion}
          </p>

          {/* Precios */}
          <div className="flex flex-col gap-2">
            {precioAnterior && (
              <p className="text-sm text-gray-400 line-through">
                ${precioAnterior.toLocaleString()}
              </p>
            )}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-900">
                ${precio.toLocaleString()}
              </span>
              {descuento && (
                <span
                  className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded"
                  aria-label={`${descuento}% de descuento`}
                >
                  {descuento}% OFF
                </span>
              )}
            </div>
            <p className="text-sm font-bold text-green-600">Envío gratis</p>
          </div>

          {/* Stock y cantidad */}
          {stockAvailable > 0 ? (
            <>
              <ItemCount product={product} stock={stockAvailable} />
              <p className="text-sm text-gray-500" aria-live="polite">
                Stock disponible: {stockAvailable}
              </p>
            </>
          ) : (
            <p
              className="text-sm text-red-600 font-semibold"
              role="alert"
              aria-live="assertive"
            >
              Sin stock
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
