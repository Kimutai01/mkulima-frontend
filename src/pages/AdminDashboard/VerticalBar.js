import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalBar = () => {
  const [managementInputs, setManagementInputs] = useState([]);
  const [plantingInputs, setPlantingInputs] = useState([]);
  const [counties, setCounties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/top_5_locations_management_inputs", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setManagementInputs(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/top_5_locations_crop_inputs", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPlantingInputs(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/counties_with_inputs", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCounties(data);
      });
  }, []);

  const options = {
    responsive: true,
    height: 500,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Satisfaction with taxes paid (1-Very Satisfied, 4-Very Dissatisfied)",
      },
    },
  };

  const labels = counties.map((county) => county);

  const data = {
    labels,
    datasets: [
      {
        label: "Number of Sellers of Planting Input supplies per county",
        data: plantingInputs.map((input) => input.count),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Number of Sellers of Management Input supplies per county",
        data: managementInputs.map((input) => input.count),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default VerticalBar;
