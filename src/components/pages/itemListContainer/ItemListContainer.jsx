import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let itemsCollection = collection (db, "products")
    let consulta;
    

    if (categoryName) {

      consulta = query(itemsCollection, where( "category" , "==" , categoryName ));

    } else {

      consulta = itemsCollection

    }

    getDocs(consulta)
        .then((res) => {
          let products = res.docs.map((elemento) => {
            return {
              ...elemento.data(),
              id: elemento.id,
            };
          });
          setItems(products);
        })
        .catch((err) => console.log(err));

  }, [categoryName]);

  return <ItemListPresentacional items={items} />;
};

export default ItemListContainer;
