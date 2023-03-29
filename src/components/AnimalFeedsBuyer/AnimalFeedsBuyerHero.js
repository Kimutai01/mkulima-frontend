import React from "react";
import splash from "../images/splash.png";
import arrow from "../images/arrow.png";
import { Link } from "react-router-dom";
const AnimalFeedsBuyerHero = () => {
  return (
    <div className=" px-8 kulim-park">
      <div className="flex justify-center gap-12">
        <div className="w-1/2 text-center flex justify-center flex-col">
          <h1 className="text-[#3B841F] font-bold text-5xl my-4">
            Buy Organic Animal Feeds
          </h1>

          <p className="edunswact text-xl">Buy organic animal feeds directly from farmers</p>
          <p className="my-4 w-[80%] mx-auto">
            As a livestock farmer, you need to be sure that your animals are
            getting the best feed. This is why we've created mche, a platform
            that allows you to buy organic animal feeds from the comfort of your
            home. We have a wide range of organic feeds for different animals,
            including poultry, cattle, and goats.
          </p>

          <p className="my-4 w-[80%] mx-auto">
            You will take the load off farmers who have post harvest losses and
            help them sell their produce. You will also be able to get the best
            prices for your produce. So why wait? Start exploring our website
          </p>

          <div className="flex justify-center">
            <Link to="/AllAnimalFeeds">
              <button className="bg-[#7DD959] gap-2 px-8 py-4 text-xl rounded-2xl font-bold text-white mt-12 justify-center place-content-center flex text-md">
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
          <img src={splash} alt="splash" className="h-[100vh]" />
        </div>
      </div>
    </div>
  );
};

export default AnimalFeedsBuyerHero;
