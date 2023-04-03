import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import one from "../images/one.png";
import { HiLocationMarker } from "react-icons/hi";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
const SelectCrop = ({ loggedInUserId }) => {
  const [counties, setCounties] = useState([]);
  const [constituencies, setConstituencies] = useState([]);
  const [county, setCounty] = useState("");
  const [constituency, setConstituency] = useState("");
  const [selectedCountyName, setSelectedCountyName] = useState("");
  const [selectionDone, setSelectionDone] = useState(false);
  const [bestCrops, setBestCrops] = useState([]);
  const navigate = useNavigate();
  const [region, setRegion] = useState("");
  const addToMySelectedCrops = (id) => {
    fetch("http://127.0.0.1:3000/selected_crops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: Number(loggedInUserId),
        plantable_crop_id: Number(id),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          navigate("/MySelectedCrops");
        }, 2000);
      });
  };
  useEffect(() => {
    fetch("http://127.0.0.1:3000/counties")
      .then((response) => response.json())
      .then((data) => {
        setCounties(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/plantable_crops")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBestCrops(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/counties/${county}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.constituencies) {
          setConstituencies(data.constituencies);
          setSelectedCountyName(data.county.name);

          setRegion(data.county.region);
          console.log(data.county.region);
        }
      });
  }, [county]);
  return (
    <div className="pt-16 kulim-park">
      <div>
        <div className="text-xl font-bold text-center flex justify-center gap-2   text-[#3B841F] md:text-7xl ">
          <h1 className="justify-center edunswact flex items-center">Plan</h1>
          <img src={one} alt="one" className="w-20" />
        </div>

        <div className="flex kulim-park justify-center gap-2">
          <p className="text-3xl text-[#3B841F] font-bold ">
            Choose your Location
          </p>
          <p className="mb-2 text-gray-400 font-bold text-xl">
            ................
          </p>
          <p
            className={
              selectionDone
                ? "text-3xl text-[#3B841F] font-bold "
                : "text-3xl  text-gray-400 font-bold "
            }
          >
            Select Crop
          </p>
          <p className="mb-2 text-gray-400 font-bold text-xl">
            ................
          </p>
          <p className="text-3xl  font-bold text-gray-400">Advisory </p>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="mt-1 flex flex-col justify-center w-[300px]">
          <label className="text-xl my-2 flex gap-2 font-bold text-center justify-center text-[#3B841F]">
            <p className="flex justify-center place-items-center align-items">
              County
            </p>
            <HiLocationMarker className="text-[#3B841F]" />
          </label>
          <select
            className=" border border-[#3B841F] bg-white  text-sm rounded-lg block w-full p-3 focus:border-[#3B841F]"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          >
            <option value="">Select a county</option>
            {counties.map((county) => (
              <option value={county.id}>{county.name}</option>
            ))}
          </select>
        </div>
        <div>
          <div className="mt-1 w-[300px] flex flex-col justify-center">
            <label className="text-xl my-2 flex gap-2 font-bold text-center justify-center text-[#3B841F]">
              <p className="flex justify-center place-items-center align-items">
                Constituency
              </p>
              <HiLocationMarker className="text-[#3B841F]" />
            </label>
            <select
              className=" border border-[#3B841F]  text-sm rounded-lg bg-white block w-full p-3 focus:border-[#3B841F]"
              value={constituency}
              onChange={(e) => setConstituency(e.target.value)}
            >
              <option value="">Select a constituency</option>
              {constituencies.map((constituency) => (
                <option value={constituency.name}>{constituency.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="bg-[#7DD959] gap-2 px-4 py-2 rounded-2xl font-bold text-white mt-4 justify-center place-content-center flex text-md"
          onClick={() => {
            if (county) {
              setSelectionDone(true);
            }
          }}
        >
          Get Crops that Would do well here
        </button>
      </div>
      <p
        className=" my-2  w-[90%] mx-auto"
        style={{
          borderBottom: "12px solid  #3B841F",
        }}
      ></p>
      {selectionDone && (
        <div>
          <h1 className="text-3xl font-bold text-center text-[#3B841F] md:text-5xl ">
            Best Crops to Grow in {selectedCountyName}
          </h1>

          <p className="text-center">
            We've selected the Top Most Compatible crops according to your area
            looking at your soil type, rainfall, temperature and other factors.
          </p>
          <div className="flex justify-center flex-wrap my-4 gap-12">
            {selectionDone &&
              bestCrops.map(
                (crop) =>
                  crop.region === region && (
                    <div className="flex flex-col  rounded-3xl  gap-4 w-[350px] bg-[#3B841F]">
                      <img
                        src={crop.image}
                        alt={crop.name}
                        className="w-[350px] h-[300px] rounded-t-3xl object-cover"
                      />
                      <div className="p-2 flex flex-col gap-2">
                        <div className="flex justify-between  mx-8">
                          <p className="text-3xl text-white font-bold">
                            {crop.name}
                          </p>
                          <p
                            className="text-xl mt-1 cursor-pointer animate-bounce flex   px-2 font-bold bg-white  transition-all duration-500 rounded-xl"
                            onClick={() => addToMySelectedCrops(crop.id)}
                          >
                            Select
                          </p>
                        </div>

                        <div className="flex flex-col  mx-8">
                          <p className="text-sm text-white">
                            Cost of Production Per acre :
                          </p>
                          <p className="bg-white gap-2 px-4 text-sm py-2 rounded-xl text-[#3B841F] ">
                            {crop.cost_of_production_per_acre} KES
                          </p>
                        </div>
                        <div className="flex flex-col gap-2  mx-8">
                          <p className="text-sm text-white">
                            Current Market Price :
                          </p>
                          <div className="bg-white p-2 gap-2 px-4 flex flex-col gap-2 text-sm py-2 rounded-xl text-[#3B841F] ">
                            <p className="text-black">Retail Price per Kg :</p>
                            <div className="flex justify-between">
                              <p>{crop.current_retail_price} KES</p>
                              <div className="flex gap-1">
                                {crop.retail_diff > 0 ? (
                                  <VscTriangleUp size={20} className="text-green-500" />
                                ) : (
                                  <VscTriangleDown size={20} className="text-red-500" />
                                )}
                                 <p>
                                  {crop.retail_diff}
                                  {crop.retail_diff > 0
                                    ? "% rise"
                                    : "% drop"}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-2 gap-2 px-4 flex flex-col gap-2 text-sm py-2 rounded-xl text-[#3B841F] ">
                            <p className="text-black">
                              Wholesale Price per Kg :
                            </p>
                            <div className="flex justify-between">
                              <p>{crop.current_wholesale_price} KES</p>
                              <div className="flex gap-1">
                                {crop.wholesale_diff > 0 ? (
                                  <VscTriangleUp size={20} className="text-green-500" />
                                ) : (
                                  <VscTriangleDown size={20} className="text-red-500" />
                                )}
                                <p>
                                  {crop.wholesale_diff}
                                  {crop.wholesale_diff > 0
                                    ? "% rise"
                                    : "% drop"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectCrop;
