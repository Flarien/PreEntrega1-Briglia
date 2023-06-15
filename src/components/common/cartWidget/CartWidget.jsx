import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="success">
      {" "}
      <IconButton sx={{ color: "#f5f5f5" }} aria-label="Carrito de compras">
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
    </Badge>
  );
};

export default CartWidget;
