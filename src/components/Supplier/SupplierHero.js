import React from "react";
import { Link } from "react-router-dom";

const SupplierHero = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col justify-center items-center">
      Info about how they can make omoney from the platform by supplying
      fertilizers , seeds . (Add image as well, maybe background)
      <button className="bg-red-500 p-4 mt-12">
        <Link to="/AddSuppliedInput">Add Input that You want to Supply</Link>
      </button>
    </div>
  );
};

export default SupplierHero;
