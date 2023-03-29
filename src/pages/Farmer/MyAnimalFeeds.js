import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
const MyAnimalFeeds = ({ loggedInUserId }) => {
  const [my_animal_feeds, setMyAnimalFeeds] = useState([]);
  const removeFromMyAnimalFeeds = (id) => {
    fetch(`http://127.0.0.1:3000/animal_feeds/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) =>
        setMyAnimalFeeds(
          my_animal_feeds.filter((animal_feed) => animal_feed.id !== id)
        )
      );
  };
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/my_animal_feeds/${loggedInUserId}`)
      .then((response) => response.json())
      .then((data) => {
        setMyAnimalFeeds(data);
      });
  }, [my_animal_feeds, loggedInUserId]);

  return (
    <div className="pt-24 kulim-park">
      <h1 className="text-4xl text-[#3B841F] text-center">
        My Organic Animal Feeds in the Market
      </h1>
      <div className="flex justify-center flex-wrap my-4 gap-12">
        {my_animal_feeds.length > 0 ? (
          my_animal_feeds.map((feed) => (
            <div className="flex flex-col rounded-3xl  gap-4 w-[400px] bg-[#f9f9f9]">
              <img
                src="https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="tomatoes"
                className="w-[400px] h-[300px] rounded-t-3xl object-cover"
              />
              <div className="p-2 flex flex-col gap-2">
                <div className="flex justify-between mx-8">
                  <p className="text-xl text-[#000] font-bold ">{feed.name}</p>
                  <MdDeleteForever
                    className="text-3xl text-[#3B841F] cursor-pointer"
                    onClick={() => removeFromMyAnimalFeeds(feed.id)}
                  />
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
                  <p className="text-xl text-[#000]">Your Location</p>
                  <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                    {feed.location}
                  </p>
                </div>

                <div className="flex justify-between pb-4 mx-8">
                  <p className="text-xl text-[#000]">Your Contact</p>
                  <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                    {feed.contact}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>You have no feeds in the market yet</p>
        )}
      </div>
    </div>
  );
};

export default MyAnimalFeeds;
