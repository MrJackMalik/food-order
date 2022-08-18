import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
export const ColdDishes = () => {
  const [coldDishes, setColdDishes] = useState("");

  useEffect(() => {
    axios
      .get("https://food-service-layer-app.herokuapp.com/food/3")
      .then((res) => setColdDishes(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {coldDishes.length && (
        <ul className="d-flex flex-wrap">
          {coldDishes.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      )}
    </div>
  );
};
