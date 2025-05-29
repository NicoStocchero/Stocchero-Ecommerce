// ItemCount.jsx - Contador de unidades para agregar al carrito

import { useState, useEffect } from "react";
import { useCart } from "@/hooks/useCart";

const ItemCount = ({ initial = 1, stock, product }) => {
  const { addItem } = useCart();
  const [count, setCount] = useState(initial);

  // Resetear count si el stock cambia
  useEffect(() => {
    if (count > stock) {
      setCount(stock > 0 ? stock : initial);
    }
  }, [stock, count, initial]);

  // Sumar cantidad
  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  // Restar cantidad
  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  // Agregar al carrito
  const handleAddToCart = () => {
    if (count <= stock && stock > 0) {
      addItem(product, count);
      setCount(initial);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Controles + / - */}
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={restar}
          disabled={count === 1}
          aria-label="Disminuir cantidad"
        >
          -
        </Button>
        <span
          className="text-lg font-semibold"
          aria-live="polite"
          aria-atomic="true"
        >
          {count}
        </span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={sumar}
          disabled={count >= stock}
          aria-label="Incrementar cantidad"
        >
          +
        </Button>
      </div>

      {/* Botón agregar al carrito */}
      <Button
        type="button"
        onClick={handleAddToCart}
        disabled={stock === 0}
        className="w-full"
        aria-disabled={stock === 0}
      >
        🛒 Agregar al Carrito
      </Button>

      {/* Mensaje sin stock */}
      {stock === 0 && (
        <p
          className="text-sm text-red-500 mt-2"
          role="alert"
          aria-live="assertive"
        >
          Sin stock disponible
        </p>
      )}
    </div>
  );
};

export default ItemCount;
