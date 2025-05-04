import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  if (!product) return null;

  const {
    imagen,
    title,
    descripcion,
    precio,
    precioAnterior,
    descuento,
    cuotas,
    marca,
  } = product;

  return (
    <section className="item-detail-container">
      <div className="item-detail">
        <img src={imagen} alt={title} className="item-detail-img" />

        <div className="item-detail-info">
          <span className="badge-marca">{marca}</span>

          <h2 className="item-detail-title">{title}</h2>
          <p className="item-detail-desc">{descripcion}</p>

          <div className="precios">
            {precioAnterior && (
              <p className="precio-anterior">
                ${precioAnterior.toLocaleString()}
              </p>
            )}
            <h3 className="precio-actual">
              ${precio.toLocaleString()}
              {descuento && <span className="descuento">{descuento}% OFF</span>}
            </h3>
            {cuotas && <p className="cuotas">{cuotas}</p>}
          </div>

          <ItemCount />

          <button className="btn-agregar" disabled>
            Agregar al carrito (no funcional)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
