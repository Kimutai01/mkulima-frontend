import React, { useState, useEffect } from "react";

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
    

  return <div>BestCropsToGrow</div>;
};

export default BestCropsToGrow;
