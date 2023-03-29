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
    <div className="pt-24 kulim-park">
      <h1 className="text-4xl text-[#3B841F] font-bold text-center">
        All Products
      </h1>
      <div className="flex justify-center flex-wrap my-4 gap-12">
        {allProducts.map((product) => (
          <div className="flex flex-col rounded-3xl  gap-4 w-[400px] bg-[#f9f9f9]">
            <img
              src="https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="tomatoes"
              className="w-[400px] h-[300px] rounded-t-3xl object-cover"
            />
            <div className="p-2 flex flex-col gap-2">
              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000] font-bold ">{product.name}</p>
              </div>

              <div className="flex justify-start flex-col  mx-8">
                <p className="font-bold text-gray-500 ">
                  {product.description}
                </p>
              </div>
              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000]">Price</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                  {product.price_per_kg} per kg
                </p>
              </div>
              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000]">Location</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                  {product.location}
                </p>
              </div>

              <div className="flex justify-between mx-8">
                <p className="text-xl text-[#000]">Contact</p>
                <p className="bg-[#3B841F] gap-2 px-4 py-2 rounded-xl text-white ">
                  {product.contact}
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-gray-100 gap-2 px-6 py-4 rounded-xl font-bold text-[#3B841F] my-2 justify-center place-content-center flex text-md">
                Call To Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
