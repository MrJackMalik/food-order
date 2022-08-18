export const EditCard = ({ item, setModal, setSelected }) => {
  return (
    <li className="m-3 p-3 border border-2">
      <img
        src={`https://food-service-layer-app.herokuapp.com/` + item.image}
        alt="item.name"
        width="150"
        height="150"
        className="homepage-img rounded-circle animate-rotate"
      />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.bowls} available</p>
      <button
        onClick={() => {
          setModal(true);
          setSelected(item);
        }}
        className="d-block btn btn-warning w-100"
      >
        Edit
      </button>
    </li>
  );
};
