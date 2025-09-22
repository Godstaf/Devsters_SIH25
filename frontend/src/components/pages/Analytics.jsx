

import React from "react";
import SideBar from "../layout_files/SideBar";

import BarChart from "../charts/BarChart";
import AttendancePieChart from "../charts/Attendance";
import HorizontalBarChart from "../charts/Horizontalbar";
import FacultyApprovalDonutChart from "../charts/FacultyDonut";
import { MdOutlineCloudDone } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import Clubpie from "../charts/Clubpie";
const Analytics = () => {
    return (
        <>
            {/* ✅ Inline Global Styles */}
            <style>{`
        :root {
          --primary-color: #137fec;
          --secondary-color: #e0efff;
          --background-color: #f8faff;
          --text-primary: #1a202c;
          --text-secondary: #5a677d;
          --accent-color: #ffc107;
          --success-color: #28a745;
          --warning-color: #ffc107;
          --danger-color: #dc3545;
          --border-radius-sm: 0.125rem;
          --border-radius-md: 0.375rem;
          --border-radius-lg: 0.5rem;
          --border-radius-xl: 0.75rem;
        }
        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--background-color);
          color: var(--text-primary);
        }
      `}</style>

            <div className="bg-[#f4f2ff] flex mt-18 font-sans relative">
                <div className="h-screen z-2 hidden md:flex md:fixed top-18">
                    <SideBar />
                </div>
                
                <div className="min-h-screen md:ml-65 flex flex-1 flex-col ">
                    <div className="font-sans bg-[var(--background-color)] text-[var(--text-primary)]">
                        <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">




                            <main className="container mx-auto flex-1 px-4 py-8 lg:px-8">
                                {/* ✅ Page Title */}
                                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-col">
                                        <h1 className="text-3xl max-[400px]:pt-10 max-[400px]:text-2xl max-[400px]:text-center  lg:text-4xl font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                                            <span className=" text-6xl">
                                                <img src="/monitorsvg.svg" className="w-10" alt=""></img>
                                            </span>

                                            Analytics &amp; Reporting
                                        </h1>
                                        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                                            Track student activities and generate accreditation
                                            reports.
                                        </p>
                                    </div>
                                </div>

                                {/* ✅ Charts Grid */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 col-span-1 sm:col-span-2 lg:col-span-4">
                                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                                            Student Achievements Overview
                                        </h2>
                                        <div className="h-100 flex items-center justify-center">
                                            {/* <canvas id="achievementsChart"></canvas> */}

                                            <BarChart />


                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 col-span-1 sm:col-span-2">
                                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                                            Attendance
                                            {/* &amp; Participation */}
                                        </h2>
                                        <div className="h-90 flex items-center justify-center">
                                            {/* <canvas id="attendanceChart"></canvas> */}
                                            <AttendancePieChart />

                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 col-span-1 sm:col-span-2">
                                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                                            Certifications &amp; Skills
                                        </h2>
                                        <div className="h-80 flex items-center justify-center">
                                            {/* <canvas id="skillsChart"></canvas> */}
                                            <HorizontalBarChart />
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 col-span-1 sm:col-span-2 lg:col-span-2">
                                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                                            Clubs
                                        </h2>
                                        <div className="h-80 flex items-center justify-center">
                                           
                                            <Clubpie/>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-md border border-gray-200 col-span-1 sm:col-span-2 lg:col-span-1">
                                        <h2 className="text-2xl p-6 font-semibold text-[var(--text-primary)] ">
                                            Faculty Approvals
                                        </h2>
                                        <div className=" flex items-center justify-center">
                                           
                                             <FacultyApprovalDonutChart />
                                        </div>
                                    </div>

                                    {/* ✅ Integration & Sync Card */}
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 col-span-1 sm:col-span-2 lg:col-span-1">
                                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                                            Integration &amp; Sync
                                        </h2>
                                        <div className="h-80 flex flex-col items-center justify-center gap-4 p-2 bg-gray-50 rounded-lg">
                                            <div className="flex items-center gap-2 text-[var(--success-color)]">
                                                <p className="text-3xl font-bold"><MdOutlineCloudDone /></p>
                                                <span className="material-symbols-outlined text-2xl max-[1250px]:text-[1.1rem] max-[1222px]:text-[0.8rem] max-[1020px]:text-[1.5rem]">
                                                    Cloud_Done
                                                </span>
                                            </div>
                                            <p className="text-sm text-[var(--text-secondary)]">
                                                Last sync: 2 minutes ago
                                            </p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                                <div
                                                    className="bg-[var(--success-color)] h-2.5 rounded-full"
                                                    style={{ width: "100%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ✅ Accreditation Reports */}
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 col-span-1 sm:col-span-2 lg:col-span-4">
                                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                                            Accreditation / Ranking Reports
                                        </h2>

                                        {/* Filters */}
                                        <div className="flex flex-wrap gap-4 mb-6">
                                            <select className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] md:w-auto">
                                                <option>Department</option>
                                            </select>
                                            <select className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] md:w-auto">
                                                <option>Program</option>
                                            </select>
                                            <select className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] md:w-auto">
                                                <option>Year</option>
                                            </select>
                                            <select className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] md:w-auto">
                                                <option>Activity Type</option>
                                            </select>

                                            <div className="flex gap-2 ml-auto ">
                                                <button className="bg-[var(--secondary-color)] max-[300px]:p-2 text-[var(--primary-color)] border border-[var(--primary-color)] px-5 py-2.5 rounded-lg hover:bg-blue-100 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 flex items-center gap-2">
                                                    <span className="text-2xl">
                                                        <FaRegFilePdf />
                                                    </span>
                                                    Export PDF
                                                </button>
                                                <button className="bg-[var(--primary-color)] max-[300px]:p-2 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 flex items-center gap-2">
                                                    <span className="text-2xl">
                                                        <MdOutlineDescription />
                                                    </span>
                                                    Export Excel
                                                </button>
                                            </div>
                                        </div>

                                        {/* ✅ NAAC Table */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            <div className="overflow-x-auto col-span-full">
                                                <h3 className="text-xl font-medium text-[var(--text-primary)] mb-3">
                                                    NAAC
                                                </h3>
                                                <table className="w-full text-left">
                                                    <thead className="bg-gray-100">
                                                        <tr>
                                                            <th className="px-4 py-3 text-[var(--text-primary)] font-semibold uppercase text-sm border-b border-gray-200">
                                                                Criteria
                                                            </th>
                                                            <th className="px-4 py-3 text-[var(--text-primary)] font-semibold uppercase text-sm border-b border-gray-200">
                                                                Score
                                                            </th>
                                                            <th className="px-4 py-3 text-[var(--text-primary)] font-semibold uppercase text-sm border-b border-gray-200 text-center">
                                                                Status
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white">
                                                        <tr>
                                                            <td className="px-4 py-3 text-[var(--text-secondary)] border-b border-gray-200">
                                                                Curricular Aspects
                                                            </td>
                                                            <td className="px-4 py-3 text-[var(--text-secondary)] border-b border-gray-200">
                                                                3.5
                                                            </td>
                                                            <td className="px-4 py-3 text-[var(--text-secondary)] border-b border-gray-200 text-center">
                                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--success-color)]/10 text-[var(--success-color)]">
                                                                    Good
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-4 py-3 text-[var(--text-secondary)] border-b border-gray-200">
                                                                Teaching-Learning and Evaluation
                                                            </td>
                                                            <td className="px-4 py-3 text-[var(--text-secondary)] border-b border-gray-200">
                                                                3.2
                                                            </td>
                                                            <td className="px-4 py-3 text-[var(--text-secondary)] border-b border-gray-200 text-center">
                                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--warning-color)]/10 text-[var(--warning-color)]">
                                                                    Satisfactory
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-4 py-3 text-[var(--text-secondary)] border-b border-gray-200">
                                                                Research, Innovations and Extension
                                                            </td>
                                                            <td className="px-4 py-3 text-[var(--text-secondary)] border-b border-gray-200">
                                                                3.8
                                                            </td>
                                                            <td className="px-4 py-3 text-[var(--text-secondary)] border-b border-gray-200 text-center">
                                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--success-color)]/10 text-[var(--success-color)]">
                                                                    Excellent
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Analytics;
