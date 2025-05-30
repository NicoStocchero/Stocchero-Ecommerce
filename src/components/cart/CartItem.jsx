import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";

const CartItem = ({ item }) => {
  const { addItem, decreaseItemQuantity, getItemTotal, formatearImporte } =
    useCart();

  return (
    <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md border border-neutral-200 hover:shadow-lg transition-shadow md:flex-row flex-col gap-4">
      {/* Info producto */}
      <div className="flex items-center gap-6 flex-1">
        <img
          src={item.product.imagen}
          alt={item.product.title}
          className="w-28 h-28 object-cover rounded-md border border-neutral-200"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-neutral-900">
            {item.product.title}
          </h3>
          <p className="text-xs text-neutral-600">
            Precio: {formatearImporte(item.product.precio)}
          </p>
          <p className="text-sm font-semibold text-neutral-600 mt-8">
            Subtotal: {getItemTotal(item)}
          </p>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-4 md:justify-end">
        <Button
          size="icon"
          variant="outline"
          onClick={() => {
            decreaseItemQuantity(item.product.id);
          }}
        >
          -
        </Button>
        <p className="text-lg font-semibold text-neutral-900">
          x{item.quantity}
        </p>
        <Button
          size="icon"
          variant="outline"
          onClick={() => addItem(item.product, 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
