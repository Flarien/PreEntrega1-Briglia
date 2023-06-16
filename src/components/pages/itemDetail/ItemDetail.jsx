import ItemCount from "../../common/counter/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ itemSelected }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...itemSelected,
      quantity: cantidad,
    };

    console.log(data);
  };

  return (
    <div className="cards-detail-gral">
      <div className="cards-detail">
        <h1>{itemSelected.title}</h1>
        <img
          src={itemSelected.img}
          alt={itemSelected.description}
          style={{ width: "20em", margin: "1em" }}
        />
        <h3 style={{ color: "gray" }}>{itemSelected.description}</h3>
        <h2>${itemSelected.price}</h2>

      </div>
      <div className="cards-detail">
        {itemSelected.stock > 0 ? (
          <ItemCount stock={itemSelected.stock} initial={1} onAdd={onAdd} />
        ) : (
          <h3>No hay stock</h3>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
