import React from "react";
import plantingcrop from "../images/plantingcrop.png";
import { useNavigate } from "react-router-dom";
const Harvesting = ({ my_selected_crop, language }) => {
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
          {language === "english"
            ? "Sell High Quality Harvest"
            : "Uuzaji wa Kuvuna cha Juu Sokoni"}
        </button>

        <button
          className="bg-[#7DD959] font-semibold text-white px-4 py-2 flex justify-center gap-2 rounded-lg"
          onClick={() => {
            navigate("/AddAnimalFeeds");
          }}
        >
          {language === "english"
            ? "Sell Residue to LiveStock Farmers"
            : "Uuzaji wa Mavuno mabaya kwa Wafugaji"}
        </button>
      </div>
      <div className="w-[80%]  flex  justify-center mx-auto">
        <div className="w-[600px]  h-[500px] shadow-2xl shadow-gray-200 mx-auto hover:scale-105 cursor-pointer transform transition duration-500 ease-in-out">
          <div className="justify-start flex  pl-4 gap-12">
            <img src={plantingcrop} alt="plantingcrop" />
            <p className="text-2xl text-[#3B841F] flex items-center font-bold">
              {language === "english" ? "Harvesting" : "Kuvuna"}
            </p>
          </div>
          <p className="w-[80%] mt-4 mx-auto">
            {language === "english"
              ? my_selected_crop.harvesting
              : my_selected_crop.uvunaji}
          </p>
        </div>
        <div className="w-[600px]  h-[500px] shadow-2xl shadow-gray-200 mx-auto hover:scale-105 cursor-pointer transform transition duration-500 ease-in-out">
          <div className="justify-start flex  pl-4 gap-12">
            <img src={plantingcrop} alt="plantingcrop" />
            <p className="text-2xl text-[#3B841F] flex items-center font-bold">
              {language === "english" ? "Storage" : "Kuhifadhi"}
            </p>
          </div>

          <p className="w-[80%] mt-4 mx-auto">
            {language === "english"
              ? my_selected_crop.storage
              : my_selected_crop.uhifadhi}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Harvesting;
