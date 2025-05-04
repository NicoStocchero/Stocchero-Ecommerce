import { useEffect, useState } from "react";
import { getProducts } from "../utils/getProducts";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts("all").then((data) => {
      console.log("Productos recibidos:", data); // <--- ¿APARECE EN CONSOLA?
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <span className="loader"></span>;

  return (
    <section className="seccion-productos">
      <div className="contenedor">
        <h1 className="seccion-titulo">{greeting}</h1>
        <ItemList products={products} />
      </div>
    </section>
  );
}

export default ItemListContainer;
