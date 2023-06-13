
import Layout from "./components/layout/Layout";

import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a FloreSer: Llena de vida tu hogar 🌼🪴"} />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
