import React from "react";
import plantingcrop from "../images/plantingcrop.png";
import { useNavigate } from "react-router-dom";

const Planting = ({ my_selected_crop, language }) => {
  const navigate = useNavigate();
  return (
    <div >
      <h1 className="text-3xl text-center text-[#3B841F] font-bold">
        {language === "english" ? `The best variety to grow is ${my_selected_crop.variety}` : `Kaboni bora zaidi kuzalisha ni ${my_selected_crop.variety}`}
      </h1>
      <div className="  flex pt-2 justify-between flex-col gap-8 mx-auto">
        <div className="w-[80%] py-4 flex  justify-center mx-auto">
          <button
            className="bg-[#7DD959] font-semibold text-white px-4 py-2 flex justify-center gap-2 rounded-lg"
            onClick={() => {
              navigate(`/InputsForCrop/${my_selected_crop.name}`);
            }}
          >
            {language === "english"
              ? "Buy Planting Inputs eg fertilizers"
              : "Nunua Uingizaji wa kupanda kwa mfano mbolea"}
          </button>
        </div>
        <div className="w-[80%] pt-4 flex  justify-center mx-auto">
          <div className="w-[600px]  h-[500px] shadow-2xl shadow-gray-200 mx-auto hover:scale-105 cursor-pointer transform transition duration-500 ease-in-out">
            <div className="justify-start flex  pl-4 gap-12">
              <img src={plantingcrop} alt="plantingcrop" />
              <p className="text-2xl text-[#3B841F] flex items-center font-bold">
                {language === "english"
                  ? "Pre-Planting"
                  : "Kupanga kabla ya kupanda"}
              </p>
            </div>
            <p className="w-[80%] mt-4 mx-auto">
              {language === "english"
                ? my_selected_crop.pre_planting
                : my_selected_crop.upandaji_wa_kabla}
            </p>
          </div>
          <div className="w-[600px]  h-[500px] shadow-2xl shadow-gray-200 mx-auto hover:scale-105 cursor-pointer transform transition duration-500 ease-in-out">
            <div className="justify-start flex  pl-4 gap-12">
              <img src={plantingcrop} alt="plantingcrop" />
              <p className="text-2xl text-[#3B841F] flex items-center font-bold">
                {language === "english" ? "Planting" : "Kupanda"}
              </p>
            </div>
            <p className="w-[80%] mt-4 mx-auto">
              {language === "english"
                ? my_selected_crop.planting
                : my_selected_crop.kupanda}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planting;
