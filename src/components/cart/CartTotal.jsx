import { Link } from "react-router-dom";

const CartTotal = ({ totalPrice, showButton = true }) => {
  return (
    <div className="border-t pt-6 mt-6 space-y-2">
      <div className="flex justify-between items-center text-sm">
        <p className="text-neutral-600">Subtotal</p>
        {/* <p className="text-neutral-900 font-medium">{subtotal()}</p> */}
      </div>
      <div className="flex justify-between items-center text-sm">
        <p className="text-neutral-600">Gastos de envío</p>
        {/* <p className="text-neutral-900 font-medium">{shipping()}</p> */}
      </div>
      <div className="flex justify-between items-center text-sm">
        <p className="text-neutral-600">Impuestos nacionales</p>
        {/* <p className="text-neutral-900 font-medium">{taxes()}</p> */}
      </div>
      <div className="flex justify-between items-center text-lg font-bold border-t pt-4 mt-4">
        <p className="text-neutral-900">Total</p>
        <p className="text-neutral-900">{totalPrice()}</p>
      </div>
      {showButton && (
        <Link
          to="/cart"
          className="text-xs font-bold text-gray-600 hover:text-black cursor-pointer mt-8 block text-center"
        >
          Volver a carrito
        </Link>
      )}
    </div>
  );
};

export default CartTotal;
