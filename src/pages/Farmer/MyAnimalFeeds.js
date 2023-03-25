import React, { useState, useEffect } from "react";
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
    <div className="pt-24">
      <h1 className="text-4xl text-center">
        My Organic Animal Feeds in the Market
      </h1>
      {my_animal_feeds.length > 0 ? (
        my_animal_feeds.map((feed) => (
          <div>
            <h1>{feed.name}</h1>
            <p>{feed.description}</p>

            <button
              className="bg-red-500 p-4 mt-4"
              onClick={() => removeFromMyAnimalFeeds(feed.id)}
            >
              Remove this feed from the market
            </button>
          </div>
        ))
      ) : (
        <p>You have no feeds in the market yet</p>
      )}
    </div>
  );
};

export default MyAnimalFeeds;
