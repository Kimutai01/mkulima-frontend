import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const EachOfBestCropToGrow = ({ loggedInUserId }) => {
  const { id } = useParams();
  const [eachCrop, setEachCrop] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/plantable_crops/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEachCrop(data);
      });
  }, [id]);

  const addToMySelectedCrops = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/selected_crops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: Number(loggedInUserId),
        plantable_crop_id: Number(id),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setTimeout(() => {
          navigate("/MySelectedCrops");
        }, 2000);
      });
  };

  return (
    <div className="pt-24">
      {eachCrop && (
        <div className="pt-12">
          <div className="flex justify-center gap-12">
            <div className="w-1/2 text-center flex justify-center flex-col gap-2">
              <h1 className="text-[#3B841F] text-5xl my-4">{eachCrop.name}</h1>

              <p className="font-italic">
                Thinking of growing
                {eachCrop.name}?
              </p>
              <p>
                Here's a short summary of what exactly you might need to
                consider.
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between w-[50%] mx-auto">
                  <p className="text-[#3B841F]">Cost of production:</p>
                  <p>{eachCrop.cost_to_produce_kg}</p>
                </div>

                <p
                  className="  w-[50%] mx-auto"
                  style={{
                    borderBottom: "2px solid #7DD959",
                  }}
                ></p>

                <div className="flex justify-between w-[50%] mx-auto">
                  <p className="text-[#3B841F]">Price per kg:</p>
                  <p>{eachCrop.price_per_kg}</p>
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
                <button
                  className="bg-[#7DD959] text-white px-4 py-2 flex justify-center gap-2 rounded-lg"
                  onClick={(e) => addToMySelectedCrops(e)}
                >
                  Add to My Selected Crops
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
    </div>
  );
};

export default EachOfBestCropToGrow;
