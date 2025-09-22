import React from "react";
import SideBar from "../layout_files/SideBar";
import teach from "../../assets/teach.png";

// Chart.js imports
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

// Register chart elements
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const FacultyDashboard = () => {
  // Pie chart data: Student distribution
  const pieData = {
    labels: ["CSE", "ECE", "IT", "Mechanical", "Civil"],
    datasets: [
      {
        label: "Students",
        data: [120, 80, 50, 30, 20], // replace with DB values
        backgroundColor: [
          "#4F46E5", // Indigo
          "#06B6D4", // Cyan
          "#22C55E", // Green
          "#F59E0B", // Amber
          "#EF4444", // Red
        ],
        borderWidth: 1,
      },
    ],
  };

  // Bar chart data: Achievements logged per branch
  const barData = {
    labels: ["CSE", "ECE", "IT", "Mechanical", "Civil"],
    datasets: [
      {
        label: "Achievements Logged",
        data: [45, 32, 20, 12, 8], // replace with DB values
        backgroundColor: "#4F46E5",
      },
    ],
  };

  return (
    <section className="bg-[#f4f2ff] flex mt-18 font-sans relative">
      <div className="h-screen z-2 hidden md:flex md:fixed top-18">
        <SideBar />
      </div>

      <div className="min-h-screen md:ml-65 flex flex-col p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">Faculty Dashboard</h1>

        {/* Faculty meta */}
        <div className="faculty-meta bg-white shadow-lg mb-4 p-4 rounded-lg flex gap-4 items-center">
          <div className="faculty-avatar">
            <img
              className="rounded-full h-25"
              src={teach}
              alt="Faculty Profile"
            />
          </div>
          <div className="faculty-info">
            <h2 className="faculty-name font-bold text-2xl">Dr. Jane Doe</h2>
            <p className="faculty-department">Department of Computer Science</p>
            <p className="faculty-description text-gray-600">
              Passionate about AI research and mentoring students in real-world
              projects.
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="w-full flex gap-4 mb-6">
          <div className="bg-white shadow-lg p-3 rounded-lg flex-1">
            <h2 className="text-gray-600">Students Monitored</h2>
            <p className="text-2xl font-semibold">250</p>
          </div>
          <div className="bg-white shadow-lg p-3 rounded-lg flex-1">
            <h2 className="text-gray-600">Pending Approvals</h2>
            <p className="text-2xl font-semibold">15</p>
          </div>
          <div className="bg-white shadow-lg p-3 rounded-lg flex-1">
            <h2 className="text-gray-600">Total Achievements Logged</h2>
            <p className="text-2xl font-semibold">86</p>
          </div>
        </div>

        {/* Analytics Graphs */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">
              Student Distribution by Branch
            </h2>
            <Pie data={pieData} />
          </div>

          {/* Bar Chart */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">
              Achievements Logged per Branch
            </h2>
            <Bar data={barData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyDashboard;
