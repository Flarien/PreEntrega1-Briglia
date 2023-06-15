import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve) => {
      resolve(products);
    });

    tarea
      .then((res) => setItems(res))
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <ItemListPresentacional items={items} />
  );
};

export default ItemListContainer;
