import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
export const HotDishes = () => {
  const [hotDishes, setHotDishes] = useState("");

  useEffect(() => {
    axios
      .get("https://food-service-layer-app.herokuapp.com/food/1")
      .then((res) => setHotDishes(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {hotDishes.length && (
        <ul className="d-flex flex-wrap">
          {hotDishes.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      )}
    </div>
  );
};
