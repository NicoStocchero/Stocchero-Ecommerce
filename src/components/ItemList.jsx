import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="productos-grid">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
