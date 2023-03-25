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
          <p> Name of the crop: {my_selected_crop.name}</p>
          <p> Cost of production: {my_selected_crop.cost_to_produce_kg}</p>
          <p> Price per kg: {my_selected_crop.price_per_kg}</p>
          <p>Site Selection: {my_selected_crop.site_selection}</p>
          <p>Maturation time: {my_selected_crop.maturity_period}</p>
          <p>Land preparation: {my_selected_crop.land_preparation}</p>
          <p>Pre Planting: {my_selected_crop.pre_planting}</p>
          <p>Planting: {my_selected_crop.planting}</p>
          <p>varieties: {my_selected_crop.varieties}</p>
          <p>Post planting: {my_selected_crop.post_planting}</p>
          <p>Water management: {my_selected_crop.water_management}</p>
          <p>crop management: {my_selected_crop.crop_management}</p>
          <p>Harvesting: {my_selected_crop.harvesting}</p>
          <p>Post Harvesting: {my_selected_crop.post_harvesting_handling}</p>


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
