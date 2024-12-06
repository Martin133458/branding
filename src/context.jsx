import { createContext, useContext, useState } from 'react';

const AppContext = createContext();


export const AppContextProvider = ({ children }) => {
   const [isActive, setActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  const closeMenu = () => {
    setIsActive(false)
  }



  const [visibleProducts, setVisibleProducts] = useState(4);

  const loadMoreProducts = () => {
   setVisibleProducts(prev => prev + 4);
  };

    const value = {
        isActive,
        toggleMenu,
        closeMenu,
        visibleProducts,
        loadMoreProducts,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
    return useContext(AppContext);
};