import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const {
    id,
    marca,
    title,
    precio,
    precioAnterior,
    cuotas,
    imagen,
    descuento,
  } = product;

  return (
    <Link to={`/item/${id}`} className="product-card-link">
      <div className="product-card">
        <img src={imagen} alt={title} className="product-img" />
        <div className="product-info">
          <div className="top">
            <span className="marca">{marca}</span>
            <p className="title">{title}</p>
            {precioAnterior && (
              <p className="precio-anterior">
                ${precioAnterior.toLocaleString()}
              </p>
            )}
            <div className="precio-actual">
              <span className="precio">${precio.toLocaleString()}</span>
              {descuento && <span className="descuento">{descuento}% OFF</span>}
            </div>
          </div>
          <div className="bottom">
            {cuotas && <p className="cuotas">Mismo precio en {cuotas}</p>}
            <p className="envio">Envío gratis</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
