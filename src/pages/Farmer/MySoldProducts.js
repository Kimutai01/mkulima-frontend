import React, { useState, useEffect } from "react";

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
      <div className="flex justify-center flex-wrap my-4 gap-12">
        {my_sold_products.length > 0 ? (
          my_sold_products.map((crop) => (
            <div className="flex flex-col rounded-3xl  gap-4 w-[400px] bg-[#f9f9f9]">
              <img
                src="https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="tomatoes"
                className="w-[400px] h-[300px] rounded-t-3xl object-cover"
              />
              <div className="p-2 flex flex-col gap-2">
                <div className="mx-8">
                  <p className="text-xl text-[#000] text-center">{crop.name}</p>
                  <p className="text-center">{crop.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>You have no produce in the market yet</p>
        )}
      </div>
    </div>
  );
};

export default MySoldProducts;
