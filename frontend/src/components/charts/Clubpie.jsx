import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Clubpie = () => {
   const data = {
  labels: ["Saaz", "Abinay", "Rang", "BitLegion"],
  datasets: [
    {
      label: "Attendance",
      data: [15, 25, 20, 40],
      backgroundColor: [
        "rgba(153, 102, 255, 0.7)",  // Purple
        "rgba(54, 162, 235, 0.7)",   // Teal/Blue
        "rgba(255, 159, 64, 0.7)",   // Orange
        "rgba(255, 99, 132, 0.7)",   // Pink/Red
      ],
      borderColor: [
        "#6f42c1", // Dark purple
        "#0c6ead", // Dark teal/blue
        "#b34700", // Dark orange
        "#a6002f", // Dark pink/red
      ],
      borderWidth: 2,
    },
  ],
};


    const options = {
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Student Attendance (This Month)",
                font: { size: 12 },
            },
            legend: {
                position: "bottom",
            },
        },


        
    };

    return <Pie data={data} options={options} />;
};

export default Clubpie;
