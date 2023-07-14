import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import Cart from "./Cart";


export const CartContainer = () => {

  const { cart, clearCart, removeById, getTotalPrice  } = useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "Limpiar el carrito:",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Aceptar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("¡Listo! Carrito limpio", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (

    <div>

      <div>
        <Cart
          total={total}
          limpiar={limpiar}
          cart={cart}
          removeById={removeById}
        />
      </div>


    </div>
  )

}    


  // este es el viejo return. iba dentro del div: 
  // <button onClick={clearCart}>Limpiar carrito</button>

  //     {cart.map((product) => {
  //       return (
  //         <div key={product.id}>
  //           <h2>{product.title}</h2>
  //           <h3>{product.price}</h3>
  //           <h3>{product.quantity}</h3>
  //           <button onClick={()=>removeById(product.id)}>Eliminar</button>
  //         </div>
  //       );
  //     })} 