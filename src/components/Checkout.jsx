import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  serverTimestamp,
  collection,
  getFirestore,
  doc,
  runTransaction,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { isEmail, isMobilePhone } from "validator";

const Checkout = () => {
  // Accedemos al contexto del carrito para obtener los productos, el total y la función para limpiar el carrito
  const { totalPrice, cart, clearCart } = useContext(CartContext);

  // Hook de navegación para redirigir al usuario después de la compra
  const navigate = useNavigate();

  // Estados controlados para los datos del comprador
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Estados para mostrar errores de validación por campo
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // isValid: valida los datos ingresados y muestra errores por campo si son inválidos
  const isValid = () => {
    // Limpia errores previos
    setNameError("");
    setEmailError("");
    setPhoneError("");

    let valid = true;

    // Validación del campo nombre
    if (name.trim() === "") {
      setNameError("El nombre es obligatorio");
      valid = false;
    }

    // Validación del email con la librería validator
    if (!isEmail(email)) {
      setEmailError("El email no es válido");
      valid = false;
    }

    // Validación del teléfono (cualquier formato válido para mobiles)
    if (!isMobilePhone(phone)) {
      setPhoneError("El teléfono no es válido");
      valid = false;
    }

    return valid;
  };

  // handleCreateOrder: crea la orden de compra en Firebase si los datos son válidos y hay stock
  const handleCreateOrder = async () => {
    // Validamos el formulario antes de continuar
    if (!isValid()) {
      return; // Si hay errores, frenamos la ejecución
    }

    try {
      const db = getFirestore();
      const orderRef = doc(collection(db, "orders"));

      // Ejecutamos la transacción para asegurar consistencia en la base de datos
      await runTransaction(db, async (transaction) => {
        // Validamos stock de cada producto antes de descontarlo
        for (const item of cart) {
          const stockRef = await transaction.get(
            doc(db, "products", item.product.id)
          );
          const stock = stockRef.data().stock;

          if (stock < item.quantity) {
            throw new Error(
              `No hay suficiente stock para ${item.product.title}`
            );
          }

          // Actualizamos stock en la base de datos
          transaction.update(doc(db, "products", item.product.id), {
            stock: stock - item.quantity,
          });
        }

        // Creamos la orden con los datos del comprador, productos y total
        transaction.set(orderRef, {
          buyer: { name, email, phone },
          items: cart,
          total: totalPrice(),
          date: serverTimestamp(),
        });
      });

      // Si todo salió bien, limpiamos el carrito y redirigimos al usuario a la home
      clearCart();
      navigate("/");
    } catch (error) {
      // Error en la transacción: devolver el mensaje o uno por defecto
      return error?.message || "Error al crear la orden";
    }
  };

  // Manejadores de inputs para capturar datos del formulario (controlados)
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  // Render del formulario de checkout
  return (
    <div className="checkout">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={handleChangeName}
      />
      {nameError && <p>{nameError}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChangeEmail}
      />
      {emailError && <p>{emailError}</p>}

      <input
        type="tel"
        placeholder="Teléfono"
        value={phone}
        onChange={handleChangePhone}
      />
      {phoneError && <p>{phoneError}</p>}

      <button type="button" onClick={handleCreateOrder}>
        Confirmar
      </button>
    </div>
  );
};

export default Checkout;
