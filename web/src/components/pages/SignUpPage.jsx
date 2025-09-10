import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const theme = useSelector((state) => state.theme.theme);
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <main className="flex flex-1 items-stretch">
            <div className="flex-1 flex items-center justify-center py-10 sm:py-16">
              <div className="w-full max-w-2xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h1
                    className="text-3xl sm:text-4xl font-bold tracking-tight"
                    style={
                      theme === "dark" ? { color: "white" } : { color: "black" }
                    }
                  >
                    Create Your Account
                  </h1>
                  <p className="mt-2 text-base text-gray-400">
                    Join the hub and unlock your potential.
                  </p>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="sr-only" htmlFor="first-name">
                        First Name
                      </label>
                      <input
                        {...register("firstName", {
                          required: true,
                          minLength: 1,
                        })}
                        autoComplete="given-name"
                        className={`${
                          theme === "dark"
                            ? "text-white placeholder-gray-400"
                            : "text-black placeholder-gray-600"
                        } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                        id="first-name"
                        placeholder="First name"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="last-name">
                        Last Name
                      </label>
                      <input
                        {...register("lastName", {
                          required: true,
                          minLength: 1,
                        })}
                        autoComplete="family-name"
                        className={`${
                          theme === "dark"
                            ? "text-white placeholder-gray-400"
                            : "text-black placeholder-gray-600"
                        } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                        id="last-name"
                        placeholder="Last name"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email address
                    </label>
                    <input
                      {...register("email", { required: true, minLength: 1 })}
                      autoComplete="email"
                      className={`${
                        theme === "dark"
                          ? "text-white placeholder-gray-400"
                          : "text-black placeholder-gray-600"
                      } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                      id="email"
                      name="email"
                      placeholder="Email address"
                      required
                      type="email"
                    />
                  </div>

                  <div className="relative">
                    <label className="sr-only" htmlFor="password">
                      Password
                    </label>
                    <input
                      {...register("password", {
                        required: true,
                        minLength: 1,
                      })}
                      autoComplete="new-password"
                      className={`${
                        theme === "dark"
                          ? "text-white placeholder-gray-400"
                          : "text-black placeholder-gray-600"
                      } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                      id="password"
                      name="password"
                      placeholder="Password"
                      required
                      type={passwordVisible ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={() => setPasswordVisible((prev) => !prev)}
                      className="absolute inset-y-0 right-3 z-10 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {passwordVisible ? <MdVisibilityOff /> : <MdVisibility />}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="sr-only" htmlFor="institution">
                        Institution
                      </label>
                      <select
                        {...register("institution", { required: true })}
                        className={`${
                          theme === "dark" ? "text-white" : "text-black"
                        } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                        id="institution"
                        name="institution"
                        required
                      >
                        <option value="">Select your institution</option>
                        <option>University of Example</option>
                        <option>College of Design</option>
                      </select>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="enrollment-number">
                        Enrollment Number
                      </label>
                      <input
                        {...register("enrollmentNumber", { required: true })}
                        className={`${
                          theme === "dark"
                            ? "text-white placeholder-gray-400"
                            : "text-black placeholder-gray-600"
                        } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                        id="enrollment-number"
                        placeholder="e.g., 21BCE0001"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="sr-only" htmlFor="course">
                        Course
                      </label>
                      <select
                        {...register("course", { required: true })}
                        className={`${
                          theme === "dark" ? "text-white" : "text-black"
                        } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                        id="course"
                        name="course"
                        required
                      >
                        <option value="">Select your course</option>
                        <option>Computer Science</option>
                        <option>Electrical Engineering</option>
                        <option>Mechanical Engineering</option>
                      </select>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="department">
                        Department
                      </label>
                      <select
                        {...register("department", { required: true })}
                        className={`${
                          theme === "dark" ? "text-white" : "text-black"
                        } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                        id="department"
                        name="department"
                        required
                      >
                        <option value="">Select your department</option>
                        <option>School of Computing</option>
                        <option>School of Electrical Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="sr-only" htmlFor="admission-year">
                        Admission Year
                      </label>
                      <select
                        {...register("admissionYear", { required: true })}
                        className={`${
                          theme === "dark" ? "text-white" : "text-black"
                        } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                        id="admission-year"
                        required
                      >
                        <option value="">Select admission year</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                      </select>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="graduation-year">
                        Graduation Year
                      </label>
                      <select
                        {...register("graduationYear", { required: true })}
                        className={`${
                          theme === "dark" ? "text-white" : "text-black"
                        } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                        id="graduation-year"
                        required
                      >
                        <option value="">Select graduation year</option>
                        <option>2027</option>
                        <option>2026</option>
                        <option>2025</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <button
                      className="group relative flex w-full justify-center rounded-full border border-transparent bg-sky-500 py-3 px-4 text-sm font-semibold text-[var(--background-color)] hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-[var(--background-color)] transition-colors duration-300"
                      type="submit"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="mt-6 text-center text-sm text-gray-400">
                  Already have an account?
                  <a
                    className="font-medium text-sky-500 hover:text-sky-300"
                    href="#"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
              <img
                alt="Students collaborating in a modern campus setting"
                className="absolute inset-0 h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgBkJAee7JUmNV55HCDbGpBKYxerIWKATBPQPaAWcIoFAtxAIzaEfBIzEPB_QoA_-cVkiwxZ0-81eGpjaSC4bvsKaHyQmr7w3d9-KL6QAjkAn8_uU05rkzYilbtnuQR_CUoAPVJ5h0SkYujGtyrbQPCrJlV0D-Ltzn47FyYUl053zGXu5L4DQ4MlYkWOMXojLeX33EFbn7q0QW6rsOjzK3M6AcYWf1sH_wC1IaxD8qzBOc4rZKJ85kUSmRulc6yDiKp9URCEJOXmhO"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
