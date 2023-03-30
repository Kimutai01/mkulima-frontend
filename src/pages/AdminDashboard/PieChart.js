import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000//top_5_locations_by_price_per_kg", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((data) => {
        setLocations(data);
      });
  }, []);

  const labels = locations.map((location) => location.location);

  const data = {
    labels,
    
    datasets: [
      {
        label: "Average Price per kg that farmers are selling their crops for",
        data: locations.map((location) => location.average_price_per_kg),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Number of Surveys taken by male and female users",
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
