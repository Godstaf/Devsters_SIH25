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

// ✅ Register required chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Internship", "Certificates", "Contest", "Project"],
    datasets: [
      {
        label:"",
        data: [12, 19, 10, 15],
           backgroundColor: [
            "rgba(19, 127, 236, 0.7)", // Music Club
            "rgba(40, 167, 69, 0.7)",  // Coding Club
            "rgba(255, 193, 7, 0.7)" ,
            "rgba(255, 0, 0, 0.7)",
              // Debate Club
          ],
          borderColor: [
  "rgba(10, 80, 160, 1)",   // Darker Blue
  "rgba(20, 110, 45, 1)",   // Darker Green
  "rgba(200, 150, 0, 1)",   // Darker Yellow
  "rgba(180, 0, 0, 1)",     // Darker Red
],
          borderWidth: 2,
         // primary-color
        borderRadius: 8,
      },
    ],
  };

  const options = {
     
    responsive: true,
      maintainAspectRatio: false,
    plugins: {
      legend: {
      display: false,  // 🔑 hides dataset label box
    },
      title: { display: true, text: "Student Achievements" },
    },
  
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
