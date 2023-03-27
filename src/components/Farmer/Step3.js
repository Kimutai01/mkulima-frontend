import React from "react";
import step3 from "../images/step3.png";
import { IoMdCheckmarkCircle } from "react-icons/io";
const Step3 = () => {
  return (
    <div className="flex justify-center gap-12">
      <div className="w-1/2 text-center flex justify-center flex-col">
        <h1 className="text-[#3B841F] text-5xl my-4">Step 3 : Grow</h1>

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
      </div>
      <div>
        <img src={step3} alt="step3" className="h-[75vh]" />
      </div>
    </div>
  );
};

export default Step3;
