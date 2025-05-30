// Cart.jsx - Muestra el contenido actual del carrito de compras y permite modificar cantidades o finalizar la compra

// React y librerías externas
import { Link } from "react-router-dom";

// Hooks personalizados
import { useCart } from "@/hooks/useCart";

// Componentes
import { Button } from "@/components/ui/button"; // Botón global de la app
import CartItem from "@/components/cart/CartItem";
import CartItemList from "@/components/cart/CartItemList"; // Lista de productos en el carrito
import CartTotal from "@/components/cart/CartTotal"; // Resumen de la compra

export const Cart = () => {
  // Obtenemos el carrito y funciones relacionadas desde el contexto global
  const { cart, clearCart, totalPrice } = useCart();

  // Si el carrito está vacío, mostramos un mensaje y un botón para ver productos
  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
          Tu carrito está vacío
        </h2>
        <p className="text-lg text-neutral-600 mb-6">
          Agregá productos para comenzar tu compra.
        </p>
        <Link to="/category/all">
          <Button size="lg" className="mt-4">
            Ver productos
          </Button>
        </Link>
      </div>
    );
  }

  // Render principal del carrito: productos, acciones y resumen final
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Título de la página */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neutral-900">
        Carrito de Compras
      </h2>

      {/* Lista de productos en el carrito */}
      <CartItemList cart={cart} ItemComponent={CartItem} />

      {/* Total y acciones finales */}
      <CartTotal totalPrice={totalPrice} showButton={false} />

      <div className="mt-12 flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Button variant="outline" onClick={clearCart} className="w-full">
            Vaciar Carrito
          </Button>

          <Link to="/checkout" className="w-full">
            <Button size="lg" className="w-full">
              Finalizar compra
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
