// useForm.jsx - Hook personalizado: manejo de formularios controlados (inputs controlados)

// React
import { useState } from "react";

// Hook principal: recibe un objeto con valores iniciales del formulario (ej: { name: "", email: "" })
export const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues); // Estado: valores actuales del formulario
  const [errors, setErrors] = useState({}); // Estado: errores de validación

  // handleChange: actualiza el estado al escribir en un input (onChange)
  const handleChange = (e) => {
    const { name, value } = e.target; // name debe coincidir con la clave del objeto formData
    setFormData((prev) => ({ ...prev, [name]: value })); // Actualiza solo el campo editado
  };

  // resetForm: permite reiniciar el formulario a sus valores iniciales o a los valores que le pases
  const resetForm = (values = initialValues) => {
    setFormData(values);
    setErrors({});
  };

  // Devuelve el estado del formulario y funciones de manejo
  return { formData, handleChange, errors, setErrors, resetForm };
};
