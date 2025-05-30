import { useContext } from "react";
import { MiniCartContext } from "@/context/MiniCartContext";

export const useMiniCart = () => {
  const context = useContext(MiniCartContext);

  if (!context) {
    throw new Error("useMiniCart debe usarse dentro de un MiniCartProvider");
  }

  return context;
};
