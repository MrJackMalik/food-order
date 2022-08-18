import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
export const Dessert = () => {
  const [dessert, setDessert] = useState("");

  useEffect(() => {
    axios
      .get("https://food-service-layer-app.herokuapp.com/food/3")
      .then((res) => setDessert(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {dessert.length && (
        <ul className="d-flex flex-wrap">
          {dessert.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      )}
    </div>
  );
};
