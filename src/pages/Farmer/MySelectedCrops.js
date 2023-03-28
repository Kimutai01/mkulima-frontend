import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import greenarrow from "../images/greenarrow.png";
const MySelectedCrops = ({ loggedInUserId }) => {
  const [mySelectedCrops, setMySelectedCrops] = useState([]);
  const removeFromMySelectedCrops = (id) => {
    fetch(`http://127.0.0.1:3000/selected_crops/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) =>
        setMySelectedCrops(
          mySelectedCrops.filter((selectedcrop) => selectedcrop.id !== id)
        )
      );
  };
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/my_selected_crops/${loggedInUserId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMySelectedCrops(data);
      });
  }, [mySelectedCrops, loggedInUserId]);

  return (
    <div className="pt-24">
     
      <div className="flex justify-center flex-wrap my-4 gap-12">
        {mySelectedCrops.map((crop) => (
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
                  {crop.plantable_crop.name}
                </p>
              </div>

              <div className="flex justify-between mx-8">
                <p className="text-2xl text-white font-bold">
                  Maturity Period:
                </p>
                <p className="bg-white gap-2 px-4 py-2 rounded-xl font-bold text-[#3B841F] ">
                  {crop.plantable_crop.maturity_period}
                </p>
              </div>
              <div className="flex justify-between mx-8">
                <p className="text-xl text-white font-bold">
                  Cost of Production:
                </p>
                <p className="bg-white gap-2 px-4 py-2 rounded-xl font-bold text-[#3B841F] ">
                  {crop.plantable_crop.cost_to_produce_kg} KES
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
              <Link to={`/EachOfMySelectedCrop/${crop.id}`}>
                <button className="bg-white gap-2 px-6 py-4 rounded-xl font-bold text-[#3B841F] my-2 justify-center place-content-center flex text-md">
                  Get Started
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
            <button
              className="bg-red-500 rounded-b-3xl p-4 text-white font-semibold mt-2"
              onClick={() => removeFromMySelectedCrops(crop.id)}
            >
              Remove from the list of the crops I want to grow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySelectedCrops;
