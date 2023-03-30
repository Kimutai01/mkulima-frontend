import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const AreaChat = () => {
  const [selectedCrops, setSelectedCrops] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/top_selected", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSelectedCrops(data);
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
        text: "Top Selected Crops",
      },
    },
  };

  const labels = selectedCrops.map((crop) => crop.name);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Number of selections",
        data: selectedCrops.map((crop) => crop.selections_count),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default AreaChat;
