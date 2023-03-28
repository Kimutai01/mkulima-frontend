import React from "react";
import splash from "../images/splash.png";
import arrow from "../images/arrow.png";

import { Link } from "react-router-dom";
const ProduceBuyerHero = () => {
  return (
    <div className=" px-8">
      <div className="flex justify-center gap-12">
        <div className="w-1/2 text-center flex justify-center flex-col">
          <h1 className="text-[#3B841F] text-5xl my-4">
            Buy Agricultural Produce
          </h1>

          <p className="font-italic">Buy produce directly from farmers</p>
          <p className="my-4 w-[80%] mx-auto">
            You can buy agricultural produce directly from farmers. You can
            choose from a wide variety of produce and buy it at the best prices.
            We have a wide range of produce, including maize, beans, and
            vegetables.
          </p>

          <p className="my-4 w-[80%] mx-auto">
            You will be helping farmers sell their produce and get the best
            prices for their produce. So why wait? Start exploring our website
          </p>

          <div className="flex justify-center">
            <Link to="/AllProducts">
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
          <img src={splash} alt="splash" className="h-[100vh]" />
        </div>
      </div>
    </div>
  );
};

export default ProduceBuyerHero;
