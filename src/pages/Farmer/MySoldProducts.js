import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const MySoldProducts = ({ loggedInUserId }) => {
  const [my_sold_products, setMySoldProducts] = useState([]);
  const removeFromMySoldProducts = (id) => {
    fetch(`http://127.0.0.1:3000/sold_products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) =>
        setMySoldProducts(
          my_sold_products.filter((sold_product) => sold_product.id !== id)
        )
      );
  };
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/my_sold_products/${loggedInUserId}`)
      .then((response) => response.json())
      .then((data) => {
        setMySoldProducts(data);
      });
  }, [my_sold_products, loggedInUserId]);

  return (
    <div className="pt-24">
      <h1 className="text-4xl text-center">My Products in the Market</h1>
      {my_sold_products.length > 0 ? (
        my_sold_products.map((crop) => (
          <div>
            <h1>{crop.name}</h1>
            <p>{crop.description}</p>

            <button
              className="bg-red-500 p-4 mt-4"
              onClick={() => removeFromMySoldProducts(crop.id)}
            >
              Remove this produce from the market
            </button>
          </div>
        ))
      ) : (
        <p>You have no produce in the market yet</p>
      )}
    </div>
  );
};

export default MySoldProducts;
