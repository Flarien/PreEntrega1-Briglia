import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Box, CircularProgress } from "@mui/material";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true); 

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
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });

  }, [categoryName]);

  return (
    <>
      {loading ? (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress color="success" />
      </Box>
      ) : (
        <ItemListPresentacional items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
