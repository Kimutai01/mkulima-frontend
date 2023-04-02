import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Market = ({ my_selected_crop, language, mySelectedCropId }) => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/plantable_crops/${mySelectedCropId}`, {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPrices(data.market_prices);
      });
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Market Prices Over The Last Year",
      },
    },
  };

  const labels = [
    "April 2022",
    "May 2022",
    "June 2022",
    "July 2022",
    "August 2022",
    "September 2022",
    "October 2022",
    "November 2022",
    "December 2022",
    "January 2023",
    "February 2023",
    "March 2023",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Retail Price in Ksh Per Kg",
        data: prices.map((price) => price.retail_price),

        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Whole Sale Price in Ksh Per Kg",
        data: prices.map((price) => price.wholesale_price),

        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="w-[50%]  mx-auto my-8 flex flex-col justify-between shadow-gray-200 shadow-xl ">
      <Line data={data} options={options} />
    </div>
  );
};

export default Market;
