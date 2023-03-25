import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const EachOfBestCropToGrow = ({ loggedInUserId }) => {
  const { id } = useParams();
  const [eachCrop, setEachCrop] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/plantable_crops/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEachCrop(data);
      });
  }, [id]);

  const addToMySelectedCrops = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/selected_crops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: Number(loggedInUserId),
        plantable_crop_id: Number(id),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setTimeout(() => {
          navigate("/MySelectedCrops");
        }, 2000);
      });
  };

  return (
    <div className="pt-24">
      <p>{eachCrop.name}</p>
      <button
        className="bg-red-500 p-4 mt-4"
        onClick={(e) => addToMySelectedCrops(e)}
      >
        Add to the list of the crops I want to grow
      </button>
    </div>
  );
};

export default EachOfBestCropToGrow;
