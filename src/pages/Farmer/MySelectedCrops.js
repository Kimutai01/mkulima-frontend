import React, { useState, useEffect } from "react";

const MySelectedCrops = ({ loggedInUserId }) => {
  const [mySelectedCrops, setMySelectedCrops] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/my_selected_crops/${loggedInUserId}`)
      .then((response) => response.json())
        .then((data) => {
          console.log(data);
        setMySelectedCrops(data);
      });
  }, [loggedInUserId]);

  return (
    <div className="pt-24">
      MySelectedCrops
      {mySelectedCrops.length > 0 ? (
        mySelectedCrops.map((crop) => (
          <div>
            <p>{crop.plantable_crop.name}</p>
          </div>
        ))
      ) : (
        <p>You have not selected any crops yet</p>
      )}
    </div>
  );
};

export default MySelectedCrops;
