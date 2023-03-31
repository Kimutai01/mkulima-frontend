import React from "react";
import step3 from "../images/step3.png";
import { IoMdCheckmarkCircle } from "react-icons/io";
import arrow from "../images/arrow.png";
import three from "../images/three.png";

import { Link } from "react-router-dom";
const Step3 = () => {
  return (
    <div className="flex kulim-park justify-center gap-12">
      <div className="w-1/2 text-center flex justify-center flex-col">
        <h1 className="text-[#3B841F] font-bold text-5xl my-4">Step 3 : Grow</h1>
        <img src={three} alt="three" className="h-56 w-32 mx-auto" />


        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className="text-[#7DD959] text-2xl" />
          <p>Access Regular Plant Check-Ins and benchmark with existing data</p>
        </p>
        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className="text-[#7DD959] text-2xl" />
          <p>
            Choose suppliers for your Planting List e.g fertilizers, pesticides
          </p>
        </p>

        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className=" text-[#7DD959] text-2xl" />
          <p>Get Additional Advisory support the planting process</p>
        </p>

        <div className="flex justify-center">
          <Link to="/SelectCrop">
            <button className="bg-[#7DD959] gap-2  px-8 py-4 text-xl rounded-2xl font-bold text-white mt-12 justify-center place-content-center flex text-md">
              Get Started
              <div className="flex mt-2 ">
                <img src={arrow} alt="arrow" className="h-[13px]" />
                <img src={arrow} alt="arrow" className="h-[13px]" />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src={step3} alt="step3" className="h-[85vh]" />
      </div>
    </div>
  );
};

export default Step3;
