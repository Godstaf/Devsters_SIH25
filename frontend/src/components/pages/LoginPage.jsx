import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const theme = useSelector((state)=> state.theme.theme);
  const [visibility, setVisibility] = useState('false')

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* bg-[#1a1a1a] */}
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <main className="flex flex-1 items-stretch">
            <div className="flex-1 flex items-center justify-center py-10 sm:py-16">
              <div className="w-full max-w-md p-6 sm:p-8">
                <div className="text-center">
                  <h1
                    className="text-3xl sm:text-4xl font-bold tracking-tight"
                    style={
                      theme === "dark" ? { color: "white" } : { color: "black" }
                    }
                  >
                    Welcome Back
                  </h1>
                  <p className="mt-2 text-base text-gray-400">
                    Log in to continue to your dashboard.
                  </p>
                </div>
                <form
                  className="mt-8 space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-3">
                    <div>
                      <label className="sr-only" htmlFor="email-address">
                        Email address
                      </label>
                      <input
                        {...register("email", { required: true, minLength: 1 })}
                        autoComplete="email"
                        className={`${
                          theme === "dark"
                            ? "text-white placeholder-gray-400"
                            : "text-black placeholder-gray-600"
                        } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3  focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                        id="email-address"
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
                        autoComplete="current-password"
                        className={`${
                          theme === "dark"
                            ? "text-white placeholder-gray-400"
                            : "text-black placeholder-gray-600"
                        } relative block w-full appearance-none rounded-lg border border-[#2c3e50] bg-[#2c3e50]/20 px-3 py-3 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                        type={!visibility ? "password" : "text"}
                      />
                      <button
                        type="button"
                        onClick={() => setVisibility((prev) => !prev)}
                        className="absolute inset-y-0 right-3 z-10 flex items-center text-gray-400 hover:text-gray-600"
                      >
                        {visibility ? <MdVisibilityOff /> : <MdVisibility />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="text-sm">
                      <a
                        className="font-medium text-sky-500 hover:text-sky-400"
                        href="#"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      className="group relative flex w-full justify-center rounded-full border border-transparent bg-sky-500 py-3 px-4 text-sm font-semibold text-[var(--background-color)] hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-[var(--background-color)] transition-colors duration-300"
                      type="submit"
                    >
                      Log in
                    </button>
                  </div>
                </form>
                <p className="mt-6 text-center text-sm text-gray-400">
                  Don't have an account?
                  <a
                    className="font-medium text-sky-500 hover:text-sky-300"
                    href="#"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
              <img
                alt="Students collaborating in a modern university setting"
                className="absolute inset-0 h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-c0wz_sIrF46IXKACoVMotoQq0v7cn89EEH9uwaRDSWpwwtPr7O0j6Nbt21n8-9g3hwbP8AnLDdbdJ-voMiIhIRd2uqLxpYp-BhU7xkaTkl9qsXJL6l9v5X1NjPDPE981dC3tHrEyg6FLOF8_8FbKCxXeZ6X-8In27ELCKLOSGVZgTIQKdOcGf8ZzGwkbdhMiSjZjfralZfn4Cga43qE7p-VVKGSPJVfZEMA5UoTfcXHq87B2FIjIMZdEFEn1bCyR8mphcL88FXRH"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LoginPage
