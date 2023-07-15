import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, limpiar, removeById, total, cantidadTotal }) => {
  return (
    <div className="checkout-container">
      <h1 className="cart-title">Carrito de Compras</h1>
      <div className="cart-container">
        
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>${item.price}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => removeById(item.id)}
                >
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
          {cart.length > 0 ? (
          <div className="cart-info">
            <h2>Resumen del carrito:</h2>
            <h3>Cantidad de productos: {cantidadTotal} </h3>
            <h3>Precio total: $ {total}.-</h3>
              <div className="btn-cart">
                <Button onClick={limpiar} variant="contained" color="error">
                  Vaciar carrito
                </Button>
                <Link to="/checkout">
                  <Button variant="contained" color="success">
                    Finalizar compra
                  </Button>
                </Link>
            </div>
          </div>
          ) : (
            <div className="cart-add">
              <h2>Tu carrito está vacío.</h2>
              <Link to="/">
                <Button variant="contained" color="success">
                  Agrega productos
                </Button>
              </Link>
            </div>
          )}
        
      </div>
    </div>
  );
};

export default Cart;
