import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { db } from "../../../firebaseConfig";

import { collection, getDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";


const ItemDetailContainer = () => {
  const [itemSelected, setItemSelected] = useState({});

  const {agregarAlCarrito} = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {

    let itemCollection = collection (db, "products")
    let refDoc = doc (itemCollection, id)
    getDoc(refDoc)
      .then( (res) => {
        setItemSelected({ ...res.data(), id: res.id})
      })

  }, [id]);

  return (

      <ItemDetail itemSelected={itemSelected} />
   
  );
};

export default ItemDetailContainer;