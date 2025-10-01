import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const FacultyApprovalDonutChart = () => {
    const data = {
        labels: ["Accepted", "Rejected", "Pending"],
        datasets: [
            {
                label: "Approvals",
                data: [45, 10, 20], // Example data
                backgroundColor: [
                    "rgba(40, 167, 69, 0.7)",   // green for Accepted
                    "rgba(220, 53, 69, 0.7)",   // red for Rejected
                    "rgba(255, 193, 7, 0.7)",   // yellow for Pending
                ],
                borderColor: ["#28a745", "#dc3545", "#ffc107"],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: "65%",
        radius: "90%", 
        // 🔑 makes it a donut (thicker hole = higher value)
        plugins: {
            title: {
                display: true,
                text: "",
                font: { size: 18 },
                padding: {
                    top:-20,
                }
            },
            legend: {
                position: "bottom",

                labels: {
                    
                    boxWidth: 10,
                    font: {
                        size: 12,
                    },
                },
            },



            
        },
    };

    return <Doughnut data={data} options={options} />;
};

export default FacultyApprovalDonutChart;
