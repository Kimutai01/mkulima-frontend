import React, { useState, useEffect } from "react";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/sold_products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);
  return (
    <div className="pt-24">
      <h1 className="text-4xl text-center">All Products</h1>

      {allProducts.map((product) => (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price_per_kg}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
