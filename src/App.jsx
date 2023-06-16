
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Nosotros from "./components/pages/nosotros/Nosotros";
import ItemDetailContainer from "./components/pages/itemDetail/itemDetailContainer";
import Contacto from "./components/pages/contacto/Contacto";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
      
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;