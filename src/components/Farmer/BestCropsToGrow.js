import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import greenarrow from "../images/greenarrow.png";
const BestCropsToGrow = ({ selectedCountyName, selectedCountyId }) => {
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
      <h1 className="text-3xl font-bold text-center text-[#3B841F] md:text-5xl ">
        Best Crops to Grow in {selectedCountyName}
      </h1>

      <p className="text-center">
        We've selected the Top Most Compatible crops according to your area
        looking at your soil type, rainfall, temperature and other factors.
      </p>
      <div className="flex justify-center flex-wrap my-4 gap-12">
        {bestCrops.map((crop) => (
          <div className="flex flex-col rounded-3xl  gap-4 w-[400px] bg-[#3B841F]">
            <img
              src="https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="tomatoes"
              className="w-[400px] h-[300px] rounded-t-3xl object-cover"
            />
            <div className="p-2 flex flex-col gap-2">
              <div className="flex justify-between mx-8">
                <p className="text-3xl text-white font-bold">Name:</p>
                <p className="bg-white gap-2 px-4 py-2 rounded-xl font-bold text-[#3B841F] ">
                  {crop.name}
                </p>
              </div>

              <div className="flex justify-between mx-8">
                <p className="text-2xl text-white font-bold">
                  Maturity Period:
                </p>
                <p className="bg-white gap-2 px-4 py-2 rounded-xl font-bold text-[#3B841F] ">
                  {crop.maturity_period}
                </p>
              </div>
              <div className="flex justify-between mx-8">
                <p className="text-xl text-white font-bold">
                  Cost of Production:
                </p>
                <p className="bg-white gap-2 px-4 py-2 rounded-xl font-bold text-[#3B841F] ">
                  {crop.cost_to_produce_kg} KES
                </p>
              </div>

              <div className="flex justify-between mx-8">
                <p className="text-3xl text-white font-bold">Price Per Kg:</p>
                <p className="bg-white gap-2 px-4 py-2 rounded-xl font-bold text-[#3B841F] ">
                  {crop.price_per_kg} KES
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link to={`/EachOfBestCropToGrow/${crop.id}`}>
                <button className="bg-white gap-2 px-6 py-4 rounded-xl font-bold text-[#3B841F] my-4 justify-center place-content-center flex text-md">
                  Learn More
                  <div className="flex mt-2 ">
                    <img
                      src={greenarrow}
                      alt="greenarrow"
                      className="h-[10px]"
                    />
                    <img
                      src={greenarrow}
                      alt="greenarrow"
                      className="h-[10px]"
                    />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCropsToGrow;
