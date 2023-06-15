import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [itemSelected, setItemSelected] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setItemSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (

      <ItemDetail itemSelected={itemSelected} />
   
  );
};

export default ItemDetailContainer;