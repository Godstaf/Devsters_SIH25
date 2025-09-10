import React from "react";
import SideBar from "../layout_files/SideBar";
import cpdsa from '../../assets/cpdsa.jpg'
import { FaCalendarAlt } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaUniversity,
  FaHeadset,
  FaMapMarkedAlt,
} from "react-icons/fa";

const events = [
  {
    icon: <FaCalendarAlt className="text-blue-600" />,
    title: "Guest Lecture: The Future of AI",
    date: "April 28, 2024 - 2:00 PM",
    bg: "bg-blue-50",
  },
  {
    icon: <FaBullhorn className="text-green-600" />,
    title: "Career Fair 2024",
    date: "May 5, 2024 - 10:00 AM",
    bg: "bg-green-50",
  },
];

const activities = [
  {
    activity: "Seminar on AI Ethics",
    type: "Seminar",
    date: "2024-03-15",
    status: "Completed",
  },
  {
    activity: "National Conference on Technology",
    type: "Conference",
    date: "2024-04-20",
    status: "Upcoming",
  },
  {
    activity: "Summer Internship at Tech Innovators",
    type: "Internship",
    date: "2024-06-01",
    status: "Applied",
  },
];


const Dashboard = () => {
  
  const statusClasses = {
    Completed: "bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm",
    Upcoming: "bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm",
    Applied: "bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm",
  };

  return (
    <div className="bg-[#f4f2ff] flex mt-18 font-sans relative">
      <div className="h-screen z-2 hidden md:flex md:fixed top-18 ">
        <SideBar />
      </div>
      <div className="min-h-screen md:ml-65 flex flex-col p-8 w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-slate-900 text-4xl font-bold">Dashboard</h1>
        </div>

        {/* Academic Performance */}
        <div className="w-full">
          <h1 className="text-2xl font-bold">Academic Performance</h1>

          <div className="flex flex-col md:flex-row gap-3 mt-4 w-full">
            <div className="bg-white p-4 rounded-lg flex-1">
              <h1 className="text-lg text-slate-600">CGPA</h1>
              <p className="text-3xl font-semibold">9.5</p>
            </div>
            <div className="bg-white p-4 rounded-lg flex-1">
              <h1 className="text-lg text-slate-600">Attendence</h1>
              <p className="text-3xl font-semibold">95%</p>
            </div>
            <div className="bg-white p-4 rounded-lg flex-1">
              <h1 className="text-lg text-slate-600">Credits</h1>
              <p className="text-3xl font-semibold">120</p>
            </div>
          </div>
        </div>

        {/* Activity Tracker */}
        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-8">Activity Tracker</h1>
          <div className="overflow-x-auto rounded-lg overflow-clip shadow-lg">
            <table className="min-w-full rounded-lg bg-white text-left text-sm text-gray-600">
              <thead className="bg-gray-300 rounded-t-lg text-gray-700">
                <tr>
                  <th className="px-6 py-3 font-medium">Activity</th>
                  <th className="px-6 py-3 font-medium">Type</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activities.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4">{item.activity}</td>
                    <td className="px-6 py-4">{item.type}</td>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4">
                      <span className={statusClasses[item.status]}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Digital Portfolio */}

        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-8">Digital Portfolio</h1>
          <div className="w-full bg-white rounded-xl shadow-lg p-8 flex">
            <div className="flex flex-col">
              <h1 className="text-[20px] font-bold">
                View and Share Your Portfolio
              </h1>
              <p className="mt-3 text-base leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur animi repellat reprehenderit vero doloribus modi
                reiciendis. Consectetur dolor temporibus aperiam?
              </p>
              <div className="flex gap-3 mt-3">
                <button className="bg-sky-600 text-white p-2 rounded-lg">
                  View Portfolio
                </button>
                <button className="bg-white text-black border-1 border-gray-700 p-2 rounded-lg">
                  Download
                </button>
              </div>
            </div>
            <div className="hidden sm:flex">
              <img
                className="rounded-lg"
                src={cpdsa}
                alt="image for portfolio"
              />
            </div>
          </div>
        </div>

        {/* Upcomig event */}

        <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Upcoming Events
          </h2>
          <div className="space-y-3">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 hover:shadow-sm transition"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${event.bg}`}
                >
                  {event.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcement */}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Announcement
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 hover:shadow-sm transition">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100`}
              >
                <BiError className="text-amber-800" size={25} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Library Hours Update
                </h3>
                <p className="text-xs text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, rerum.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 hover:shadow-sm transition">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100`}
              >
                <PiStudentBold className="text-indigo-800" size={25} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Scholarship Application deadline
                </h3>
                <p className="text-xs text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, rerum.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Quick links */}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h2>
          <div className="space-y-3">
            <Link
              to="/course-catalog"
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition"
            >
              <FaBook className="text-gray-600" />
              <span className="text-sm text-gray-700">Course Catalog</span>
            </Link>

            <Link
              to="/library"
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition"
            >
              <FaUniversity className="text-gray-600" />
              <span className="text-sm text-gray-700">Library Resources</span>
            </Link>

            <Link
              to="/it-help"
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition"
            >
              <FaHeadset className="text-gray-600" />
              <span className="text-sm text-gray-700">IT Help Desk</span>
            </Link>

            <Link
              to="/campus-map"
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition"
            >
              <FaMapMarkedAlt className="text-gray-600" />
              <span className="text-sm text-gray-700">Campus Map</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
