import React from "react";
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

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart = () => {
  const data = {
    labels: ["Community Services","Workshop", "Conferences", ],
    datasets: [
      {
        label: "Participation Count ",
        data: [20, 35, 15],
        backgroundColor: "rgba(19, 127, 236, 0.7)",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    indexAxis: "y", // 🔑 makes it horizontal
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Participation Count ",
        font: { size: 12 },
      },
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: { beginAtZero: true },
    },
  };

  return <Bar data={data} options={options} />;
};

export default HorizontalBarChart;
