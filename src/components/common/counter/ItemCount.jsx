import { Button } from "@mui/material";
import { useCount } from "../../hook/useCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);
  const [isAdd, setIsAdd] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="counter">
      {!isAdd && (
        <div className="counter-buttons">
          <button className="counter-calc" onClick={decrement}>
            -
          </button>
          <span className="counter-num">{count}</span>
          <button className="counter-calc" onClick={increment}>
            +
          </button>
        </div>
      )}

      {isAdd ? (
        <Button
          variant="contained"
          size="small"
          sx={{
            marginTop: "1em",
            backgroundColor: "#899752",
            "&:hover": { backgroundColor: "#687630" },
          }}
          onClick={() => navigate("/carrito")}
        > Ir al carrito
        </Button>
      ) : (
        <Button
          variant="contained"
          size="small"
          sx={{
            marginTop: "1em",
            backgroundColor: "#899752",
            "&:hover": { backgroundColor: "#687630" },
          }}
          onClick={() => {
            onAdd(count);
            setIsAdd(true);
          }}
        > Agregar al carrito
        </Button>
      )}
    </div>
  );
};

export default ItemCount;
