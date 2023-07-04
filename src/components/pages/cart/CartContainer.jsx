import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


export const CartContainer = () => {

  const { cart } = useContext(CartContext)
  console.log(cart);

  return (

    <div>
      <h1>Carrito</h1>
    </div>
  )

}