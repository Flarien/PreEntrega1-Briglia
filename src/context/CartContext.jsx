import { createContext, useState } from "react";

//Context
export const CartContext = createContext();

//COMPONENTE proveedor del contexto
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = () => {

  }

  let data = {
    // >> algo: algo <<  es igual a >> algo <<
    cart,
    agregarAlCarrito,

  };

  return (
    //CONTEXTO con su MÉTODO (provider)
    <CartContext.Provider value={data}> {children} </CartContext.Provider>
  );
};

export default CartContextProvider;
