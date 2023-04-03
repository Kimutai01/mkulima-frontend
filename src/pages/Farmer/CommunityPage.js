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
      className="flex p-4 kulim-park my-4 w-[300px] h-[200px]  text-gray-100 rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer flex-col bg-[#7DD95A]"
      to={`/EachCommunity/${community.id}`}
    >
      <p>
        <span className="font-bold">{community.name}</span>
      </p>
      <p>
        <span className="edunswact text-black">{community.description}</span>
      </p>
      <div className="flex flex-row">
        {community.users.map((user) => (
          <div className="flex justify-center relative bg-gradient-to-b  from-blue-500 overflow-hidden rounded-full w-12 h-12  mt-5">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={user.profile_picture}
              alt={user.username}
            />
          </div>
        ))}
      </div>
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

      <div className="items-center justify-center grid grid-cols-3 px-60 ">
        {displayCommunities}
      </div>
    </div>
  );
};

export default CommunityPage;
