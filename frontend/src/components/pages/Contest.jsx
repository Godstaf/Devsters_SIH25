
import React, { useState, useRef, useEffect } from "react";
import SideBar from "../layout_files/SideBar";
import { MdMenuBook } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";
const Contest = () => {
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        if (isNaN(date)) return dateStr;
        const day = String(date.getDate()).padStart(2, "0");
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
    const [contests, setContests] = useState([
        {
            title: "Math Olympiad",
            subject: "Mathematics",
            rank: "Top 10%",
            date: "2025-9-10",
        },
        {
            title: "Physics Bowl",
            subject: "Physics",
            rank: "1st Place",
            date: "2025-10-20",
        },
        {
            title: "Literature Quiz",
            subject: "Literature",
            rank: "2nd Place",
            date: "2024-01-25",
        },
         {
            title: "Literature Quiz",
            subject: "Literature",
            rank: "2nd Place",
            date: "2026-01-25",
        },{
            title: "Literature Quiz",
            subject: "Literature",
            rank: "2nd Place",
            date: "2024-01-25",
        },{
            title: "Literature Quiz",
            subject: "Literature",
            rank: "2nd Place",
            date: "2024-01-25",
        }
    ]);

    const [showForm, setShowForm] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        title: "",
        subject: "",
        rank: "",
        date: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!formData.title || !formData.subject || !formData.date) return;
        const newContest = {
            title: formData.title,
            subject: formData.subject,
            rank: formData.rank || "--",
            date: formData.date,
        };
        if (editIndex !== null) {
            setContests((prev) => prev.map((c, i) => (i === editIndex ? newContest : c)));
        } else {
            setContests((prev) => [...prev, newContest]);
        }
        setFormData({ title: "", subject: "", rank: "", date: "" });
        setEditIndex(null);
        setShowForm(false);
    }

    function handleEdit(index) {
        const c = contests[index];
        setFormData({ title: c.title, subject: c.subject, rank: c.rank === "--" ? "" : c.rank, date: c.date });
        setEditIndex(index);
        setShowForm(true);
    }

    function handleDelete(index) {
        setContests((prev) => prev.filter((_, i) => i !== index));
        if (editIndex === index) {
            setEditIndex(null);
            setShowForm(false);
        }
    }

    useEffect(() => {
        if (showForm && formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [showForm]);

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

        <div className="h-screen bg-[#f4f2ff] flex font-sans relative">
            {/* Sidebar */}
            <div className="h-screen hidden md:flex md:fixed top-0 left-0">
                <SideBar />
            </div>

            {/* Main Content */}
            <div className="flex-1 md:pl-64 p-6 overflow-y-auto pt-25">
                <section className="mb-8 flex flex-col pl-10">
                    {/* Heading */}
                    {/* <div className="flex flex-col items-center mb-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] flex items-center gap-3">
              <img src="/monitorsvg.svg" className="w-10" alt="Contests" />
              Contests
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mt-2">
              Manage contests with schedules, submissions, and results.
            </p>
          </div> */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl max-[400px]:pt-10 max-[400px]:text-2xl max-[400px]:text-center  lg:text-4xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                                <span className=" text-4xl">
                                <FaTrophy />
                                </span>
                                Contests
                            </h1>
                            <button
                                onClick={() => setShowForm((prev) => !prev)}
                                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 active:bg-indigo-800"
                            >
                                Add Contest
                            </button>
                        </div>
                        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                            Manage contests with schedules, submissions, and results.
                        </p>
                    </div>

                    {/* Timeline List */}
                    <div className="relative w-full max-w-4xl pl-8 pt-10  ">
                        <div className="space-y-8">
                            {contests.map((contest, index) => (
                                <div
                                    key={index}
                                    className="relative flex items-start gap-4"
                                >
                                    {index !== contests.length - 1 && (
                                        <div className="absolute -left-4 top-6 -bottom-8 w-[0.1rem] bg-red-200"></div>
                                    )}
                                    {/* Icon */}
                                    <div className="absolute -left-9 top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-500">
                                        <span className="material-symbols-outlined">
                                            <MdMenuBook />
                                        </span>
                                    </div>
                                    {/* Card */}
                                    <div className="flex-1 relative rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                                        <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${new Date(contest.date) > new Date() ? "bg-yellow-100 text-yellow-700 font-semibold " : "bg-emerald-100 text-emerald-700 font-semibold"}`}>
                                            {new Date(contest.date) > new Date() ? "Upcoming" : "Done"}
                                        </span>
                                        <p className="font-semibold text-slate-800">
                                            {contest.title}
                                        </p>
                                        <p className="text-sm text-slate-500 pt-2">
                                            <span className="font-medium">Subject:</span>{" "}
                                            {contest.subject} |{" "}
                                            <span className="font-medium">Rank/Score:</span>{" "}
                                            {new Date(contest.date) > new Date() ? "--" : contest.rank} |{" "}
                                            <span className="font-medium">Date:</span>{" "}
                                            {formatDate(contest.date)}
                                        </p>
                                        <div className="mt-3 flex justify-end gap-2">
                                            <button
                                                type="button"
                                                onClick={() => handleEdit(index)}
                                                className="px-3 py-1 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDelete(index)}
                                                className="px-3 py-1 text-xs rounded-md border border-rose-300 text-rose-700 hover:bg-rose-50"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {showForm && (
                        <div ref={formRef} className="mt-10 max-w-4xl pl-8">
                            <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white text-black p-4 shadow-sm">
                                <h2 className="text-lg font-semibold text-slate-800 mb-4">Add New Contest</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label className="text-sm text-slate-600 mb-1">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="input input-bordered w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="e.g., Code Challenge"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm text-slate-600 mb-1">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="input input-bordered w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="e.g., Computer Science"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm text-slate-600 mb-1">Rank/Score</label>
                                        <input
                                            type="text"
                                            name="rank"
                                            value={formData.rank}
                                            onChange={handleChange}
                                            className="input input-bordered w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="e.g., 1st Place"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm text-slate-600 mb-1">Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="input input-bordered w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center gap-3">
                                    <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 active:bg-indigo-800">Save</button>
                                    <button type="button" onClick={() => setShowForm(false)} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Cancel</button>
                                </div>
                            </form>
                        </div>
                    )}
                </section>
            </div>
        </div>
        </>
    );
};

export default Contest;

