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

const AttendancePieChart = () => {
    const data = {
        labels: ["Present", "Absent"],
        datasets: [
            {
                label: "Attendance",
                data: [85, 15], // Example: 85% Present, 15% Absent
                backgroundColor: [
                    "rgba(40, 167, 69, 0.7)",   // green for Accepted
                    "rgba(220, 53, 69, 0.7)",    // red for Absent
                ],
                borderColor: ["#07b32f", "#dc3545",],
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

export default AttendancePieChart;
