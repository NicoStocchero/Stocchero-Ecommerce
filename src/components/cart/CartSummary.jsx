// CartSummary.jsx - Muestra el resumen de la compra: productos, cantidades, subtotales y total final

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import CartItemList from "./CartItemList";
import CheckoutItem from "./CheckoutItem";

const CartSummary = () => {
  // Accedemos al contexto del carrito para obtener los productos, el total y la función para formatear importes
  const { cart, totalPrice } = useContext(CartContext);

  // Si el carrito está vacío, no renderizamos el resumen (early return)
  if (cart.length === 0) return null;

  // Render del resumen de compra: lista de productos y total final
  return (
    <div>
      {/* Título de la sección */}
      <h3 className="text-2xl font-bold text-neutral-900 justify-self-center-safe mb-8">
        Resumen de tu compra
      </h3>

      {/* Lista de productos en el carrito */}
      <CartItemList cart={cart} ItemComponent={CheckoutItem} />

      {/* Total de la compra */}
      <div className="border-t pt-6 mt-6 space-y-2">
        <div className="flex justify-between items-center text-sm">
          <p className="text-neutral-600">Subtotal</p>
          {/* <p className="text-neutral-900 font-medium">{}</p> */}
        </div>
        <div className="flex justify-between items-center text-sm">
          <p className="text-neutral-600">Gastos de envío</p>
          {/* <p className="text-neutral-900 font-medium">{}</p> */}
        </div>
        <div className="flex justify-between items-center text-sm">
          <p className="text-neutral-600">Impuestos nacionales</p>
          {/* <p className="text-neutral-900 font-medium">{}</p> */}
        </div>
        <div className="flex justify-between items-center text-lg font-bold border-t pt-4 mt-4">
          <p className="text-neutral-900">Total</p>
          <p className="text-neutral-900">{totalPrice()}</p>
        </div>
        <Link
          to="/cart"
          className="text-xs font-bold text-gray-600 hover:text-black cursor-pointer mt-8 block text-center"
        >
          Volver a carrito
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
