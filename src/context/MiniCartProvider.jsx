import { useState } from "react";
import { MiniCartContext } from "./MiniCartContext";

const MiniCartProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const openMiniCart = () => setIsVisible(true);
  const closeMiniCart = () => setIsVisible(false);

  return (
    <MiniCartContext.Provider
      value={{
        isVisible,
        openMiniCart,
        closeMiniCart,
      }}
    >
      {children}
    </MiniCartContext.Provider>
  );
};

export default MiniCartProvider;
