// import { GridComponent } from "./components/common/gridComponent/GridComponent";
import Navbar from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";


const App = () => {
 return (
  <>
  
    <Navbar /> 
    <ItemListContainer greeting={"Bienvenidos a FloreSer: Llena de vida tu hogar 🌼🪴"} />

  </>
 );
};

export default App