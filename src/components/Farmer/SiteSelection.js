import React from "react";
import plantingcrop from "../images/plantingcrop.png";

const SiteSelection = ({ my_selected_crop }) => {
  return (
    <div className="w-[80%]  pt-32 flex  justify-center mx-auto">
      <div className="w-[600px]  h-[500px] shadow-2xl shadow-gray-200 mx-auto hover:scale-105 cursor-pointer transform transition duration-500 ease-in-out">
        <div className="justify-start flex  pl-4 gap-12">
          <img src={plantingcrop} alt="plantingcrop" />
          <p className="text-2xl text-[#3B841F] flex items-center font-bold">
            Site Selection
          </p>
        </div>
        <p className="w-[80%] mt-4 mx-auto">
          {my_selected_crop.site_selection}
        </p>
      </div>
      <div className="w-[600px]  h-[500px] shadow-2xl shadow-gray-200 mx-auto hover:scale-105 cursor-pointer transform transition duration-500 ease-in-out">
        <div className="justify-start flex  pl-4 gap-12">
          <img src={plantingcrop} alt="plantingcrop" />
          <p className="text-2xl text-[#3B841F] flex items-center font-bold">
            Land Preparation
          </p>
        </div>
        <p className="w-[80%] mt-4 mx-auto">
          {my_selected_crop.land_preparation}
        </p>
      </div>
    </div>
  );
};

export default SiteSelection;
