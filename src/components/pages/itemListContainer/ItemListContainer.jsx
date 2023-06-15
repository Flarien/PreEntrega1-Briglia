import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let itemFilter = products.filter(
      (product) => product.category === categoryName
    );

    const getItem = new Promise((resolve) => {
      resolve(categoryName ? itemFilter : products);
    });

    getItem
      .then((res) => setItems(res))
      .catch((err) => {
        console.log(err);
      });
      
  }, [categoryName]);

  return (
    <ItemListPresentacional items={items} />
  );
};

export default ItemListContainer;
