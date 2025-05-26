import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../utils/getProducts";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const productsData = await getProducts(categoryId || "all");
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setError(error?.message || "Error al cargar los productos");
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId]);

  if (error) return <p>Error: {error.message}</p>;

  if (loading) return <span className="loader"></span>;

  return (
    <section className="seccion-productos">
      <div className="contenedor">
        <h1 className="seccion-titulo">{greeting}</h1>
        <ItemList products={products} />
      </div>
    </section>
  );
};

export default ItemListContainer;
