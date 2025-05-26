import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getProductById } from "../utils/getProducts";

const ItemDetailPage = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductById(itemId);
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        setError(error?.message || "Error al cargar el producto");
        setLoading(false);
      }
    };
    fetchData();
  }, [itemId]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailPage;
