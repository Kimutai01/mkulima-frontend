import React from "react";

import step4 from "../images/step4.png";
import { IoMdCheckmarkCircle } from "react-icons/io";
import arrow from "../images/arrow.png";
import four from "../images/four.png";
import { Link } from "react-router-dom";

const Step4 = () => {
  return (
    <div className="flex kulim-park justify-center gap-8">
      <div className="w-1/2 text-center flex justify-center flex-col">
        <h1 className="text-[#3B841F] text-5xl font-bold my-4">Step 4 : Harvest</h1>
        <img src={four} alt="four" className="h-64 w-32 mx-auto" />


        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className="text-[#7DD959] text-2xl" />
          <p>Access Harvest Check-Ins and benchmark with existing data</p>
        </p>
        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className="text-[#7DD959] text-2xl" />
          <p>Connect with the market for your produce</p>
        </p>

        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className="text-[#7DD959] text-2xl" />
          <p>
            Connect with Animal Feed Suppliers to sell any spoilt produce
            <p className="text-start">
              reducing wastage and post harvest losses
            </p>
          </p>
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
        <img src={step4} alt="step3" className="h-[85vh]" />
      </div>
    </div>
  );
};

export default Step4;
