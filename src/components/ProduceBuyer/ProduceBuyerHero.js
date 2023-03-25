import React from "react";
import { Link } from "react-router-dom";
const ProduceBuyerHero = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col justify-center items-center">
      show how you will be supporting local farmers by buying their produce for
      the market .
      <button className="bg-red-500 p-4 mt-12">
        <Link to="/AllProducts">See all Products for Sale</Link>
      </button>
    </div>
  );
};

export default ProduceBuyerHero;
