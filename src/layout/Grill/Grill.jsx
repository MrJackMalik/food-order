import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
export const Grill = () => {
  const [grills, setGrills] = useState("");

  useEffect(() => {
    axios
      .get("https://food-service-layer-app.herokuapp.com/food/4")
      .then((res) => setGrills(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container overflow-hidden my-5">
      {grills.length && (
        <ul className="row gx-3 gy-5">
          {grills.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      )}
    </div>
  );
};
