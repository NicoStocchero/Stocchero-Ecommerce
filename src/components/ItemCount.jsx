import { useState } from "react";

function ItemCount() {
  const [contador, setContador] = useState(0);
  const color = "red";

  function sumar() {
    setContador(contador + 1);
  }

  function restar() {
    setContador(contador - 1);
  }

  return (
    <>
      <button onClick={restar}>-</button>
      <h1 style={{ color: color }}>{contador}</h1>
      <button onClick={sumar}>+</button>
    </>
  );
}

export default ItemCount;
