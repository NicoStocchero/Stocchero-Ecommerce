// Input.jsx - Componente input con estilos de Tailwind y soporte para clases externas

import * as React from "react";
import { cn } from "@/lib/utils"; // Helper para combinar clases

function Input({
  className, // Clases extra opcionales
  type, // Tipo de input (text, email, etc.)
  ...props // Otros props como value, onChange, etc.
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Clases base del input (focus, estados, dark mode, etc.)
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className // Agrega las clases externas si se pasan
      )}
      {...props} // Pasa los demás props (name, value, onChange, etc.)
    />
  );
}

export { Input };
