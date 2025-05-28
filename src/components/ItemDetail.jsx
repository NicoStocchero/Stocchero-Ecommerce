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

          {product.stock > 0 ? (
            <ItemCount product={product} />
          ) : (
            <p>Sin stock</p>
          )}

          <p>Stock disponible: {product.stock}</p>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
