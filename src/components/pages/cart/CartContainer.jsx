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

  const cantidadTotal = cart.reduce((total, item) => total + item.quantity, 0);

  return (

    <div>

      <div>
        <Cart
          total={total}
          limpiar={limpiar}
          cart={cart}
          removeById={removeById}
          cantidadTotal={cantidadTotal}
        />
      </div>


    </div>
  )

}   