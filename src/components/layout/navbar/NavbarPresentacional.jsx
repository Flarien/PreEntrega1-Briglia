import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";

export const NavbarPresentacional = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#899752" }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo md */}

          <Link to="/">
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{
                padding: "0.5em",
                display: { md: "flex", xs: "none" },
                mr: 1,
              }}
            >
              <img
                src="https://res.cloudinary.com/dciovdqaf/image/upload/v1689378015/logo_blanco_uzmsux.png"
                alt="Logo"
                style={{ width: "5em", marginLeft: "0.5em" }}
              />
            </IconButton>
          </Link>


          {/* Menu md */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              component={Link}
              to="/"
              onClick={handleCloseNavMenu}
              sx={{ color: "white", mx: 1 }}
            >
              Productos
            </Button>
            <Button
              component={Link}
              to="/category/interior"
              onClick={handleCloseNavMenu}
              sx={{ color: "white", mx: 1 }}
            >
              Plantas de Interior
            </Button>
            <Button
              component={Link}
              to="/category/exterior"
              onClick={handleCloseNavMenu}
              sx={{ color: "white", mx: 1 }}
            >
              Plantas de Exterior
            </Button>
            <Button
              component={Link}
              to="/nosotros"
              onClick={handleCloseNavMenu}
              sx={{ color: "white", mx: 1 }}
            >
              Nosotros
            </Button>
          </Box>


          {/* Menu xs */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
                        <IconButton
              component={Link}
              to="/" 
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={handleCloseNavMenu}
            >
              <img
                src="https://res.cloudinary.com/dciovdqaf/image/upload/v1689378015/logo_blanco_uzmsux.png"
                alt="Logo"
                style={{ width: "5em" }}
              />
            </IconButton>
          </Menu>

          {/* LOGO xs */}
          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              paddingLeft: "1em",
            }}
          >
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dciovdqaf/image/upload/v1689378015/logo_blanco_uzmsux.png.png"
                  alt="Logo"
                  style={{ width: "5em" }}
                />
              </Link>
            </IconButton>
          </Box>

          {/*  Carrito */}
          <Box
            sx={{
              display: "flex",
              marginRight: "0.5em",
            }}
          >
            <CartWidget />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
