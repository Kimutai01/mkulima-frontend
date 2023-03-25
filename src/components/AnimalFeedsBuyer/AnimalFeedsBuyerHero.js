import React from "react";
import { Link } from "react-router-dom";
const AnimalFeedsBuyerHero = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col justify-center items-center">
      Show farmer importance of using organic waste as manure and also how to
      use it as animal feeds. Explain also how it will reduce post harvest
      losses to be made by farmers
      <button className="bg-red-500 p-4 mt-12">
        <Link to="/AllAnimalFeeds">See all Organic Animal Feeds</Link>
      </button>
    </div>
  );
};

export default AnimalFeedsBuyerHero;
