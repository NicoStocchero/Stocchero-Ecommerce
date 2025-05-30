import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useMiniCart } from "@/hooks/useMiniCart";
import CartItemList from "./CartItemList";
import MiniCartItem from "./MiniCartItem";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const MiniCart = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const { isVisible, closeMiniCart } = useMiniCart();

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50">
          {/* Overlay oscuro que cierra al click */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMiniCart}
          ></div>

          {/* Panel deslizante */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-0 right-0 h-full w-[400px] bg-white flex flex-col shadow-xl"
          >
            {/* Header */}
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                Carrito ({cart.length} items)
              </h3>
              <button
                onClick={closeMiniCart}
                className="text-2xl text-gray-500 hover:text-black"
              >
                ×
              </button>
            </div>

            {/* Lista scrollable */}
            <div className="flex-1 overflow-y-auto p-4">
              {cart.length > 0 ? (
                <CartItemList cart={cart} ItemComponent={MiniCartItem} />
              ) : (
                <p className="text-sm text-neutral-600">
                  Tu carrito está vacío.
                </p>
              )}
            </div>

            {/* Total + botones */}
            <div className="border-t p-4">
              <p className="text-lg font-bold mb-2 ">Total: {totalPrice()}</p>
              <Link
                to="/checkout"
                onClick={closeMiniCart}
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-md shadow-md flex items-center justify-center gap-2"
              >
                Finalizar compra
              </Link>
              <div className="flex justify-between mt-2">
                <button
                  onClick={closeMiniCart}
                  className="text-sm text-gray-600 hover:text-black cursor-pointer"
                >
                  {`< Seguir comprando`}
                </button>

                <Link
                  to="/cart"
                  className="text-sm text-gray-600 hover:text-black cursor-pointer"
                  onClick={closeMiniCart}
                >
                  {`Ver carrito >`}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MiniCart;
