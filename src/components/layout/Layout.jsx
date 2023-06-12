import { NavbarContainer } from "./navbar/NavbarContainer";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";


const Layout = () => {
  return (
    <div>
        <NavbarContainer />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout