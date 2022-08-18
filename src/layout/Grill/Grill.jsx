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
    <div>
      {grills.length && (
        <ul className="d-flex flex-wrap ">
          {grills.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      )}
    </div>
  );
};
