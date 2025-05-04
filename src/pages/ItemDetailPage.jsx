import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../utils/getProducts";
import ItemDetail from "../components/ItemDetail";

const ItemDetailPage = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById(itemId)
      .then((productFromPromise) => {
        setProduct(productFromPromise);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [itemId]);

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailPage;
