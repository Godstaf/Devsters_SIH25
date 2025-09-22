import React, { useState } from "react";
import SideBar from "../layout_files/SideBar";
import teach from "../../assets/teach.png";

const initialApplications = [
  // Pending (4)
  {
    id: 1,
    name: "Rahul Sharma",
    roll: "11242001",
    title: "Conference on AI & ML",
    date: "12/04/2025",
    meta: "Conference",
    status: "Pending",
    info: "Attended a national-level conference on AI and ML trends.",
    avatar: teach,
  },
  {
    id: 2,
    name: "Priya Nair",
    roll: "11242002",
    title: "Community Service Drive",
    date: "14/04/2025",
    meta: "Community Service",
    status: "Pending",
    info: "Organized a blood donation and health awareness campaign.",
    avatar: teach,
  },
  {
    id: 3,
    name: "Arjun Mehta",
    roll: "11242003",
    title: "Workshop on Cybersecurity",
    date: "15/04/2025",
    meta: "Workshop",
    status: "Pending",
    info: "Participated in a national workshop on ethical hacking and cybersecurity.",
    avatar: teach,
  },
  {
    id: 4,
    name: "Neha Gupta",
    roll: "11242004",
    title: "Volunteering at Tech Fest",
    date: "16/04/2025",
    meta: "Volunteering",
    status: "Pending",
    info: "Helped organize events and guided participants during annual tech fest.",
    avatar: teach,
  },

  // Approved (4)
  {
    id: 5,
    name: "Sneha Patil",
    roll: "11242005",
    title: "Google Cloud Certification",
    date: "17/04/2025",
    meta: "Certification",
    status: "Approved",
    info: "Completed Google Cloud Associate certification successfully.",
    avatar: teach,
  },
  {
    id: 6,
    name: "Amit Verma",
    roll: "11242006",
    title: "Hackathon - Winner",
    date: "18/04/2025",
    meta: "Competition",
    status: "Approved",
    info: "Won 1st place in inter-college hackathon with IoT project.",
    avatar: teach,
  },
  {
    id: 7,
    name: "Kavya Reddy",
    roll: "11242007",
    title: "Internship at Infosys",
    date: "19/04/2025",
    meta: "Internship",
    status: "Approved",
    info: "Summer internship in Software Development at Infosys.",
    avatar: teach,
  },
  {
    id: 8,
    name: "Manish Kumar",
    roll: "11242008",
    title: "Leadership Program",
    date: "20/04/2025",
    meta: "Leadership",
    status: "Approved",
    info: "Selected for IIT Bombay’s Student Leadership Development Program.",
    avatar: teach,
  },

  // Rejected (4)
  {
    id: 9,
    name: "Anjali Singh",
    roll: "11242009",
    title: "Startup Pitch Contest",
    date: "21/04/2025",
    meta: "Competition",
    status: "Rejected",
    info: "Applied for funding in campus startup pitch contest.",
    avatar: teach,
  },
  {
    id: 10,
    name: "Rohit Joshi",
    roll: "11242010",
    title: "Blockchain Workshop",
    date: "22/04/2025",
    meta: "Workshop",
    status: "Rejected",
    info: "Enrolled in blockchain development workshop.",
    avatar: teach,
  },
  {
    id: 11,
    name: "Divya Kapoor",
    roll: "11242011",
    title: "Online Certification - UI/UX",
    date: "23/04/2025",
    meta: "Certification",
    status: "Rejected",
    info: "Applied for UI/UX certification through Coursera.",
    avatar: teach,
  },
  {
    id: 12,
    name: "Siddharth Malhotra",
    roll: "11242012",
    title: "Social Impact Volunteering",
    date: "24/04/2025",
    meta: "Community Service",
    status: "Rejected",
    info: "Proposed project for teaching coding to underprivileged kids.",
    avatar: teach,
  },
];

const FacultyApprovals = () => {
  const [applications, setApplications] = useState(initialApplications);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredApplications =
    filter === "All"
      ? applications
      : applications.filter((app) => app.status === filter);

  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentApps = filteredApplications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const tabs = ["All", "Approved", "Pending", "Rejected"];

  const handleStatusChange = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  const handleTabChange = (tab) => {
    setFilter(tab);
    setCurrentPage(1); // reset to first page on tab change
  };

  return (
    <section className="bg-[#f4f2ff] flex mt-18 font-sans relative">
      <div className="h-screen z-2 hidden md:flex md:fixed top-18">
        <SideBar />
      </div>

      <div className="min-h-screen md:ml-65 flex flex-col p-8 w-full gap-8">
        <h1 className="text-4xl font-bold mb-2">Approval Applications</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-4 w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2 rounded-lg flex-1 font-medium transition ${
                filter === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-800 border hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {currentApps.map((app) => (
            <div className="card shadow-lg bg-white w-full" key={app.id}>
              <div className="card-body">
                <div className="flex gap-3">
                  <img
                    className="h-10 shadow-lg rounded-full"
                    src={app.avatar}
                    alt="profile"
                  />
                  <div>
                    <h2 className="card-title">{app.name}</h2>
                    <p className="text-gray-500">Roll no: {app.roll}</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-lg">{app.title}</p>
                  <p className="text-sm text-gray-500">Date: {app.date}</p>
                </div>
                <div className="gap-2 flex">
                  <div className="badge badge-outline badge-primary">
                    {app.meta}
                  </div>
                  <div
                    className={`badge badge-outline ${
                      app.status === "Approved"
                        ? "badge-success"
                        : app.status === "Rejected"
                        ? "badge-error"
                        : "badge-warning"
                    }`}
                  >
                    {app.status}
                  </div>
                </div>
                <p>{app.info}</p>
                <div className="card-actions justify-end gap-2">
                  <button
                    className="btn btn-error text-white rounded-2xl"
                    onClick={() => handleStatusChange(app.id, "Rejected")}
                  >
                    Reject
                  </button>
                  <button
                    className="btn btn-success text-white rounded-2xl"
                    onClick={() => handleStatusChange(app.id, "Approved")}
                  >
                    Approve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-4 py-2 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacultyApprovals;
