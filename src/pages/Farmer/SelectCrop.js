import React, { useState, useEffect } from "react";
import BestCropsToGrow from "../../components/Farmer/BestCropsToGrow";
import one from "../images/one.png";
import { HiLocationMarker } from "react-icons/hi";
const SelectCrop = ({ loggedInUserId }) => {
  const [counties, setCounties] = useState([]);
  const [constituencies, setConstituencies] = useState([]);
  const [county, setCounty] = useState("");
  const [constituency, setConstituency] = useState("");
  const [selectedCountyName, setSelectedCountyName] = useState("");
  const [selectedCountyId, setSelectedCountyId] = useState("");
  const [selectionDone, setSelectionDone] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/counties")
      .then((response) => response.json())
      .then((data) => {
        setCounties(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/counties/${county}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSelectedCountyName(data.county.name);
        setSelectedCountyId(data.county.id);
        if (data.constituencies) {
          setConstituencies(data.constituencies);
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

        <div className="flex kulim-park justify-center gap-4">
          <p className="text-3xl text-[#3B841F] ">Choose your Location</p>
          <p className="mb-2 text-gray-400 text-xl">................</p>
          <p
            className={
              selectionDone
                ? "text-3xl text-[#3B841F] "
                : "text-3xl  text-gray-400 "
            }
          >
            Select Crop
          </p>
          <p className="mb-2 text-gray-400 text-xl">................</p>
          <p className="text-3xl  text-gray-400">Advisory </p>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="mt-1 flex flex-col justify-center w-[300px]">
          <label className="text-xl my-2 flex gap-2 font-bold text-center justify-center text-[#3B841F]">
            <p className="flex justify-center place-items-center align-items">County</p>
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
            <p className="flex justify-center place-items-center align-items">Constituency</p>
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
        <BestCropsToGrow
          selectedCounty={selectedCountyId}
          selectedCountyName={selectedCountyName}
          loggedInUserId={loggedInUserId}
        />
      )}
    </div>
  );
};

export default SelectCrop;
