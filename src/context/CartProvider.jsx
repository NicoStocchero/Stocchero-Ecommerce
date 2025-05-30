import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

import { toast } from "react-toastify";

// CartContext: Provee el estado global del carrito de compras y las funciones para gestionarlo
// Expuesto a través del Context API de React para ser usado en toda la aplicación

export const CartProvider = ({ children }) => {
  // Estado del carrito: array de objetos con { product, quantity }
  const [cart, setCart] = useState(() => {
    try {
      const data = localStorage.getItem("cart");
      return data ? JSON.parse(data) : [];
    } catch {
      // Si ocurre un error (ej: datos corruptos), ignoramos y devolvemos carrito vacío
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // addItem: agrega un producto al carrito o actualiza la cantidad si ya existe
  const addItem = (item, quantity) => {
    if (!quantity || quantity < 1) {
      // Evita agregar cantidades inválidas
      return;
    }

    const avaliable = getStockAvailable(item.id, item.stock);

    if (avaliable < quantity) {
      toast.error(`No hay suficiente stock para ${item.title}`);
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

  // decreaseItemQuantity: disminuye la cantidad de un producto en el carrito sin eliminarlo
  const decreaseItemQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // decreaseItemQuantityDeleting: disminuye la cantidad de un producto en el carrito y elimina si queda 0
  const decreaseItemQuantityDeleting = (itemId) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.product.id === itemId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Eliminar si queda 0
    );
  };

  // removeItem: elimina un producto del carrito por su id
  const removeItem = (itemId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== itemId)
    );
  };

  // clear: vacía todo el carrito
  const clearCart = () => {
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
      minimumFractionDigits: 0,
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

  const getStockAvailable = (productId, stock) => {
    const inCart =
      cart.find((item) => item.product.id === productId)?.quantity ?? 0;
    return stock - inCart;
  };

  // Exponemos todas las funciones útiles para el carrito
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        decreaseItemQuantity,
        decreaseItemQuantityDeleting,
        removeItem,
        clearCart,
        isInCart,
        totalPrice, // Total del carrito formateado
        totalPriceValue, // Total del carrito en número crudo
        totalProducts, // Cantidad total de productos
        formatearImporte, // Formateo de precios
        getItemTotal, // Total por producto (precio * cantidad, formateado)
        getStockAvailable, // Stock disponible para un producto
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
