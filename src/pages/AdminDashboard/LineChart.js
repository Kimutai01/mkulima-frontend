import React, { useEffect, useState } from "react";
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

const LineChart = () => {
  const [plantingInputs, setPlantingInputs] = useState([]);
  const [managementInputs, setManagementInputs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/top_planting_inputs_crops_for", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPlantingInputs(data.top_planting_inputs_crops_for);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/top_management_inputs_crops_for", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setManagementInputs(data.top_management_inputs_crops_for);
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
        text: "Number of Inputs for Top Selected Crops",
      },
    },
  };

  const labels = plantingInputs.map((input) => input.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Number of Planting Inputs In our system",
        data: plantingInputs.map((input) => input.count),

        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Number of Management Inputs In our system",
        data: managementInputs.map((input) => input.count),

        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line data={data} options={options} />;
};

export default LineChart;
