import { NavbarContainer } from "./components/layout/NavbarContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavbarContainer />
      <ItemListContainer
        greeting={"Bienvenidos a FloreSer: Llena de vida tu hogar 🌼🪴"}
      />
    </>
  );
};

export default App;
