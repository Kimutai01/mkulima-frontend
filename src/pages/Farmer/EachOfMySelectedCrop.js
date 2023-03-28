import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HiDownload } from "react-icons/hi";
import Planting from "../../components/Farmer/Planting";
import SiteSelection from "../../components/Farmer/SiteSelection";
import Harvesting from "../../components/Farmer/Harvesting";
import Management from "../../components/Farmer/Management";
const EachOfMySelectedCrop = () => {
  const { id } = useParams();
  const [my_selected_crop, setMySelectedCrop] = useState({});
  const [suggested_inputs, setSuggestedInputs] = useState([]);
  const [stage, setStage] = useState("site selection");
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/selected_crops/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMySelectedCrop(data.plantable_crop);
      });
  }, [id]);

  return (
    <div className="pt-24">
      <div>
        <h1 className="text-xl font-bold text-center   text-[#3B841F] md:text-5xl ">
          Plan
        </h1>

        <div className="flex justify-center gap-4">
          <p className="text-3xl text-[#3B841F] ">Choose your Location</p>
          <p className="mb-2 text-gray-400 text-[#3B841F]  text-xl">................</p>
          <p className="text-3xl  text-[#3B841F]">Choose your Crop</p>
          <p className="mb-2 text-gray-400 text-xl">................</p>
          <p className="text-3xl  text-[#3B841F]">Advisory</p>
        </div>
      </div>

      {my_selected_crop && (
        <div className="pt-12">
          <div className="flex justify-center gap-12">
            <div className="w-1/2 text-center flex justify-center flex-col gap-2">
              <h1 className="text-[#3B841F] text-5xl my-4">
                {my_selected_crop.name}
              </h1>

              <p className="font-italic">
                Thinking of growing
                {my_selected_crop.name}?
              </p>
              <p>
                Here's a short summary of what exactly you might need to
                consider.
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between w-[50%] mx-auto">
                  <p className="text-[#3B841F]">Cost of production:</p>
                  <p>{my_selected_crop.cost_to_produce_kg}</p>
                </div>

                <p
                  className="  w-[50%] mx-auto"
                  style={{
                    borderBottom: "2px solid #7DD959",
                  }}
                ></p>

                <div className="flex justify-between w-[50%] mx-auto">
                  <p className="text-[#3B841F]">Price per kg:</p>
                  <p>{my_selected_crop.price_per_kg}</p>
                </div>
              </div>
              <p className="my-4 w-[80%] mx-auto">
                Whether you're a beginner looking to get into agriculture,
                trying to figure out how to grow a specific crop, or in need of
                fertilizers, pesticides, or hired tractors, we've got you
                covered. But our support doesn't stop there.
              </p>

              <p className="my-4 w-[80%] mx-auto">
                We can also help you with tips on how to deal with excess or
                spoils and guide you on how to sell your produce. With mche,
                you'll have access to all the information and resources you need
                to succeed in farming. So why wait? Start exploring our website
                today and take your farming journey to the next level!
              </p>

              <div className="flex justify-center gap-4">
                <button className="bg-[#7DD959] text-white px-4 py-2 flex justify-center gap-2 rounded-lg">
                  Download Plant Advisory
                  <HiDownload className="text-white text-2xl" />
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="splash"
                className=" w-[550px] h-[80vh] rounded-b-3xl"
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center gap-32 border-b-2 border-[#3B841F] w-[80%] mx-auto my-4">
        <p
          className={
            stage === "site selection"
              ? "text-3xl text-white bg-[#3B841F] cursor-pointer px-4 py-2 font-semibold "
              : "text-3xl  cursor-pointer  font-bold px-4 py-2"
          }
          onClick={() => setStage("site selection")}
        >
          Site Selection
        </p>
        <p
          className={
            stage === "planting"
              ? "text-3xl text-white bg-[#3B841F] cursor-pointer px-4 py-2 font-semibold "
              : "text-3xl  cursor-pointer font-bold px-4 py-2 "
          }
          onClick={() => setStage("planting")}
        >
          Planting
        </p>
        <p
          className={
            stage === "management"
              ? "text-3xl text-white bg-[#3B841F] cursor-pointer px-4 py-2 font-semibold "
              : "text-3xl  cursor-pointer font-bold px-4 py-2 "
          }
          onClick={() => setStage("management")}
        >
          Management
        </p>
        <p
          className={
            stage === "harvesting"
              ? "text-3xl text-white bg-[#3B841F] cursor-pointer px-4 py-2 font-semibold "
              : "text-3xl  cursor-pointer font-bold px-4 py-2"
          }
          onClick={() => setStage("harvesting")}
        >
          Harvesting
        </p>
      </div>
      <div>
        {stage === "site selection" && (
          <SiteSelection my_selected_crop={my_selected_crop} />
        )}
        {stage === "planting" && (
          <Planting my_selected_crop={my_selected_crop} />
        )}
        {stage === "management" && (
          <Management my_selected_crop={my_selected_crop} />
        )}
        {stage === "harvesting" && (
          <Harvesting my_selected_crop={my_selected_crop} />
        )}
      </div>
    </div>
  );
};

export default EachOfMySelectedCrop;
