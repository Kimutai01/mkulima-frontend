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
    <div >
      {bestCrops.map((crop) => (
        <div>
          <p>{crop.name}</p>
          <Link to={`/EachOfBestCropToGrow/${crop.id}`}>
            See more about {crop.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BestCropsToGrow;
