import ItemCard from "../../common/itemCard/ItemCard";
import "./ItemList.css"

const ItemListPresentacional = ({ items }) => {

  return (
  
    <div className="cards-container">
      {items.map((elemento) => {
        return <ItemCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ItemListPresentacional;
