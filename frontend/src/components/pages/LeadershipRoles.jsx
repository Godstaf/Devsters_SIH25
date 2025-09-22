import React, { useState } from 'react'
import SideBar from '../layout_files/SideBar'
import { GiStarMedal } from "react-icons/gi";
import { FiEdit2, FiTrash2 } from "react-icons/fi";


const Experience = () => {
    const [experiences, setExperiences] = useState([
        {
            title: 'President',
            organization: 'Student Government Association',
            bio: 'Led weekly meetings, represented the student body to the administration, and oversaw all club activities, fostering a collaborative and effective student governance environment.',
            year: '2022 - 2023'
        },
        {
            title: 'Vice President',
            organization: 'Debate Club',
            bio: 'Organized inter-collegiate debate tournaments, led recruitment drives that increased membership by 40%, and assisted the president in daily operational management.',
            year: '2021 - 2022'
        },
        {
            title: 'Treasurer',
            organization: 'Chess Club',
            bio: 'Managed club finances, including budget creation, fundraising, and transparent financial reporting. Ensugray fiscal responsibility and resource allocation for club events.',
            year: '2020 - 2021'
        }
    ])
    const [form, setForm] = useState({ title: '', organization: '', bio: '', year: '' })
    const [editingIndex, setEditingIndex] = useState(null)
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.title || !form.organization || !form.bio || !form.year) return
        if (editingIndex !== null) {
            setExperiences((prev) => prev.map((item, idx) => idx === editingIndex ? { ...item, ...form } : item))
            setEditingIndex(null)
        } else {
            setExperiences((prev) => [...prev, { title: form.title, organization: form.organization, bio: form.bio, year: form.year }])
        }
        setForm({ title: '', organization: '', bio: '', year: '' })
    }
    const handleEdit = (index) => {
        const item = experiences[index]
        setForm({ title: item.title, organization: item.organization, bio: item.bio, year: item.year })
        setEditingIndex(index)
        // Optionally scroll to form: document.getElementById('add-role-form')?.scrollIntoView({ behavior: 'smooth' })
    }
    const handleDelete = (index) => {
        setExperiences((prev) => prev.filter((_, i) => i !== index))
        if (editingIndex === index) {
            setEditingIndex(null)
            setForm({ title: '', organization: '', bio: '', year: '' })
        }
    }
    return (
        <div>
            <div className="bg-[#f4f2ff] md:flex mt-18 font-sans relative w-full">
                <div className="h-screen z-2 hidden md:flex md:fixed top-18 ">
                    <SideBar />
                </div>
                <div className="min-h-screen md:w-[50%] relative md:ml-65 flex flex-1 flex-col p-8 ">
                    <main className="container px-1">
                        <div className="mb-10">
                            <h2 className="text-4xl font-bold text-gray-800">Leadership Roles</h2>
                            <p className="text-gray-600 mt-2">A comprehensive record of your leadership positions and contributions.</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Leadership Timeline</h3>

                            
                            <div className="relative">
                                
                                <div className="absolute left-6 top-0 bottom-0 w-px bg-purple-200" aria-hidden="true"></div>
                                <ul className="space-y-10">
                                    {experiences.map((exp, index) => {
                                        const isLast = index === experiences.length - 1;
                                        return (
                                            <li className="relative pl-14" key={`${exp.title}-${exp.year}`}>
                                                <span className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-purple-200">
                                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                                        <GiStarMedal className="h-6 w-6" />
                                                    </span>
                                                </span>
                                                {isLast && (
                                                    <span className="absolute left-6 top-[1.75rem] bottom-0 w-px bg-[#f4f2ff]" aria-hidden="true"></span>
                                                )}
                                                <div className="bg-white p-3 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg relative">
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                                                            <p className="text-gray-600 my-2 font-medium">{exp.organization}</p>
                                                            <p className="text-gray-500 mt-2 text-sm">{exp.bio}</p>
                                                        </div>
                                                        <div className="text-gray-500 font-medium text-sm whitespace-nowrap">{exp.year}</div>
                                                    </div>
                                                    <div className="absolute bottom-3 right-3 flex gap-2">
                                                        <button type="button" aria-label="Edit role" onClick={() => handleEdit(index)} className="h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-gray-800 transition-colors">
                                                            <FiEdit2 size={16} />
                                                        </button>
                                                        <button type="button" aria-label="Delete role" onClick={() => handleDelete(index)} className="h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-gray-800 transition-colors">
                                                            <FiTrash2 size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        {/* Add New Leadership Role */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Leadership Role</h2>
                            <form id="add-role-form" className="bg-white shadow-md rounded-lg p-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="role-title">Title</label>
                                        <input className="block w-full px-4 py-2 my-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="role-title" name="title" placeholder="e.g., President" type="text" value={form.title} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="role-organization">Organization / Club</label>
                                        <input className="block w-full px-4 py-2 my-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="role-organization" name="organization" placeholder="e.g., Debate Club" type="text" value={form.organization} onChange={handleChange} />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="role-bio">More Information</label>
                                        <textarea className="block w-full px-4 py-2 my-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="role-bio" name="bio" placeholder="Describe responsibilities, achievements, impact..." rows="3" value={form.bio} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="role-year">Year</label>
                                        <input className="block w-full px-4 py-2 my-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="role-year" name="year" placeholder="e.g., 2022 - 2023" type="text" value={form.year} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-end gap-3">
                                    {editingIndex !== null && (
                                        <button type="button" onClick={() => { setEditingIndex(null); setForm({ title: '', organization: '', bio: '', year: '' }) }} className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                                            Cancel
                                        </button>
                                    )}
                                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" type="submit">
                                        {editingIndex !== null ? 'Update Role' : 'Add Role'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Experience
