import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemCount({ initial = 1, stock = 10, product }) {
  const { addItem } = useContext(CartContext); // Importa el contexto del carrito
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <button onClick={restar}>-</button>
      <span>{count}</span>
      <button onClick={sumar}>+</button>
      <button className="btn-carrito" onClick={() => addItem(product, count)}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
