import * as React from "react";
import { NavbarPresentacional } from "./NavbarPresentacional";

export const NavbarContainer = () => {
  const pages = ["Productos", "Nosotros", "Contacto"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <NavbarPresentacional
      pages={pages}
      anchorElNav={anchorElNav}
      handleOpenNavMenu={handleOpenNavMenu}
      handleCloseNavMenu={handleCloseNavMenu}
    />
  );
};
