import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const MySelectedCrops = ({ loggedInUserId }) => {
  const [mySelectedCrops, setMySelectedCrops] = useState([]);
  const removeFromMySelectedCrops = (id) => {
    fetch(`http://127.0.0.1:3000/selected_crops/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) =>
        setMySelectedCrops(
          mySelectedCrops.filter((selectedcrop) => selectedcrop.id !== id)
        )
      );
  };
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/my_selected_crops/${loggedInUserId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMySelectedCrops(data);
      });
  }, [mySelectedCrops, loggedInUserId]);

  return (
    <div className="pt-24">
      MySelectedCrops
      {mySelectedCrops.length > 0 ? (
        mySelectedCrops.map((crop) => (
          <div>
            <p>{crop.plantable_crop.name}</p>

            <Link
              className="bg-blue-400 p-4"
              to={`/EachOfMySelectedCrop/${crop.id}`}
            >
              Learn Everything about {crop.plantable_crop.name}
            </Link>

            <button
              className="bg-red-500 p-4 mt-4"
              onClick={() => removeFromMySelectedCrops(crop.id)}
            >
              Remove from the list of the crops I want to grow
            </button>
          </div>
        ))
      ) : (
        <p>You have not selected any crops yet</p>
      )}
    </div>
  );
};

export default MySelectedCrops;
