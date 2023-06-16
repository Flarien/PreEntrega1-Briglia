import { Button } from "@mui/material";
import { useCount } from "../../hook/useCount";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <div className="counter">
      <div>
        <button className="counter-calc" onClick={decrement}>
          -
        </button>
        <span className="counter-num">{count}</span>
        <button className="counter-calc" onClick={increment}>
          +
        </button>
      </div>

      <Button
        variant="contained"
        size="small"
        sx={{
          marginTop: "1em",
          backgroundColor: "#899752",
          "&:hover": { backgroundColor: "#687630" },
        }}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
