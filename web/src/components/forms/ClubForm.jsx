import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { IoMdCloudUpload } from "react-icons/io";

const ClubForm = React.memo(({ clubFormH, setClubFormH }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [file, setFile] = useState(null);

  const onSubmit = (data) => {
    console.log("Form data:", data);
    console.log("Uploaded file:", file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile)); // preview
      setValue("image", uploadedFile); // update react-hook-form
    }
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile));
      setValue("image", uploadedFile);
    }
  };
  return (
    <div className="z-10 bg-white shadow-2xl p-6 rounded-lg">
      <h1 className="text-2xl mb-4 font-bold">Add Club Membership</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-60 md:w-80 gap-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="clubName" className="text-black">
            Club Name
          </label>
          <input
            type="text"
            {...register("clubName", { required: true, minLength: 1 })}
            className={`relative block placeholder-gray-500 w-full appearance-none rounded-lg border border-[#2c3e50] px-3 py-3 focus:z-10 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm`}
            id="clubName"
            placeholder="Enter Club Name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="text-black">
            Role
          </label>
          <input
            type="text"
            {...register("role", { required: true, minLength: 1 })}
            className={`relative block placeholder-gray-500 w-full appearance-none rounded-lg border border-[#2c3e50] px-3 py-3 focus:z-10 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm`}
            id="role"
            placeholder="Enter role"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="duration" className="text-black">
            Duration
          </label>
          <input
            type="text"
            {...register("duration", { required: true, minLength: 1 })}
            className={`relative block placeholder-gray-500 w-full appearance-none rounded-lg border border-[#2c3e50] px-3 py-3 focus:z-10 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm`}
            id="duration"
            placeholder="Enter duration"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="w-full h-40 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-purple-500"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById("fileInput").click()}
          >
            <div className="flex justify-center items-center">
              <IoMdCloudUpload size={27} />
            </div>
            <p className="text-gray-600">Drag & drop an image here</p>
            <p className="text-sm text-gray-400">or click to browse</p>
          </div>

          {/* Hidden input for react-hook-form */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            {...register("image", { required: false })}
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Preview */}
          {file && (
            <div className="mt-4">
              <img
                src={file}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-lg border"
              />
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Submit
          </button>
          <button
            type="button"
            className="mt-6 px-6 py-2 border-1 border-purple-600 text-purple-600 rounded-lg hover:border-purple-700"
            onClick={() => setClubFormH((prev) => !prev)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
});

export default ClubForm