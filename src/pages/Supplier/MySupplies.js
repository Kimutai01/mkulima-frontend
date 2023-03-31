import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
const MySupplies = ({ loggedInUserId }) => {
  const [mySupplies, setMySupplies] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/my_supplies/${loggedInUserId}`)
      .then((response) => response.json())
      .then((data) => {
        setMySupplies(data);
      });
  }, [loggedInUserId, mySupplies]);

  const removeFromMySupplies = (id) => {
    fetch(`http://127.0.0.1:3000/input_supplies/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) =>
        setMySupplies(mySupplies.filter((supply) => supply.id !== id))
      );
  };

  return (
    <div className="pt-24 kulim-park">
      <h1 className="text-3xl font-bold text-center text-[#3B841F]">
        My Supplies
      </h1>
      {mySupplies.length > 0 ? (
        <div className="flex justify-center flex-wrap my-4 gap-12">
          {mySupplies &&
            mySupplies.map((supply) => (
              <div className="flex flex-col rounded-3xl  gap-4 w-[400px] bg-[#f9f9f9]">
                <img
                  src={supply.product_image}
                  alt="tomatoes"
                  className="w-[400px] h-[300px] rounded-t-3xl object-cover"
                />
                <div className="p-2 flex flex-col gap-2">
                  <div className="flex justify-between mx-8">
                    <p className="text-xl text-[#000] font-bold ">
                      {supply.name}
                    </p>
                    <MdDeleteForever
                      className="text-3xl text-[#3B841F] cursor-pointer"
                      onClick={() => removeFromMySupplies(supply.id)}
                    />
                  </div>

                  <div className="flex justify-start flex-col  mx-8">
                    <p className="font-bold text-gray-500 ">
                      {supply.description}
                    </p>
                  </div>
                  <div className="flex justify-between mx-8">
                    <p className="text-xl text-[#000]">Price</p>
                    <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                      {supply.price_per_kg} per kg
                    </p>
                  </div>
                  <div className="flex justify-between mx-8">
                    <p className="text-xl text-[#000]">My Location</p>
                    <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                      {supply.location}
                    </p>
                  </div>

                  <div className="flex justify-between pb-4 mx-8">
                    <p className="text-xl text-[#000]">My Contact</p>
                    <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                      {supply.contact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="flex justify-center mt-12">
          <p className="text-2xl font-bold text-center ">
            You have no supplies yet
          </p>
        </div>
      )}
    </div>
  );
};

export default MySupplies;
