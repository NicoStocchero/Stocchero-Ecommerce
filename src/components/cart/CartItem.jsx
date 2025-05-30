import { FiTrash2 } from "react-icons/fi";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CartItem = ({ item }) => {
  const navigate = useNavigate();
  const {
    addItem,
    decreaseItemQuantity,
    getItemTotal,
    formatearImporte,
    removeItem,
  } = useCart();

  return (
    <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md border border-neutral-200 hover:shadow-lg transition-shadow md:flex-row flex-col gap-4">
      {/* Info producto */}
      <div className="flex items-center gap-6 flex-1">
        <img
          onClick={() => navigate(`/item/${item.product.id}`)}
          src={item.product.imagen}
          alt={item.product.title}
          className="w-28 h-28 object-cover rounded-md border border-neutral-200 cursor-pointer"
        />
        <div className="flex flex-col gap-2">
          <h3
            onClick={() => navigate(`/item/${item.product.id}`)}
            className="text-lg font-semibold text-neutral-900 cursor-pointer"
          >
            {item.product.title}
          </h3>
          <p className="text-xs text-neutral-600">
            Precio: {formatearImporte(item.product.precio)}
          </p>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex flex-col md:justify-start ">
        <div className="flex items-center gap-4 md:justify-end">
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              decreaseItemQuantity(item.product.id);
            }}
            disabled={item.quantity === 1}
          >
            -
          </Button>
          <p className="text-lg font-semibold text-neutral-900">
            {item.quantity}
          </p>
          <Button
            size="icon"
            variant="outline"
            onClick={() => addItem(item.product, 1)}
          >
            +
          </Button>
          <button
            onClick={() => removeItem(item.product.id)}
            className="text-gray-500 hover:text-red-600 text-lg cursor-pointer"
          >
            <FiTrash2 />
          </button>
        </div>
        <p className="text-sm font-semibold text-neutral-600 text-start mt-4">
          Subtotal: {getItemTotal(item)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
