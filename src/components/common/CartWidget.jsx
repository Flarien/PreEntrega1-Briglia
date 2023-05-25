import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const CartWidget = () => {

  return(
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column' }}>
      <IconButton sx={{color:'#f5f5f5'}}  aria-label="Carrito de compras">
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
      0    
    </Box>
  )
}

export default CartWidget
