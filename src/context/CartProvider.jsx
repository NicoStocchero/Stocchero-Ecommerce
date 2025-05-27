import { useState } from "react";
import { CartContext } from "./CartContext";

// CartContext: Provee el estado global del carrito de compras y las funciones para gestionarlo
// Expuesto a través del Context API de React para ser usado en toda la aplicación

export const CartProvider = ({ children }) => {
  // Estado del carrito: array de objetos con { product, quantity }
  const [cart, setCart] = useState([]);

  // addItem: agrega un producto al carrito o actualiza la cantidad si ya existe
  const addItem = (item, quantity) => {
    if (typeof item.precio !== "number" || isNaN(item.precio)) {
      return [];
    }

    if (!quantity || quantity < 1) {
      // Evita agregar cantidades inválidas
      return;
    }
    if (isInCart(item.id)) {
      // Si el producto ya está en el carrito, suma la nueva cantidad
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.product.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      // Si el producto no está, lo agrega como nuevo
      setCart((prevCart) => [...prevCart, { product: item, quantity }]);
    }
  };

  // removeItem: elimina un producto del carrito por su id
  const removeItem = (itemId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== itemId)
    );
  };

  // clear: vacía todo el carrito
  const clear = () => {
    setCart([]);
  };

  // isInCart: verifica si un producto está en el carrito por su id
  const isInCart = (itemId) => {
    return cart.some((item) => item.product.id === itemId);
  };

  // formatearImporte: formatea un número a moneda ARS para mostrar precios (ahora lo exponemos en el context)
  const formatearImporte = (numero) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    }).format(numero);
  };

  // totalPriceValue: calcula el total del carrito en número crudo (sin formatear)
  const totalPriceValue = () => {
    return cart.reduce(
      (total, item) => total + item.product.precio * item.quantity,
      0
    );
  };

  // totalPrice: devuelve el total del carrito, formateado como ARS
  const totalPrice = () => formatearImporte(totalPriceValue());

  // totalProducts: devuelve la cantidad total de unidades en el carrito
  const totalProducts = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // getItemTotal: calcula el total por cada producto (precio * cantidad) y lo devuelve formateado
  const getItemTotal = (cartProduct) => {
    const subtotal = cartProduct.product.precio * cartProduct.quantity;
    return formatearImporte(subtotal);
  };

  // Exponemos todas las funciones útiles para el carrito
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalPrice, // Total del carrito formateado
        totalProducts, // Cantidad total de productos
        formatearImporte, // Formateo de precios
        getItemTotal, // Total por producto (precio * cantidad, formateado)
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
