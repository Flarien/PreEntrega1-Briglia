import ItemCard from "../../common/itemCard/ItemCard";
import "./ItemList.css";

const ItemListPresentacional = ({ items, categoryName }) => {

  return (
    <div>
      <h1 className="title">
        {categoryName ? `Categoría: ${categoryName}` : "Vivero Online: FloreSer"}
      </h1>
      <div className="cards-container">
        {items.map((elemento) => {
          return <ItemCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};

export default ItemListPresentacional;
