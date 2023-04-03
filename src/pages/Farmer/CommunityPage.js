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
      className="flex p-4 my-4 w-[200px]  rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer flex-col bg-[#93C572]"
      to={`/EachCommunity/${community.id}`}
    >
      <p>
        <span className="font-bold">Name:</span> {community.name}
      </p>
      <div className="flex flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          class="w-10 h-10 rounded-full border-2 border-white"
        />
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          class="w-10 h-10 rounded-full border-2 border-white -ml-3"
        />
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          class="w-10 h-10 rounded-full border-2 border-white -ml-3"
        />
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          class="w-10 h-10 rounded-full border-2 border-white -ml-3"
        />
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
