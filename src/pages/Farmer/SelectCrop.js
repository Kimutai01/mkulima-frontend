import React, { useState, useEffect } from "react";
import BestCropsToGrow from "../../components/Farmer/BestCropsToGrow";
const SelectCrop = () => {
  const [counties, setCounties] = useState([]);
  const [constituencies, setConstituencies] = useState([]);
  const [county, setCounty] = useState("");
  const [constituency, setConstituency] = useState("");

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
        if (data.constituencies) {
          setConstituencies(data.constituencies);
        }
      });
  }, [county]);
  return (
    <div className="pt-24">
      SelectCrop
      <div>
        <label className="block text-sm font-medium te/xt-gray-700">
          Select a County
        </label>
        <div className="mt-1">
          <select
            className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          >
            <option value="">Select a county</option>
            {counties.map((county) => (
              <option value={county.id}>{county.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium te/xt-gray-700">
          Select a Constituency
        </label>
        <div className="mt-1">
          <select
            className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
      <button>Get the Best Crops to grow in this area</button>
      <BestCropsToGrow />
    </div>
  );
};

export default SelectCrop;
