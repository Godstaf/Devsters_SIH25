import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { IoMdCloudUpload } from "react-icons/io";

const WorkShopForm = React.memo(({ wFormH, setWFormH }) => {
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
      <h1 className="text-2xl mb-4 font-bold">Add Workshop</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-60 md:w-100 gap-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-black">
            Title
          </label>
          <input
            type="text"
            {...register("title", { required: true, minLength: 1 })}
            className={`relative block placeholder-gray-500 w-full appearance-none rounded-lg border border-[#2c3e50] px-3 py-3 focus:z-10 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm`}
            id="title"
            placeholder="Enter workshop title"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="date" className="text-black">
            Date
          </label>
          <input
            type="date"
            {...register("date", { valueAsDate: true })}
            className="relative block placeholder-gray-500 w-full appearance-none rounded-lg border border-[#2c3e50] px-3 py-3 focus:z-10 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
            id="date"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="organizer" className="text-black">
            Organizer
          </label>
          <input
            type="text"
            {...register("organizer", { required: true, minLength: 1 })}
            className={`relative block placeholder-gray-500 w-full appearance-none rounded-lg border border-[#2c3e50] px-3 py-3 focus:z-10 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm`}
            id="organizer"
            placeholder="Enter organizer name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="keyLearnings" className="text-lg text-black">
            Key Learnings
          </label>
          <textarea
            id="keyLearnings"
            {...register("keyLearnings", { required: true, minLength: 5 })}
            placeholder="Enter the main takeaways or lessons from this workshop"
            className="mt-1 block w-full rounded-lg border border-[#2c3e50] px-3 py-3 placeholder-gray-500 focus:z-10 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
            rows={4} // controls visible height
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
            onClick={()=>setWFormH(prev=>!prev)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
})

export default WorkShopForm
