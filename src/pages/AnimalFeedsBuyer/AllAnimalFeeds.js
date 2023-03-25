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
      <h1 className="text-4xl text-center">All Animal Feeds In the market</h1>

      {allanimalfeeds.map((feed) => (
        <div>
          <h1>{feed.name}</h1>
          <p>{feed.description}</p>
          <p>{feed.price_per_kg}</p>
        </div>
      ))}
    </div>
  );
};

export default AllAnimalFeeds;
