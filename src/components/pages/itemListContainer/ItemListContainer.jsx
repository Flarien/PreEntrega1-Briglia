import { Box } from "@mui/material";

const ItemListContainer = ( {greeting} ) => {
 

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', padding: '1em 0 1em 0'}}>
        <h1>{greeting}</h1>
      </Box>
    </>
  );
};

export default ItemListContainer;
