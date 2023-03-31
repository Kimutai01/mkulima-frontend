import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsBookmarkCheckFill } from "react-icons/bs";
const BestCropsToGrow = ({
  selectedCountyName,
  selectedCountyId,
  loggedInUserId,
}) => {
  const [bestCrops, setBestCrops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:3000/first_three_crops")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBestCrops(data);
      });
  }, []);

  const addToMySelectedCrops = (id) => {
    fetch("http://127.0.0.1:3000/selected_crops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: Number(loggedInUserId),
        plantable_crop_id: Number(id),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setTimeout(() => {
          navigate("/MySelectedCrops");
        }, 2000);
      });
  };

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
          <div className="flex flex-col  rounded-3xl  gap-4 w-[350px] bg-[#3B841F]">
            <img
              src={crop.image}
              alt={crop.name}
              className="w-[350px] h-[300px] rounded-t-3xl object-cover"
            />
            <div className="p-2 flex flex-col gap-2">
              <div className="flex justify-between mx-8">
                <p className="text-3xl text-white font-bold">{crop.name}</p>
                <BsBookmarkCheckFill
                  className="text-white text-3xl cursor-pointer hover:scale-110 transform transition duration-500 ease-in-out"
                  onClick={() => addToMySelectedCrops(crop.id)}
                />
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

              <div className="flex justify-between pb-4 mx-8">
                <p className="text-3xl text-white font-bold">Price Per Kg:</p>
                <p className="bg-white gap-2 px-4 py-2 rounded-xl font-bold text-[#3B841F] ">
                  {crop.price_per_kg} KES
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCropsToGrow;
