import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { db } from "../../../firebaseConfig";

import { collection, getDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [itemSelected, setItemSelected] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);

  const onAdd = (cantidad) => {
    let data = {
      ...itemSelected,
      quantity: cantidad,
    };

    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado exitosamente",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setItemSelected({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div>
    {itemSelected.id ? (
      <ItemDetail
        cantidad={cantidad}
        itemSelected={itemSelected}
        addToCart={addToCart}
        onAdd={onAdd}
      />
    ) : (
      <h1>Cargando...</h1>
    )}
  </div>
  );
};

export default ItemDetailContainer;
