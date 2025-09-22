import React, { useRef, useState } from 'react'
import SideBar from '../layout_files/SideBar'
import { MdEvent } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosHourglass } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const ActivityTracker = () => {
    const dateInputRef = useRef(null);
    const [activities, setActivities] = useState([
        { name: 'Seminar on AI Ethics', category: 'Academic', type: 'Seminar', date: '2024-03-15', status: 'Completed' },
        { name: 'National Conference on Technology', category: 'Academic', type: 'Conference', date: '2024-04-20', status: 'Upcoming' },
        { name: 'Summer Internship at Tech Innovators', category: 'Extracurricular', type: 'Internship', date: '2024-06-01', status: 'Applied' },
        { name: 'Yoga Session', category: 'Personal', type: 'Wellness', date: '2024-05-10', status: 'Completed' },
    ])
    const [form, setForm] = useState({ name: '', category: 'Academic', type: 'Workshop', date: '', status: 'Planning' })
    const [editingIndex, setEditingIndex] = useState(null)

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.name || !form.category || !form.type || !form.date || !form.status) return
        if (editingIndex !== null) {
            setActivities((prev) => prev.map((act, idx) => idx === editingIndex ? { ...form } : act))
            setEditingIndex(null)
        } else {
            setActivities((prev) => [...prev, { ...form }])
        }
        setForm({ name: '', category: 'Academic', type: 'Workshop', date: '', status: 'Planning' })
    }

    const handleEdit = (index) => {
        const item = activities[index]
        setForm({ name: item.name, category: item.category, type: item.type, date: item.date, status: item.status })
        setEditingIndex(index)
        // document.getElementById('activity-form')?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleDelete = (index) => {
        setActivities((prev) => prev.filter((_, i) => i !== index))
        if (editingIndex === index) {
            setEditingIndex(null)
            setForm({ name: '', category: 'Academic', type: 'Workshop', date: '', status: 'Planning' })
        }
    }
    return (
        <div className="bg-[#f4f2ff] md:flex mt-18 font-sans relative w-full">
            <div className="h-screen z-2 hidden md:flex md:fixed top-18 ">
                <SideBar />
            </div>
            <div className="min-h-screen md:w-[50%] relative md:ml-65 flex flex-1 flex-col p-8 ">
                <div className="max-w-full mx-">
                    <div className="flex items-center mb-6 ">
                        <div className='font-bold md:text-4xl text-3xl md: w-full flex items-center my-3'>
                            <div>Activity Tracker</div>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-5">
                        <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-offset-2 cursor-pointer">All</button>

                        <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-offset-2 cursor-pointer">Academic</button>

                        <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-offset-2 cursor-pointer">Extracurricular</button>

                        <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-offset-2 cursor-pointer">Personal</button>
                    </div>

                    <div className="mb-8 bg-white shadow-md rounded-lg p-6 ">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <span className="material-icons text-blue-600 text-2xl"><MdEvent /></span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Total Activities</p>
                                    <p className="text-2xl font-bold text-gray-900">13</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    <span className="material-icons text-green-600 text-2xl"><FaCheckCircle /></span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Completed</p>
                                    <p className="text-2xl font-bold text-gray-900">6</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                                    <span className="material-icons text-yellow-600 text-2xl"><IoIosHourglass /></span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Upcoming</p>
                                    <p className="text-2xl font-bold text-gray-900">3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-x-auto max-w-full">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {activities.map((act, index) => (
                                    <tr key={`${act.name}-${act.date}`}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{act.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{act.category}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{act.type}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{act.date}</td>
                                        <td className="px-6 py-4">
                                            {act.status === 'Completed' && (
                                                <span className="px-3 py-1 text-xs font-bold leading-5 text-green-800 bg-green-100 rounded-full">Completed</span>
                                            )}
                                            {act.status === 'Upcoming' && (
                                                <span className="px-3 py-1 text-xs font-bold leading-5 text-yellow-800 bg-yellow-100 rounded-full">Upcoming</span>
                                            )}
                                            {act.status === 'Applied' && (
                                                <span className="px-3 py-1 text-xs font-bold leading-5 text-blue-800 bg-blue-100 rounded-full">Applied</span>
                                            )}
                                            {act.status !== 'Completed' && act.status !== 'Upcoming' && act.status !== 'Applied' && (
                                                <span className="px-3 py-1 text-xs font-bold leading-5 text-gray-800 bg-gray-100 rounded-full">{act.status}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="inline-flex gap-2">
                                                <button type="button" aria-label="Edit activity" onClick={() => handleEdit(index)} className="h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-gray-600 transition-colors">
                                                    <FiEdit2 size={16} />
                                                </button>
                                                <button type="button" aria-label="Delete activity" onClick={() => handleDelete(index)} className="h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-gray-600 transition-colors">
                                                    <FiTrash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Activity</h2>
                        <form id="activity-form" className="bg-white shadow-md rounded-lg p-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" for="activity-name">Activity Name</label>
                                    <input className="block w-full px-4 py-2 my-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="activity-name" name="name" placeholder="e.g., Hackathon" type="text" value={form.name} onChange={handleFormChange} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" for="activity-category">Category</label>
                                    <select className="block w-full px-4 py-2 my-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="activity-category" name="category" value={form.category} onChange={handleFormChange}>
                                        <option value="Academic">Academic</option>
                                        <option value="Extracurricular">Extracurricular</option>
                                        <option value="Personal">Personal</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" for="activity-type">Activity Type</label>
                                    <select className="block w-full px-4 py-2 my-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="activity-type" name="type" value={form.type} onChange={handleFormChange}>
                                        <option value="Workshop">Workshop</option>
                                        <option value="Seminar">Seminar</option>
                                        <option value="Conference">Conference</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Project">Project</option>
                                        <option value="Wellness">Wellness</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" for="activity-date">Date</label>
                                    <div className="relative">
                                        <input id="activity-date"
                                            name="date"
                                            type="date"
                                            ref={dateInputRef}
                                            value={form.date}
                                            onChange={handleFormChange}
                                            className="block w-full pr-10 px-4 py-2 my-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" />
                                        <button type="button"
                                            aria-label="Open calendar"
                                            onClick={() => {
                                                if (dateInputRef.current) {
                                                    if (typeof dateInputRef.current.showPicker === 'function') {
                                                        dateInputRef.current.showPicker();
                                                    } else {
                                                        dateInputRef.current.focus();
                                                        dateInputRef.current.click();
                                                    }
                                                }
                                            }}
                                            className="absolute inset-y-0 right-0 my-2 mr-3 flex items-center text-gray-500 hover:text-gray-700">
                                            <MdEvent size={20} />
                                        </button>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700" for="activity-status">Status</label>
                                    <select className="block w-full px-4 py-2 my-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="activity-status" name="status" value={form.status} onChange={handleFormChange}>
                                        <option value="Planning">Planning</option>
                                        <option value="Applied">Applied</option>
                                        <option value="Upcoming">Upcoming</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end gap-3">
                                {editingIndex !== null && (
                                    <button type="button" onClick={() => { setEditingIndex(null); setForm({ name: '', category: 'Academic', type: 'Workshop', date: '', status: 'Planning' }) }} className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                                        Cancel
                                    </button>
                                )}
                                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit">
                                    <span className="material-icons mr-2 -ml-1 text-xl"><IoMdAdd /></span>
                                    {editingIndex !== null ? 'Update Activity' : 'Add Activity'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ActivityTracker
