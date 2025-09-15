import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCloudUpload } from "react-icons/io";

const VolunteerForm = React.memo(({ vFormVisible, setVFormVisible }) => {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };


  return (
    <div className="z-10 bg-white shadow-2xl p-6 rounded-lg">
      <h1 className="text-2xl mb-4 font-bold text-gray-900">
        Add Volunteer Activity
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-60 md:w-80">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-black">
            Title
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="e.g., Community Outreach"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Role */}
        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="text-black">
            Role
          </label>
          <input
            type="text"
            {...register("role", { required: true })}
            placeholder="e.g., Event Coordinator"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Duration & Hours */}
        <div className="flex gap-2">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="duration" className="text-black">
              Duration
            </label>
            <input
              type="text"
              {...register("duration", { required: true })}
              placeholder="Select Date Range"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="hours" className="text-black">
              Hours
            </label>
            <input
              type="number"
              {...register("hours", { required: true, min: 0 })}
              placeholder="Enter Hours"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Submit
          </button>
          <button
            type="button"
            className="mt-4 px-6 py-2 border border-purple-600 text-purple-600 rounded-lg hover:border-purple-700"
            onClick={() => setVFormVisible(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
});

export default VolunteerForm;
