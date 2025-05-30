/* eslint-disable */
const CartItemList = ({ cart, ItemComponent }) => (
  <ul className="divide-y divide-neutral-200">
    {cart.map((item) => (
      <ItemComponent key={item.product.id} item={item} />
    ))}
  </ul>
);

export default CartItemList;
