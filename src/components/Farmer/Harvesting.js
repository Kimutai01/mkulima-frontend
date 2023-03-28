import React from "react";
import plantingcrop from "../images/plantingcrop.png";
import { useNavigate } from "react-router-dom";
const Harvesting = ({ my_selected_crop }) => {
  const navigate = useNavigate();
  return (
    <div className="  flex  flex-col gap-4 mx-auto">
      <div className="w-[80%] my-4 flex gap-12  justify-center mx-auto">
        <button
          className="bg-[#7DD959] font-semibold text-white px-4 py-2 flex justify-center gap-2 rounded-lg"
          onClick={() => {
            navigate("/AddProductsForSale");
          }}
        >
          Sell High Quality {my_selected_crop.name} Harvest to Market Directly
        </button>

        <button
          className="bg-[#7DD959] font-semibold text-white px-4 py-2 flex justify-center gap-2 rounded-lg"
          onClick={() => {
            navigate("/AddAnimalFeeds");
          }}
        >
          Sell Low Quality {my_selected_crop.name} Harvest to Livestock Farmers.
        </button>
      </div>
      <div className="w-[80%]  flex  justify-center mx-auto">
        <div className="w-[600px]  h-[500px] shadow-2xl shadow-gray-200 mx-auto hover:scale-105 cursor-pointer transform transition duration-500 ease-in-out">
          <div className="justify-start flex  pl-4 gap-12">
            <img src={plantingcrop} alt="plantingcrop" />
            <p className="text-2xl text-[#3B841F] flex items-center font-bold">
              Harvesting
            </p>
          </div>
          <p className="w-[80%] mt-4 mx-auto">{my_selected_crop.harvesting}</p>
        </div>
        <div className="w-[600px]  h-[500px] shadow-2xl shadow-gray-200 mx-auto hover:scale-105 cursor-pointer transform transition duration-500 ease-in-out">
          <div className="justify-start flex  pl-4 gap-12">
            <img src={plantingcrop} alt="plantingcrop" />
            <p className="text-2xl text-[#3B841F] flex items-center font-bold">
              Storage
            </p>
          </div>

          <p className="w-[80%] mt-4 mx-auto">{my_selected_crop.storage}</p>
        </div>
      </div>
    </div>
  );
};

export default Harvesting;
