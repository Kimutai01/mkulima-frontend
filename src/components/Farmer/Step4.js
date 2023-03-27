import React from "react";

import step4 from "../images/step4.png";
import { IoMdCheckmarkCircle } from "react-icons/io";
const Step4 = () => {
  return (
    <div className="flex justify-center gap-8">
      <div className="w-1/2 text-center flex justify-center flex-col">
        <h1 className="text-[#3B841F] text-5xl my-4">Step 4 : Harvest</h1>

        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className="text-[#7DD959] text-2xl" />
          <p>Access Harvest Check-Ins and benchmark with existing data</p>
        </p>
        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className="text-[#7DD959] text-2xl" />
          <p>Connect with the market for your produce</p>
        </p>

        <p className="my-4 w-[80%] mx-auto flex gap-2">
          <IoMdCheckmarkCircle className=" text-[#7DD959] text-2xl" />
          <p>Connect with Animal Feed Suppliers to sell any spoiled produce</p>
        </p>
      </div>
      <div>
        <img src={step4} alt="step3" className="h-[75vh]" />
      </div>
    </div>
  );
};

export default Step4;
