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
    <div className="container overflow-hidden my-5">
      {dessert.length && (
        <ul className="row gx-3 gy-5">
          {dessert.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      )}
    </div>
  );
};
