import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/logo/logo_blanco.png';
import CartWidget from '../common/CartWidget';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#899752' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton edge="start"  aria-label="menu" sx={{ padding: '0.5em' }}>
            <img src={logo} alt="Logo" style={{ width: '5em' }} />
          </IconButton>
          <Box>
            <CartWidget />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
