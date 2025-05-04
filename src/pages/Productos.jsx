import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "../utils/getProducts";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: "all", name: "Ver todos" },
    { id: "paletas", name: "Paletas" },
    { id: "indumentaria", name: "Indumentaria" },
    { id: "calzado", name: "Calzado" },
    { id: "accesorios", name: "Accesorios" },
  ];

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((productsFromPromise) => {
        setProducts(productsFromPromise);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [categoryId]);

  if (loading) return <span className="loader"></span>;

  return (
    <section className="seccion-productos">
      <div className="contenedor">
        <h1 className="seccion-titulo">Productos</h1>

        <div className="categoria-filtros">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className={`filtro-btn ${categoryId === cat.id ? "activo" : ""}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <ItemList products={products} />
      </div>
    </section>
  );
}

export default ItemListContainer;
