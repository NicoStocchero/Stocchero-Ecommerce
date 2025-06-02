// Contacto.jsx - Página de contacto: formulario para enviar un mensaje por email

// React y librerías externas
import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { toast } from "react-toastify";

// Hooks personalizados
import { useForm } from "@/hooks/useForm";

// Animaciones
import { formVariant } from "@/animations/formVariants";

// Componentes
import ContactForm from "@/components/features/contact/ContactForm";

// Servicios
import { sendEmail } from "@/services/emailService";

const Contacto = () => {
  // Referencia al formulario para EmailJS
  const formRef = useRef();

  // Hook de formulario: estado controlado para los campos del formulario
  const { formData, handleChange, resetForm } = useForm({
    nombre: "",
    email: "",
    mensaje: "",
  });

  // Envía el formulario usando EmailJS (servicio externo)
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formRef)
      .then(() => {
        toast.success("¡Gracias por tu mensaje! Me contactaré pronto 😊");
        resetForm({ nombre: "", email: "", mensaje: "" }); // Reseteamos el formulario tras enviar
      })
      .catch(() => {
        toast.error(
          "Hubo un error al enviar el mensaje. Por favor, intentá más tarde."
        );
      });
  };

  // Render del formulario de contacto (formulario + título + descripción)
  return (
    <motion.section
      variants={formVariant}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto px-6 sm:px-8 py-20 bg-white rounded-2xl shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow duration-500"
    >
      {/* Título y descripción del contacto */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-neutral-900 mb-6 leading-tight tracking-tight">
        ¿Querés hablar conmigo?
      </h1>
      <p className="text-center text-neutral-700 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
        ¡Hola! Soy Nico Stocchero, gracias por visitar mi portafolio.
        <span className="block mt-2">
          Si tenés dudas, sugerencias o simplemente querés saludar, escribime
          usando el formulario.{" "}
          <span className="font-semibold text-primary">
            ¡Me encantaría leerte!
          </span>
        </span>
      </p>

      {/* Componente del formulario de contacto */}
      <ContactForm
        formRef={formRef}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </motion.section>
  );
};

export default Contacto;
