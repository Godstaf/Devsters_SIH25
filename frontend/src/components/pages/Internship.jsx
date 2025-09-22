import React, { useState } from "react";
import SideBar from "../layout_files/SideBar";
import AddInternshipForm from "../forms/InternshipForm";

function InternshipCard({
  company,
  role,
  period,
  status,
  description,
  stipend,
  onDetails,
}) {
  return (
    <div className="bg-white shadow-sm rounded-xl border border-slate-200 p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-slate-800 font-medium">{company}</h4>
          <p className="text-slate-500 text-sm mt-0.5">{role}</p>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
          {status}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <span className="inline-flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M6.75 3A.75.75 0 0 0 6 3.75V5H5.25A2.25 2.25 0 0 0 3 7.25v10.5A2.25 2.25 0 0 0 5.25 20h13.5A2.25 2.25 0 0 0 21 17.75V7.25A2.25 2.25 0 0 0 18.75 5H18V3.75a.75.75 0 0 0-1.5 0V5h-9V3.75A.75.75 0 0 0 6.75 3ZM4.5 9h15v8.75c0 .414-.336.75-.75.75H5.25a.75.75 0 0 1-.75-.75V9Z" />
          </svg>
          {period}
        </span>
      </div>
      <div className="mt-2 flex gap-2">
        <button
          className="inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer"
          onClick={onDetails}
        >
          Details
        </button>
        <button className="inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium bg-[#6C47FF] text-white hover:bg-[#6C47FF]/80 cursor-pointer">
          Update
        </button>
      </div>
    </div>
  );
}

function InternshipDetailsModal({ internship, onClose }) {
  if (!internship) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-6 shadow-lg min-w-[300px] max-w-[90vw]">
        <h3 className="text-lg font-semibold mb-2">{internship.company}</h3>
        <p className="mb-1">
          <strong>Role:</strong> {internship.role}
        </p>
        <p className="mb-1">
          <strong>Period:</strong> {internship.period}
        </p>
        <p className="mb-1">
          <strong>Status:</strong> {internship.status}
        </p>
        <p className="mb-1">
          <strong>Description:</strong> {internship.description}
        </p>
        <p className="mb-1">
          <strong>Stipend:</strong> {internship.stipend}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-[#6C47FF] text-white rounded hover:bg-[#6C47FF]/80"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function InternshipFormModal({ onAdd, onCancel, theme }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <AddInternshipForm onAdd={onAdd} onCancel={onCancel} theme={theme} />
    </div>
  );
}

export default function InternshipSection() {
  const [internships, setInternships] = useState([
    {
      company: "Tech Innovators Inc.",
      role: "Frontend Intern",
      period: "Jan 2023 - Jun 2023",
      status: "Completed",
      description: "Worked on UI components and improved website performance.",
      stipend: "₹15,000/month",
    },
    {
      company: "Global Solutions Corp.",
      role: "UI/UX Intern",
      period: "Aug 2023 - Nov 2023",
      status: "Completed",
      description: "Designed user flows and wireframes for client projects.",
      stipend: "₹12,000/month",
    },
    {
      company: "Creative Minds Agency",
      role: "Design Intern",
      period: "Dec 2023 - Feb 2024",
      status: "Completed",
      description: "Assisted in branding and graphic design tasks.",
      stipend: "₹10,000/month",
    },
    {
      company: "Financial Dynamics Ltd.",
      role: "Data Intern",
      period: "Mar 2024 - Jul 2024",
      status: "Completed",
      description: "Analyzed financial data and created dashboards.",
      stipend: "₹18,000/month",
    },
    {
      company: "Marketing Gurus",
      role: "Marketing Intern",
      period: "Aug 2024 - Oct 2024",
      status: "Ongoing",
      description: "Managing social media campaigns and analytics.",
      stipend: "₹14,000/month",
    },
    {
      company: "Innovate Tomorrow",
      role: "Software Intern",
      period: "Nov 2024 - Present",
      status: "Ongoing",
      description: "Developing backend APIs and automation scripts.",
      stipend: "₹20,000/month",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [detailsInternship, setDetailsInternship] = useState(null);

  const theme = "light";

  function handleAddInternship(newInternship) {
    setInternships([...internships, newInternship]);
    setShowForm(false);
  }

  return (
    <section className="bg-[#f4f2ff] flex mt-18 font-sans relative">
      <div className="h-screen z-2 hidden md:flex md:fixed top-18 ">
        <SideBar />
      </div>
      <div className="min-h-screen md:ml-65 flex flex-col p-8 w-full">
        <div className="mb-3 sm:mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-slate-800 font-semibold text-lg sm:text-xl">
              Internship Records
            </h2>
            <p className="text-slate-500 text-sm">
              Log and manage internships with statuses and dates.
            </p>
          </div>
          <button
            className="inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium bg-[#6C47FF] text-white hover:bg-[#6C47FF]/80 whitespace-nowrap cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            Add Internship
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {internships.map((it, idx) => (
            <InternshipCard
              key={`${it.company}-${it.period}-${idx}`}
              {...it}
              onDetails={() => setDetailsInternship(it)}
            />
          ))}
        </div>

        {showForm && (
          <InternshipFormModal
            onAdd={handleAddInternship}
            onCancel={() => setShowForm(false)}
            theme={theme}
          />
        )}

        <InternshipDetailsModal
          internship={detailsInternship}
          onClose={() => setDetailsInternship(null)}
        />
      </div>
    </section>
  );
}
