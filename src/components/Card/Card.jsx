import { useState } from "react";
import "./card.scss";
export const Card = ({ item }) => {
  const [bookmark, setBookmark] = useState([]);
  const handleItem = () => {
    const finded = bookmark.findIndex((element) => element.id === item.id);
    if (finded >= 0) {
      bookmark[finded].count += 1;
      bookmark[finded].newPrice += bookmark[finded].price;
    } else {
      setBookmark([...bookmark], { ...item, count: 1, newPrice: item.price });
    }
    setBookmark([...bookmark]);
  };
  return (
    <div className="col-3">
      <li
        onClick={handleItem}
        className="p-3 border-none food-card"
        style={{ width: "220px", height: "250px" }}
      >
        <img
          src={`https://food-service-layer-app.herokuapp.com/` + item.image}
          alt={item.name}
          width="100"
          height="100"
          className="food-img rounded-circle"
        />
        <div className="food-details">
          <h3>Title: {item.name}</h3>
          <p>Number of Available Bowls: {item.bowls}</p>
          <p>Price: ${item.price}</p>
        </div>
      </li>
    </div>
  );
};
