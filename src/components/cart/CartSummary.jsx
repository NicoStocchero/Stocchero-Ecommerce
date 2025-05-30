// CartSummary.jsx - Muestra el resumen de la compra: productos, cantidades, subtotales y total final
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import CartItemList from "./CartItemList";
import CheckoutItem from "./CheckoutItem";
import CartTotal from "./CartTotal";

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
      <CartTotal totalPrice={totalPrice} />
    </div>
  );
};

export default CartSummary;
