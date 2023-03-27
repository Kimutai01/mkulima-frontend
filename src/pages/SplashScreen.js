import React from "react";
import { Link } from "react-router-dom";
import splash from "./images/splash.png";
import arrow from "./images/arrow.png";
const SplashScreen = () => {
  return (
    <div className=" px-8">
      <div className="flex justify-center gap-12">
        <div className="w-1/2 text-center flex justify-center flex-col">
          <h1 className="text-[#3B841F] text-5xl my-4">Welcome to</h1>

          <p className="font-italic">Your ultimate farming support guide!</p>
          <p className="my-4 w-[80%] mx-auto">
            Whether you're a beginner looking to get into agriculture, trying to
            figure out how to grow a specific crop, or in need of fertilizers,
            pesticides, or hired tractors, we've got you covered. But our
            support doesn't stop there.
          </p>

          <p className="my-4 w-[80%] mx-auto">
            We can also help you with tips on how to deal with excess or spoils
            and guide you on how to sell your produce. With mche, you'll have
            access to all the information and resources you need to succeed in
            farming. So why wait? Start exploring our website today and take
            your farming journey to the next level!
          </p>

          <div className="flex justify-center">
            <button className="bg-[#7DD959] gap-2 px-4 py-2 rounded-2xl font-bold text-white mt-12 justify-center place-content-center flex text-md">
              Learn More
              <div className="flex mt-2 ">
                <img src={arrow} alt="arrow" className="h-[10px]" />
                <img src={arrow} alt="arrow" className="h-[10px]" />
              </div>
            </button>

            <Link to="/login">Logim</Link>

            <Link to="/signup">SIgn Up</Link>
          </div>
        </div>
        <div>
          <img src={splash} alt="splash" className="h-[100vh]" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
