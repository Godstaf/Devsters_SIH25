import React from "react";
import { useForm } from "react-hook-form";

const ConferenceForm = React.memo(({ cFormH, setCFormH }) => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log("Conference Data:", data);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">Add Conference</h1>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-4 w-60 md:w-90"
        >
          {/* Title */}
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="text-black text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="e.g. React Conf 2024"
              {...register("title", { required: true })}
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="text-black text-sm font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              {...register("date", { required: true })}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="location"
              className="text-black text-sm font-medium"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="e.g. San Francisco, CA"
              {...register("location", { required: true })}
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Role */}
          <div className="flex flex-col gap-1">
            <label htmlFor="role" className="text-black text-sm font-medium">
              Role
            </label>
            <select
              id="role"
              {...register("role", { required: true })}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
              defaultValue="Attendee"
            >
              <option value="Attendee">Attendee</option>
              <option value="Speaker">Speaker</option>
              <option value="Organizer">Organizer</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={()=>setCFormH(prev=>!prev)}
              className="px-5 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Conference
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default ConferenceForm;
