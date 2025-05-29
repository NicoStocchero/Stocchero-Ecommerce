// Checkout.jsx - Página de finalización de compra: formulario y resumen de compra

// React y librerías externas
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Hooks personalizados
import { useCart } from "@/hooks/useCart";
import { useToastOnEmptyCart } from "@/hooks/useToastOnEmptyCart";
import { useForm } from "@/hooks/useForm";

// Utils y servicios
import { validateForm } from "@/utils/validateForm";
import { createOrder } from "@/services/orderService";

// Componentes
import FormInput from "@/components/features/contact/FormInput";
import CartSummary from "@/components/cart/CartSummary";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  // Accedemos al contexto del carrito para obtener los productos, el total y la función para limpiar el carrito
  const { totalPriceValue, cart, clearCart } = useCart();

  // Hook de navegación para redirigir al usuario después de la compra
  const navigate = useNavigate();

  // Hook para mostrar un toast si el carrito está vacío (y redirigir)
  useToastOnEmptyCart(cart);

  // Hook personalizado para manejar el formulario (estado y errores)
  const { formData, handleChange, errors, setErrors } = useForm({
    name: "",
    email: "",
    phone: "",
  });

  // handleCreateOrder: crea la orden de compra en Firebase si los datos son válidos y hay stock
  const handleCreateOrder = async () => {
    // Validamos el formulario antes de continuar
    const { isValid, errors: validationErrors } = validateForm(formData);

    if (!isValid()) {
      // Si hay errores, los seteamos en el hook de errores
      setErrors(validationErrors);
      toast.error("Por favor, completá todos los campos correctamente.");
      return;
    }

    // Si todo es válido, creamos la orden
    try {
      const orderId = await createOrder({
        cart,
        buyer: formData,
        total: totalPriceValue(),
      });

      if (orderId) {
        localStorage.setItem("orderId", orderId); // Guardamos el ID de la orden en el localStorage
        toast.success("Orden creada con éxito. Tu ID es: " + orderId); // Mostramos un mensaje de éxito
      }

      clearCart(); // Limpiamos el carrito
      navigate("/"); // Redirigimos al home
    } catch {
      // Mostramos un error genérico si falla la transacción
      toast.error(
        "Ocurrió un error al procesar tu compra. Intentá de nuevo en unos minutos."
      );
    }
  };

  // Si el carrito está vacío, no mostramos el formulario (early return)
  if (cart.length === 0) return null;

  // Render del formulario de checkout y resumen de compra
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Formulario de datos del comprador */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 mb-8">
          Finalizar Compra
        </h2>

        <div className="flex flex-col gap-6">
          <FormInput
            label="Nombre"
            id="name"
            value={formData.name}
            onChange={handleChange}
            error={errors?.name}
          />
          <FormInput
            label="Email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            error={errors?.email}
            type="email"
          />
          <FormInput
            label="Teléfono"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors?.phone}
            type="tel"
          />
        </div>

        {/* Botón para confirmar la compra */}
        <Button onClick={handleCreateOrder} size="lg" className="mt-8 w-full">
          Confirmar compra
        </Button>
      </div>

      {/* Resumen de la compra: productos, cantidades y total */}
      <CartSummary />
    </div>
  );
};

export default Checkout;
