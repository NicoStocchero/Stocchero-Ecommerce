// Librerías externas
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Animaciones con Framer Motion

// Helpers y utilidades
import { fieldVariant } from "@/animations/formVariants"; // Variantes para animar los campos

// Componentes UI
import { Input } from "@/components/ui/Input"; // Componente input reutilizable
import { Textarea } from "@/components/ui/Textarea"; // Componente textarea reutilizable
import { Button } from "@/components/ui/Button"; // Componente botón global
import { Send } from "lucide-react"; // Icono de enviar (Lucide)

const ContactForm = ({ formRef, formData, handleChange, handleSubmit }) => (
  <motion.form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
    {/* Campos del formulario */}
    {["nombre", "email", "mensaje"].map((field) => (
      <motion.div key={field} variants={fieldVariant}>
        <label
          htmlFor={field}
          className="block mb-2 font-medium text-neutral-800"
        >
          {field === "nombre"
            ? "Nombre completo"
            : field === "email"
            ? "Correo electrónico"
            : "Mensaje"}
        </label>

        {field === "mensaje" ? (
          <Textarea
            id={field}
            name={field}
            rows={5}
            placeholder="Escribí aquí tu mensaje"
            value={formData[field]}
            onChange={handleChange}
            required
            className="rounded-md p-3 border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none transition placeholder:text-neutral-400"
          />
        ) : (
          <Input
            id={field}
            name={field}
            type={field === "email" ? "email" : "text"}
            placeholder={
              field === "nombre" ? "Ej: Nicolás" : "ejemplo@correo.com"
            }
            value={formData[field]}
            onChange={handleChange}
            required
            className="rounded-md p-3 border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none transition placeholder:text-neutral-400"
          />
        )}
      </motion.div>
    ))}

    {/* Botón enviar */}
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-md shadow-md flex items-center justify-center gap-2"
      >
        Enviar mensaje
        <Send className="w-4 h-4" />
      </Button>
    </motion.div>
  </motion.form>
);

export default ContactForm;
