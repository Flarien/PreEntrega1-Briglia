// import { Box } from "@mui/material";

// const ItemListContainer = ( {greeting} ) => {
 

//   return (
//     <>
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', padding: '1em 0 1em 0'}}>
//         <h1>{greeting}</h1>
//       </Box>
//     </>
//   );
// };

// export default ItemListContainer;

import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });

  }, [categoryName]);

  return <ItemListPresentacional items={items} />;
};

export default ItemListContainer;

