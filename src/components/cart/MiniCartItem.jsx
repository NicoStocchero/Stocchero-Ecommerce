import { useCart } from "@/hooks/useCart";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useMiniCart } from "@/hooks/useMiniCart";

const MiniCartItem = ({ item }) => {
  const navigate = useNavigate();
  const { addItem, decreaseItemQuantity, removeItem, getItemTotal } = useCart();
  const { closeMiniCart } = useMiniCart();

  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b">
      {/* Imagen */}
      <img
        onClick={() => {
          navigate(`/item/${item.product.id}`);
          closeMiniCart();
        }}
        src={item.product.imagen}
        alt={item.product.title}
        className="w-16 h-16 object-cover rounded-md border cursor-pointer"
      />

      {/* Info + botones */}
      <div className="flex-1 flex flex-col justify-between space-y-2">
        <p
          onClick={() => navigate(`/item/${item.product.id}`)}
          className="text-sm font-medium cursor-pointer"
        >
          {item.product.title}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={() => decreaseItemQuantity(item.product.id)}
            disabled={item.quantity === 1}
            className="w-8 h-8 border rounded-md text-base hover:bg-neutral-100 cursor-pointer"
          >
            -
          </button>
          <span className="text-base">{item.quantity}</span>
          <button
            onClick={() => addItem(item.product, 1)}
            className="w-8 h-8 border rounded-md text-base hover:bg-neutral-100 cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      {/* Subtotal + Eliminar */}
      <div className="flex flex-col items-end space-y-7 min-h-[60px]">
        <button
          onClick={() => removeItem(item.product.id)}
          className="text-gray-500 hover:text-red-600 text-lg cursor-pointer"
        >
          <FiTrash2 />
        </button>
        <p className="text-xs font-normal">{getItemTotal(item)}</p>
      </div>
    </div>
  );
};

export default MiniCartItem;
