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
    <li onClick={handleItem} className="m-3 p-3 border border-2">
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
    </li>
  );
};
