import React from "react";
import step2 from "../images/step2.png";
import { IoMdCheckmarkCircle } from "react-icons/io";
import arrow from "../images/arrow.png";
import two from "../images/two.png";

import { Link } from "react-router-dom";
const Step2 = () => {
  return (
    <div className="flex justify-center gap-12">
      <div className="w-1/2 text-center flex justify-center flex-col">
        <h1 className="text-[#3B841F] text-5xl my-4">Step 2 : Plant</h1>

        <img src={two} alt="two" className="h-64 w-32 mx-auto" />

        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className="text-[#7DD959] text-2xl" />
          <p>Choose Your Crop</p>
        </p>
        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className="text-[#7DD959] text-2xl" />
          <p>
            Choose suppliers for your Planting List
            <p className="text-start">e.g seeds, fertilizers, tractors etc.</p>
          </p>
        </p>

        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className=" text-[#7DD959] text-2xl" />
          <p>Get Additional Advisory support on how and when to plant</p>
        </p>

        <div className="flex justify-center">
          <Link to="/SelectCrop">
            <button className="bg-[#7DD959] gap-2 px-4 py-2 rounded-2xl font-bold text-white mt-12 justify-center place-content-center flex text-md">
              Get Started
              <div className="flex mt-2 ">
                <img src={arrow} alt="arrow" className="h-[10px]" />
                <img src={arrow} alt="arrow" className="h-[10px]" />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src={step2} alt="step2" className="h-[75vh]" />
      </div>
    </div>
  );
};

export default Step2;
