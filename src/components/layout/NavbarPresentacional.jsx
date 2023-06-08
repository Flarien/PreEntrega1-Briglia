import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CartWidget from "../common/CartWidget";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

export const NavbarPresentacional = ({pages, anchorElNav, handleOpenNavMenu, handleCloseNavMenu }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#899752" }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
    
          {/* Logo md */}
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{
              padding: "0.5em",
              display: { md: "flex", xs: "none" },
              mr: 1,
            }}
          >
            <img src="/public/images/logo_blanco.png" alt="Logo" style={{ width: "5em", marginLeft: "0.5em" }} />
          </IconButton>

          {/* Menu  md*/}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
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
              <img src="/public/images/favicon.png" alt="Logo" style={{ width: "5em" }} />
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
  )
}
