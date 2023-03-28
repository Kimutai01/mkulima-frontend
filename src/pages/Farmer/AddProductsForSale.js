import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const AddProductsForSale = ({ loggedInUserId }) => {
  console.log(loggedInUserId);
  const navigate = useNavigate();
  const reference = useRef();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [product_image, setProductImage] = useState("");
  const [price_per_kg, setPricePerKg] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const uploadProductPicture = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setProductImage(data.secure_url);
      });
  };

  const AddSupplyFunctionality = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/sold_products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        product_image: product_image,
        price_per_kg: price_per_kg,
        location: location,
        contact: contact,
        user_id: Number(loggedInUserId),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          data.error.forEach((error) => {
            toast.error(error, {
              position: "top-center",
              autoClose: 6000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
        } else {
          toast.success("Your product  has been added to the market!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/");
          }, 3500);
        }
      });
  };
  return (
    <div className="pt-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#3B841F] text-5xl">
          Add your products for sale here.
        </h1>

        <p>
          Make some money by selling your products here. Buyers will be able to
          contact you directly and help your business grow .
        </p>
      </div>
      <div className="md:max-w-[50%] w-[80%] mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={AddSupplyFunctionality}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Crop Image
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="text-sm text-gray-600" ref={reference}>
                        <label
                          for="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span className="text-[#3B841F]">
                            Add your product's image
                          </span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            accept="image/*"
                            type="file"
                            className="sr-only"
                            onChange={(e) =>
                              uploadProductPicture(e.target.files)
                            }
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Name of Crop
                  </label>
                  <div className="mt-1">
                    <input
                      type={"text"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="DAP Fertilizer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Description of the Crop You are Selling
                  </label>
                  <div className="mt-1">
                    <textarea
                      type={"text"}
                      className=" border border-gray-300 h-[100px]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="DAP Fertilizer"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Price per kg in KES
                  </label>
                  <div className="mt-1">
                    <input
                      type={"number"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="2000"
                      value={price_per_kg}
                      onChange={(e) => setPricePerKg(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Where are you located?
                  </label>
                  <div className="mt-1">
                    <input
                      type={"text"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Nairobi"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium te/xt-gray-700">
                    If a customer wants to reach you, what is your phone number?
                  </label>
                  <div className="mt-1">
                    <input
                      type={"text"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="0712345678"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className=" text-center rounded-md border border-transparent  bg-[#3B841F] py-2 px-6  font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add Product to The Market
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddProductsForSale;
