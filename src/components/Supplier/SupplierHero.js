import React from "react";
import { Link } from "react-router-dom";
import splash from "../images/splash.png";
import arrow from "../images/arrow.png";
const SupplierHero = () => {
  return (
    <div className=" px-8">
      <div className="flex justify-center gap-12">
        <div className="w-1/2 text-center flex justify-center flex-col">
          <h1 className="text-[#3B841F] font-bold text-5xl my-4">
            Sell Agricultural Input supplies
          </h1>

          <p className="edunswact text-2xl">
            Sell your agricultural inputs directly to farmers
          </p>
          <p className="my-4 w-[80%] mx-auto">
            You can sell your agricultural inputs directly to farmers. You can
            choose from a wide variety of inputs and sell them at the best
            prices. You can provide fertilizers, seeds, and other agricultural
            inputs.
          </p>

          <p className="my-4 w-[80%] mx-auto">
            You will be helping farmers grow their crops and produce the best
            quality of crops. So why wait? Start exploring our website
          </p>

          <div className="flex justify-center">
            <Link to="/AddSuppliedInput">
              <button className="bg-[#7DD959] gap-2 px-8 py-4  rounded-2xl font-bold text-white mt-12 justify-center place-content-center flex text-md">
                Add Input
                <div className="flex mt-2 ">
                  <img src={arrow} alt="arrow" className="h-[13px]" />
                  <img src={arrow} alt="arrow" className="h-[13px]" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={splash} alt="splash" className="h-[100vh]" />
        </div>
      </div>
    </div>
  );
};

export default SupplierHero;
