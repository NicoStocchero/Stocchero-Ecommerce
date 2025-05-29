// Cart.jsx - Muestra el contenido actual del carrito de compras y permite modificar cantidades o finalizar la compra

// React y librerías externas
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// Hooks personalizados
import { useCart } from "@/hooks/useCart";

// Componentes
import { Button } from "@/components/ui/button"; // Botón global de la app

export const Cart = () => {
  // Obtenemos el carrito y funciones relacionadas desde el contexto global
  const {
    cart,
    addItem,
    decreaseItemQuantity,
    clearCart,
    getItemTotal,
    totalPrice,
  } = useCart();

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
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Título de la página */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neutral-900">
        Carrito de Compras
      </h2>

      {/* Lista de productos en el carrito */}
      <div className="flex flex-col gap-6">
        {cart.map((cartProduct) => (
          <div
            key={cartProduct.product.id}
            className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md border border-neutral-200 hover:shadow-lg transition-shadow md:flex-row flex-col gap-4"
          >
            {/* Detalle del producto */}
            <div className="flex items-center gap-6 flex-1">
              <img
                src={cartProduct.product.imagen}
                alt={cartProduct.product.title}
                className="w-28 h-28 object-cover rounded-md border border-neutral-200"
              />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {cartProduct.product.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  Subtotal: {getItemTotal(cartProduct)}
                </p>
              </div>
            </div>

            {/* Acciones para modificar la cantidad */}
            <div className="flex items-center gap-4 md:justify-end">
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  decreaseItemQuantity(cartProduct.product.id);
                  if (cartProduct.quantity === 1) {
                    toast.success("Producto eliminado del carrito");
                  }
                }}
              >
                -
              </Button>
              <p className="text-lg font-semibold text-neutral-900">
                x{cartProduct.quantity}
              </p>
              <Button
                size="icon"
                variant="outline"
                onClick={() => addItem(cartProduct.product, 1)}
              >
                +
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Total y acciones finales */}
      <div className="mt-12 flex flex-col gap-4 items-center">
        <p className="text-2xl font-bold text-neutral-900">
          Total: {totalPrice()}
        </p>

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
