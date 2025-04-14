import productos from "../data/productos";
import ProductCard from "./ProductCard";

function ItemListContainer({ greeting }) {
  return (
    <section className="seccion-productos">
      <div className="contenedor">
        <h2 className="seccion-titulo">{greeting}</h2>
        <p className="seccion-subtitulo">
          Equipate con la mejor calidad en paletas, ropa y calzado de pádel.
        </p>

        <div className="productos-grid">
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              marca={producto.marca}
              nombre={producto.nombre}
              precio={producto.precio}
              precioAnterior={producto.precioAnterior}
              cuotas={producto.cuotas}
              descuento={producto.descuento}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ItemListContainer;
