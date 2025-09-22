import React, { useState } from "react";

export default function AddInternshipForm({ onAdd, onCancel, theme }) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    period: "",
    status: "Ongoing",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(form);
    setForm({
      company: "",
      role: "",
      period: "",
      status: "Ongoing",
      description: "",
      stipend: "",
    });
  }

  // Input style matching LoginPage
  const inputClass = `${
    theme === "dark"
      ? "text-white placeholder-gray-400 border-[#2c3e50] bg-[#2c3e50]/20"
      : "text-black placeholder-gray-600 border-[#E4E1FB] bg-white"
  } relative block w-full appearance-none rounded-lg border px-3 py-3 focus:z-10 focus:border-[#6C47FF] focus:outline-none focus:ring-[#6C47FF] sm:text-sm`;

  return (
    <form
      className={`${
        theme === "dark" ? "bg-[#2c3e50]/80 text-white" : "bg-white text-black"
      } rounded-xl shadow-md p-6 mt-8 w-full max-w-lg mx-auto`}
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-semibold mb-4">Add Internship</h3>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Company</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Company Name"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Role</label>
        <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Internship Role"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Description</label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Description of the role"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Period</label>
        <input
          type="text"
          name="period"
          value={form.period}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="e.g. Jan 2025 - Jun 2025"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Stipend</label>
        <input
          type="text"
          name="stipend"
          value={form.stipend}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Stipend Amount (e.g. Rs. 10000/month)"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="flex gap-2 mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-[#6C47FF] text-white rounded-full hover:bg-[#6C47FF]/80"
        >
          Add
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-full ${
            theme === "dark"
              ? "bg-[#2c3e50] text-white hover:bg-[#6C47FF]/80"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
