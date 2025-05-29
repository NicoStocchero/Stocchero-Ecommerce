// Combina clases condicionales (clsx) + resuelve conflictos de Tailwind (twMerge)

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
