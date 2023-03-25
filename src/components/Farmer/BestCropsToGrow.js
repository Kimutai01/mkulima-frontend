import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const BestCropsToGrow = () => {
  const [bestCrops, setBestCrops] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/first_three_crops")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBestCrops(data);
      });
  }, []);

  return (
    <div>
      {bestCrops.map((crop) => (
        <div>
          <p>{crop.name}</p>
          <p>Cost of production: {crop.cost_to_produce_kg}</p>
          <p>Price per kg: {crop.price_per_kg}</p>
          <p>Maturation time: {crop.maturity_period}</p>
          <button className="bg-red-500 p-4 mt-4">
            <Link to={`/EachOfBestCropToGrow/${crop.id}`}>
              See more about {crop.name}
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BestCropsToGrow;
