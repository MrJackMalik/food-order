import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
export const Soup = () => {
  const [soups, setSoups] = useState("");

  useEffect(() => {
    axios
      .get("https://food-service-layer-app.herokuapp.com/food/3")
      .then((res) => setSoups(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {soups.length && (
        <ul className="d-flex flex-wrap">
          {soups.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      )}
    </div>
  );
};
