import { useCart } from "@/hooks/useCart";

const CheckoutItem = ({ item }) => {
  const { getItemTotal } = useCart();

  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b">
      {/* Imagen */}
      <img
        src={item.product.imagen}
        alt={item.product.title}
        className="w-16 h-16 object-cover rounded-md border"
      />

      {/* Info + botones */}
      <div className="flex-1 flex flex-col justify-between space-y-2">
        <p className="text-sm font-medium">{item.product.title}</p>
        <p className="text-xs">{item.quantity}</p>
      </div>

      {/* Subtotal + Eliminar */}
      <div className="flex flex-col mt-4 items-endmin-h-[60px]">
        <p className="text-sm font-normal">{getItemTotal(item)}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
