import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CommunityPage = ({ loggedInUserId }) => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/communities")
      .then((response) => response.json())
      .then((data) => {
        setCommunities(data);
      });
  }, []);

  const displayCommunities = communities.map((community) => (
    <Link
      className="flex bg-gray-100 p-4 my-4 w-[500px] rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer flex-col items-center justify-center"
      to={`/EachCommunity/${community.id}`}
    >
      <p>
        <span className="font-bold">Name:</span> {community.name}
      </p>
      <p>
        <span className="font-bold">Description:</span> {community.description}
      </p>
      <p>{community.total_users} members</p>
    </Link>
  ));

  return (
    <div className="pt-24">
      <h1 className="text-[#3B841F] text-center font-bold text-5xl">
        Farmer Communities
      </h1>

      <p className="edunswact text-center text-xl">
        Interact with other farmers in your community who grow the same crops as
        you.
      </p>

      <div className="flex flex-col items-center justify-center">
        {displayCommunities}
      </div>
    </div>
  );
};

export default CommunityPage;
