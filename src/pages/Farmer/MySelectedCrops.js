import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import greenarrow from "../images/greenarrow.png";
import { BsFillBookmarkXFill } from "react-icons/bs";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 kulim-park">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#3B841F] font-bold text-5xl">My Selected Crops</h1>

        <p className="text-xl edunswact ">
          Here are the crops you have selected to grow. You can remove them from
          this list if you change your mind. To read more about a crop, click on
          the "Get Started" button.
        </p>
      </div>

      <div className="flex justify-center flex-wrap my-4 gap-12">
        {mySelectedCrops.map((crop) => (
          <div className="flex flex-col rounded-3xl  gap-4 w-[400px] bg-[#f9f9f9]">
            <img
              src={crop.plantable_crop.image}
              className="w-[400px] h-[300px] rounded-t-3xl object-cover"
              alt={crop.plantable_crop.name}
            />
            <div className="p-2 flex flex-col gap-2">
              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000] ">
                  {crop.plantable_crop.name}
                </p>
                <BsFillBookmarkXFill
                  onClick={() => removeFromMySelectedCrops(crop.id)}
                  size={30}
                  className="text-[#3B841F] text-xl cursor-pointer hover:scale-110 transform transition duration-500 ease-in-out"
                />
              </div>

              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000] ">Maturity Period:</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl font-bold text-white ">
                  {crop.plantable_crop.maturity_period}
                </p>
              </div>
              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000]">Cost of Production:</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                  {crop.plantable_crop.cost_of_production_per_acre} KES
                </p>
              </div>

              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000]">Price Per Kg:</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                  {crop.plantable_crop.price_per_kg} KES
                </p>
              </div>
            </div>

            <div className="flex pb-4 justify-center">
              <Link to={`/EachOfMySelectedCrop/${crop.id}`}>
                <button className="bg-gray-100 gap-2 px-6 py-4 rounded-xl font-bold text-[#3B841F] my-2 justify-center place-content-center flex text-md">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySelectedCrops;
