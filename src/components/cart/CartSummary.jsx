// CartSummary.jsx - Muestra el resumen de la compra: productos, cantidades, subtotales y total final

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const CartSummary = () => {
  // Accedemos al contexto del carrito para obtener los productos, el total y la función para formatear importes
  const { cart, totalPrice, formatearImporte } = useContext(CartContext);

  // Si el carrito está vacío, no renderizamos el resumen (early return)
  if (cart.length === 0) return null;

  // Render del resumen de compra: lista de productos y total final
  return (
    <div>
      {/* Título de la sección */}
      <h3 className="text-2xl font-bold text-neutral-900 mb-8">
        Resumen de tu compra
      </h3>

      {/* Lista de productos en el carrito */}
      <ul className="divide-y divide-neutral-200">
        {cart.map((item) => (
          <li key={item.product.id} className="flex items-center gap-4 py-3">
            {/* Imagen del producto */}
            <img
              src={item.product.imagen}
              alt={item.product.title}
              className="w-16 h-16 object-cover rounded-md border border-neutral-200"
            />

            {/* Detalles del producto: nombre, cantidad y subtotal */}
            <div className="flex-1">
              <p className="text-base font-semibold text-neutral-900">
                {item.product.title}
              </p>
              <p className="text-sm text-neutral-600">
                x{item.quantity} –{" "}
                {formatearImporte(item.product.precio * item.quantity)}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Total de la compra */}
      <p className="text-2xl font-bold text-neutral-900 mt-6">
        Total: {totalPrice()}
      </p>
    </div>
  );
};

export default CartSummary;
