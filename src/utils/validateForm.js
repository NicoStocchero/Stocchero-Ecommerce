import { isEmail, isMobilePhone } from "validator";

// isValid: valida los datos ingresados y muestra errores por campo si son inválidos
export const validateForm = ({ name, email, phone }) => {
  const errors = {};

  // Validación del campo nombre
  if (name.trim() === "") {
    errors.name = "Por favor, ingresá tu nombre.";
  }

  // Validación del email con la librería validator
  if (!isEmail(email)) {
    errors.email = "Por favor, ingresá un email válido.";
  }

  // Validación del teléfono (cualquier formato válido para mobiles)
  if (!isMobilePhone(phone)) {
    errors.phone = "Por favor, ingresá un número de teléfono válido.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
