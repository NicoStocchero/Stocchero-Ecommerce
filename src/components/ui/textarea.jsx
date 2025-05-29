// Textarea.jsx - Componente textarea con estilos de Tailwind y utilidades

import * as React from "react";
import { cn } from "@/lib/utils"; // Helper para combinar clases de forma segura

function Textarea({
  className, // Permite pasar clases extra desde el padre
  ...props // Recibe los demás props como name, id, value, etc.
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Clases base para el textarea
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className // Agrega las clases extra que venga desde el padre
      )}
      {...props} // Pasa los props restantes
    />
  );
}

export { Textarea };
