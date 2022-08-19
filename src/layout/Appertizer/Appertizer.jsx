import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
export const Appertizer = () => {
  const [appertizer, setAppertizer] = useState("");

  useEffect(() => {
    axios
      .get("https://food-service-layer-app.herokuapp.com/food/5")
      .then((res) => setAppertizer(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container overflow-hidden my-5">
      {appertizer.length && (
        <ul className="row gx-3 gy-5">
          {appertizer.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      )}
    </div>
  );
};
