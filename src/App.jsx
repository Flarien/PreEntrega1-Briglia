
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<ItemListContainer />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;