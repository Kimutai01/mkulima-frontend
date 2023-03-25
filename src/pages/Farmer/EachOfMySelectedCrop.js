import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const EachOfMySelectedCrop = () => {
  const { id } = useParams();
  const [my_selected_crop, setMySelectedCrop] = useState({});
  const [suggested_inputs, setSuggestedInputs] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/selected_crops/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMySelectedCrop(data.plantable_crop);
      });
  }, [id]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/input_supplies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuggestedInputs(data);
      });
  }, []);

  const displaySuggestedInputs =
    suggested_inputs &&
    my_selected_crop &&
    suggested_inputs.map(
      (input) =>
        input.crop_for === my_selected_crop.name && (
          <div>
            <p>{input.name}</p>
            <p>{input.description}</p>
          </div>
        )
    );

  return (
    <div className="pt-24">
      EachOfMySelectedCrop
      {my_selected_crop && (
        <div>
          <p>{my_selected_crop.name}</p>
          <p>{my_selected_crop.site_selection} </p>
        </div>
      )}
      <p className="text-red-500">
        The following are the suggested inputs for {my_selected_crop.name}
      </p>
      {displaySuggestedInputs}
    </div>
  );
};

export default EachOfMySelectedCrop;
