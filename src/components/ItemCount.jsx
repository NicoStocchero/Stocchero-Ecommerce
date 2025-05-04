import { useState } from "react";

function ItemCount({ initial = 1, stock = 10 }) {
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
    </div>
  );
}

export default ItemCount;
