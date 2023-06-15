import ItemCard from "../../common/itemCard/ItemCard";
import "./ItemList.css"

const ItemListPresentacional = ({ items }) => {

  return (

    // <h1>Bienvenidos a FloreSer: Llena de vida tu hogar 🌼🪴</h1>
  
      <div className="cards-container">
      {items.map((elemento) => {
        return <ItemCard key={elemento.id} elemento={elemento} />;
      })}</div>

    
  );
};

export default ItemListPresentacional;
