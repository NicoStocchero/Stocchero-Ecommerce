function ProductCard({
  marca,
  nombre,
  precio,
  precioAnterior,
  cuotas,
  imagen,
  descuento,
}) {
  return (
    <div className="product-card">
      <img src={imagen} alt={nombre} className="product-img" />

      <div className="product-info">
        <span className="marca">{marca}</span>
        <p className="nombre">{nombre}</p>

        {precioAnterior && (
          <p className="precio-anterior">${precioAnterior.toLocaleString()}</p>
        )}

        <div className="precio-actual">
          <span className="precio">${precio.toLocaleString()}</span>
          {descuento && <span className="descuento">{descuento}% OFF</span>}
        </div>

        {cuotas && <p className="cuotas">{cuotas}</p>}
      </div>
    </div>
  );
}

export default ProductCard;
