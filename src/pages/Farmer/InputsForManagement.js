import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const InputsForManagement = () => {
  const { name } = useParams();
  const [suggested_inputs, setSuggestedInputs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/input_supplies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuggestedInputs(data);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displaySuggestedInputs =
    suggested_inputs &&
    name &&
    suggested_inputs.map(
      (input) =>
        input.approved === true &&
        input.type_of_supply === "management_inputs" &&
        input.crop_for === name && (
          <div className="flex flex-col rounded-3xl  gap-4 w-[400px] bg-[#f9f9f9]">
            <img
              src={input.product_image}
              alt="tomatoes"
              className="w-[400px] h-[300px] rounded-t-3xl object-cover"
            />
            <div className="p-2 flex flex-col gap-2">
              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000] font-bold ">{input.name}</p>
              </div>

              <div className="flex justify-start flex-col  mx-8">
                <p className="font-bold text-gray-500 ">{input.description}</p>
              </div>
              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000]">Price</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                  {input.price_per_kg} per kg
                </p>
              </div>
              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000]">Location</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                  {input.location}
                </p>
              </div>

              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000]">Contact</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                  {input.contact}
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-gray-100 gap-2 px-6 py-4 rounded-xl font-bold text-[#3B841F] my-2 justify-center place-content-center flex text-md">
                Call To Order
              </button>
            </div>
          </div>
        )
    );
  return (
    <div className="pt-24">
      <h1 className="text-[#3B841F] text-center font-bold text-5xl">
        Management Inputs for {name}
      </h1>

      <p className="edunswact text-center text-xl text-xl">
        Here are some suggested inputs for {name} that you can buy from our
        local input suppliers.
      </p>
      <div className="flex justify-center flex-wrap my-4 gap-12">
        {displaySuggestedInputs}
      </div>
    </div>
  );
};

export default InputsForManagement;
