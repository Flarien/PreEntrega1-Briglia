import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";



const CartWidget = () => {

  const { getTotalItems } = useContext(CartContext)
  let totalItems = getTotalItems()

  return (
    <Link to="/carrito">
      <Badge badgeContent={totalItems} showZero color="success">
        {" "}
        <IconButton sx={{ color: "#f5f5f5" }} aria-label="Carrito de compras">
          <ShoppingCartIcon fontSize="large" />
        </IconButton>
      </Badge>
    </Link>
  );
};

export default CartWidget;
