import React from "react";
import plantingcrop from "../images/plantingcrop.png";
import { useNavigate } from "react-router-dom";
const Management = ({ my_selected_crop }) => {
  const navigate = useNavigate();
  return (
    <div className="  flex  flex-col gap-4 mx-auto">
      <div className="w-[80%] mt-4 flex  justify-center mx-auto">
        <button
          className="bg-[#7DD959] font-semibold text-white px-4 py-2 flex justify-center gap-2 rounded-lg"
          onClick={() => {
            navigate(`/InputsForManagement/${my_selected_crop.name}`);
          }}
        >
          Buy Inputs for Management of {my_selected_crop.name}
        </button>
      </div>
      <div className="w-[80%] pt-4 flex  justify-center mx-auto">
        <div className="w-[600px]  h-[500px] shadow-2xl shadow-gray-200 mx-auto hover:scale-105 cursor-pointer transform transition duration-500 ease-in-out">
          <div className="justify-start flex  pl-4 gap-12">
            <img src={plantingcrop} alt="plantingcrop" />
            <p className="text-2xl text-[#3B841F] flex items-center font-bold">
              Crop Management
            </p>
          </div>
          <p className="w-[80%] mt-4 mx-auto">
            {my_selected_crop.crop_management}
          </p>
        </div>
        <div className="w-[600px]  h-[500px] shadow-2xl shadow-gray-200 mx-auto hover:scale-105 cursor-pointer transform transition duration-500 ease-in-out">
          <div className="justify-start flex  pl-4 gap-12">
            <img src={plantingcrop} alt="plantingcrop" />
            <p className="text-2xl text-[#3B841F] flex items-center font-bold">
              Water Management
            </p>
          </div>
          <p className="w-[80%] mt-4 mx-auto">
            {my_selected_crop.water_management}
          </p>

          <h1 className="text-center my-2 text-[#3B841F] text-2xl font-bold ">
            Weed Management
          </h1>

          <p className="w-[80%] mt-4 mx-auto">
            {my_selected_crop.weed_management}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Management;
