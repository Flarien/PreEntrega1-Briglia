
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Nosotros from "./components/pages/nosotros/Nosotros";
import Contacto from "./components/pages/contacto/Contacto";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

import { CartContainer } from "./components/pages/cart/CartContainer";
import CartContextProvider from "./context/CartContext";
import Form from "./components/pages/form/Form";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>

        <Routes>
          <Route element={<Layout />}>

            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/form" element={<Form />} />
            <Route path="/carrito" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
        
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;