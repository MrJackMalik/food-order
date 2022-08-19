import "../Card/card.scss";
export const EditCard = ({ item, setModal, setSelected }) => {
  return (
    <div className="col-3">
      <li
        className="p-2 border-none food-card"
        style={{ width: "220px", height: "300px" }}
      >
        <img
          src={`https://food-service-layer-app.herokuapp.com/` + item.image}
          alt={item.name}
          width="100"
          height="100"
          className="rounded-circle food-img"
        />
        <div className="food-details">
          <h3>Title: {item.name}</h3>
          <p>Number of Bowls: {item.bowls}</p>
          <p>Price ${item.price}</p>
          <button
            onClick={() => {
              setModal(true);
              setSelected(item);
            }}
            className="d-block btn btn-warning w-100"
          >
            Edit
          </button>
        </div>
      </li>
    </div>
  );
};
