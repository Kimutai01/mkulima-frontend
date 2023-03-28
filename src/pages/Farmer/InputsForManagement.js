import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const InputsForManagement = () => {
  const { name } = useParams();
  const [suggested_inputs, setSuggestedInputs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/input_supplies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuggestedInputs(data);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const displaySuggestedInputs =
    suggested_inputs &&
    name &&
    suggested_inputs.map(
      (input) =>
        input.crop_for === name && (
          <div>
            <p>{input.name}</p>
            <p>{input.description}</p>
          </div>
        )
    );
  return (
    <div className="pt-24">
      <h1 className="text-4xl text-center">Inputs for {name}</h1>
      {displaySuggestedInputs}
    </div>
  );
};

export default InputsForManagement;
