import React, { useState, useEffect } from "react";

const AllAnimalFeeds = () => {
  const [allanimalfeeds, setAllAnimalFeeds] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/animal_feeds")
      .then((response) => response.json())
      .then((data) => {
        setAllAnimalFeeds(data);
      });
  }, []);
  return (
    <div className="pt-24">
      <h1 className="text-[#3B841F] text-center font-bold text-5xl">
        All Organic Animal Feeds
      </h1>

      <p className="edunswact text-center text-xl">
        We have a wide range of organic animal feeds for your livestock. Help reduce wastage
        and post harvest losses by buying organic animal feeds from our local farmers .
      </p>

      <div className="flex justify-center flex-wrap my-4 gap-12">
        {allanimalfeeds.map((feed) => (
          feed.approved === true && 
          <div className="flex flex-col rounded-3xl  gap-4 w-[400px] bg-[#f9f9f9]">
            <img
              src={feed.product_image}
              alt="tomatoes"
              className="w-[400px] h-[300px] rounded-t-3xl object-cover"
            />
            <div className="p-2 flex flex-col gap-2">
              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000] font-bold ">{feed.name}</p>
              </div>

              <div className="flex justify-start flex-col  mx-8">
                <p className="font-bold text-gray-500 ">{feed.description}</p>
              </div>
              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000]">Price</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                  {feed.price_per_kg} per kg
                </p>
              </div>
              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000]">Location</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                  {feed.location}
                </p>
              </div>

              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000]">Contact</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                  {feed.contact}
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-gray-100 gap-2 px-6 py-4 rounded-xl font-bold text-[#3B841F] my-2 justify-center place-content-center flex text-md">
                Call To Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAnimalFeeds;
