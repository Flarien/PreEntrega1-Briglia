import Counter from "../../common/counter/Counter";
import "./ItemDetail.css"

const ItemDetail = ({ itemSelected }) => {

  const onAdd = (cantidad) => {

    let data = {
      ...itemSelected,
      quantity: cantidad,
    };

    console.log(data);
  };

  return (
    <div className="cards-detail">
      <div>
        <h2>{itemSelected.title}</h2>
        <img className="card-img" src={itemSelected.img} alt={itemSelected.description} style={{width: "20em"}} />
      </div>
      {itemSelected.stock > 0 ? (
        <Counter stock={itemSelected.stock} initial={1} onAdd={onAdd} />
      ) : (
        <h3>No hay stock</h3>
      )}
    </div>
  );
};

export default ItemDetail;
