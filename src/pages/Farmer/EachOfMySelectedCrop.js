import React , { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const EachOfMySelectedCrop = () => {
  const { id } = useParams();
  const [my_selected_crop, setMySelectedCrop] = useState({});
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/selected_crops/${id}`)
      .then((response) => response.json())
        .then((data) => {
        console.log(data);
        setMySelectedCrop(data);
      });
  }, []);

  return (
    <div className="pt-24">
          EachOfMySelectedCrop
          
            <p>{my_selected_crop.plantable_crop.name}</p>
      
      
    </div>
  );
};

export default EachOfMySelectedCrop;
