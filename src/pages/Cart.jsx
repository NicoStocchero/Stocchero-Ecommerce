import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, addItem, removeItem, clear, getItemTotal, totalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return <h2 className="seccion-titulo">El carrito está vacío</h2>;
  }

  return (
    <div className="contenedor">
      <h2 className="seccion-titulo">Carrito de Compras</h2>

      <div className="cart-items">
        {cart.map((cartProduct) => (
          <div key={cartProduct.product.id} className="cart-item">
            <div className="cart-item-info">
              <img
                src={cartProduct.product.imagen}
                alt={cartProduct.product.title}
                className="cart-item-img"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{cartProduct.product.title}</h3>
                <p className="cart-item-qty">
                  Cantidad: {cartProduct.quantity}
                </p>
                <p className="cart-item-price">
                  Subtotal: {getItemTotal(cartProduct)}
                </p>
              </div>
            </div>

            <div className="cart-actions">
              <button
                className="filtro-btn"
                onClick={() => removeItem(cartProduct.product.id)}
              >
                Quitar
              </button>
              <button
                className="filtro-btn"
                onClick={() => addItem(cartProduct.product, 1)}
              >
                +
              </button>
              <button>
                <Link to="/checkout" className="btn-finalizar-compra">
                  Finalizar compra
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p className="cart-total">Total: {totalPrice()}</p>
        <button className="btn-agregar" onClick={clear}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};
