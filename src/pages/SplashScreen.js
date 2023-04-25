import React, { useState } from "react";
import { Link } from "react-router-dom";
import splash from "./images/splash.png";
import arrow from "./images/arrow.png";

const SplashScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative px-8">
      {showModal && (
        <div className="fixed kulim-park inset-0 bg-opacity-50 z-10 flex  items-center justify-center w-[200px] mx-auto">
          <div className="bg-white p-12 rounded-lg">
            <div className="flex justify-end">
              <button
                className="bg-[#7DD959] text-white px-4 py-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
            </div>

            <h2 className="text-5xl font-bold mb-2 text-[#3B841F] text-center">
              Not yet registered?
            </h2>
            <p className="mb-2 text-center">
              To enjoy full benefits of our website, you need to register first.
            </p>

            <div className="flex justify-center">
              <Link to="/SignUp">
                <button
                  className="bg-[#7DD959] gap-2 px-2 py-2 w-[150px] rounded-2xl font-bold text-white mt-2 justify-center place-content-center flex text-xl"
                  onClick={() => setShowModal(true)}
                >
                  Sign Up
                  <div className="flex mt-2 ">
                    <img src={arrow} alt="arrow" className="h-[15px]" />
                    <img src={arrow} alt="arrow" className="h-[15px]" />
                  </div>
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Link to="/Login">
                <button
                  className="bg-[#7DD959] gap-2 px-2 py-2  w-[150px]  rounded-2xl font-bold text-white mt-2 justify-center place-content-center flex text-xl"
                  onClick={() => setShowModal(true)}
                >
                  Login
                  <div className="flex mt-2 ">
                    <img src={arrow} alt="arrow" className="h-[15px]" />
                    <img src={arrow} alt="arrow" className="h-[15px]" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div
        className={`absolute inset-0 filter ${
          showModal ? "blur-sm" : "blur-none"
        }`}
      >
        <div className="flex flex-col-reverse md:flex-row md:justify-center gap-12">
          <div className="w-[100%] md:w-1/2 text-center flex justify-center flex-col">
            <h1 className="text-[#3B841F] text-6xl md:text-7xl my-4 kulim-park font-bold">
              Welcome to
            </h1>

            <p className="edunswact text-2xl md:text-3xl">
              Your ultimate farming support guide!
            </p>
            <p className="my-4 w-[80%] mx-auto kulim-park">
              Whether you're a beginner looking to get into agriculture, trying
              to figure out how to grow a specific crop, or in need of
              fertilizers, pesticides, or hired tractors, we've got you covered.
              But our support doesn't stop there.
            </p>

            <p className="my-4 w-[80%] mx-auto kulim-park">
              We can also help you with tips on how to deal with excess or
              spoils and guide you on how to sell your produce. With mche,
              you'll have access to all the information and resources you need
              to succeed in farming. So why wait? Start exploring our website
              today and take your farming journey to the next level!
            </p>

            <div className="flex justify-center">
              <button
                className="bg-[#7DD959] gap-2 px-12 py-4 rounded-2xl font-bold text-white mt-12 justify-center place-content-center flex text-xl"
                onClick={() => setShowModal(true)}
              >
                Learn More
                <div className="flex mt-2 ">
                  <img src={arrow} alt="arrow" className="h-[15px]" />
                  <img src={arrow} alt="arrow" className="h-[15px]" />
                </div>
              </button>
            </div>
          </div>
          <div className="">
            <img src={splash} alt="splash" className="md:h-[100vh]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
