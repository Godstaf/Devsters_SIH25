import React from "react";
import { GoBriefcase, GoTrophy } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { FaChartPie, FaCheckCircle, FaCopy, FaDownload, FaExternalLinkAlt, FaFileUpload, FaHourglassHalf, FaTimesCircle } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";


const Temp = () => {
  return (
    <>
      <style>{`
    :root {
      --primary-color: #6C47FF;
      --secondary-color: #F3F0FF;
      --background-color: #F8F9FF;
      --text-primary: #1A1A1A;
      --text-secondary: #4B5563;
      --accent-color: #6C47FF;
      --border-color: #E5E7EB;
    }
    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--background-color);
      color: var(--text-primary);
    } 
  `}</style>
      <div className="bg-[var(--background-color)] text-[var(--text-primary)] antialiased">
        <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <main className="container mx-auto px-8  md:px-16 py-12 ">{/* max-w-4xl */}
              <section className="mb-16" id="about">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="flex-shrink-0">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-40 border-4 border-white shadow-lg"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-riymnQavKdYrhp1CnKgZ2uTbpu8ey7FwEuTQt8uNwalgLiXGBI5L7uehB_MIQCRTOgc5LOe1gycvg1pGYdr11RQQsUf7fjDgX36SEC70BZKWa9YAFH2twol1pllTKpnTN-gUzZR_jKFL5__c3JUXSkezCz3Dr_I7jBK35qVDFSNJPBR2C7n5-X8VjGTo7TMaqGAksAy2EV_wEoPRNCkSaOluSsWSeDbPypB_ipprRUjanoF01mcBDAyowWyN26XvQ8u55COlFEM")',
                      }}
                    ></div>
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-[var(--text-primary)] mb-2 lg:text-5xl">
                      Sophia Carter
                    </h2>
                    <p className="text-xl font-medium text-[var(--primary-color)] mb-3">
                      Aspiring Software Engineer
                    </p>
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                      sophia.carter@email.com | (555) 123-4567
                    </p>
                    <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed max-w-prose">
                      Highly motivated and creative computer science student at
                      State University with a passion for developing innovative
                      software solutions. Seeking opportunities to apply
                      technical skills and contribute to impactful projects.
                    </p>
                  </div>
                </div>
              </section>
              <div className="space-y-12">
                <section id="education">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 border-b-2 border-[var(--primary-color)] pb-2">
                    Education
                  </h3>
                  <div className="bg-white rounded-md shadow-sm border border-[var(--border-color)] p-6">
                    <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                      State University
                    </h4>
                    <p className="text-[var(--text-secondary)]">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] italic">
                      Expected Graduation: May 2025
                    </p>
                  </div>
                </section>
                <section id="skills">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 border-b-2 border-[var(--primary-color)] pb-2">
                    Skills &amp; Certifications
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--secondary-color)] text-[var(--primary-color)]">
                      Java
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--secondary-color)] text-[var(--primary-color)]">
                      Python
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--secondary-color)] text-[var(--primary-color)]">
                      C++
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--secondary-color)] text-[var(--primary-color)]">
                      JavaScript
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--secondary-color)] text-[var(--primary-color)]">
                      React
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--secondary-color)] text-[var(--primary-color)]">
                      SQL
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--secondary-color)] text-[var(--primary-color)]">
                      Git
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--secondary-color)] text-[var(--primary-color)]">
                      Agile
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--secondary-color)] text-[var(--primary-color)]">
                      AWS Certified Cloud Practitioner
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--secondary-color)] text-[var(--primary-color)]">
                      CompTIA Security+
                    </span>
                  </div>
                </section>
                <section id="projects">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 border-b-2 border-[var(--primary-color)] pb-2">
                    Projects
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-md shadow-sm border border-[var(--border-color)] overflow-hidden">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPUTFCkNYQGoztGDm1G5LxXsYaEkOfZk1bYeN5sA39aBqI8bP7u5--9xh4P39m-LyktPkAaMSFYfxgxIVi2ceXOPuE94zrugTlfMRP2UQDMVGTdFBcgMzPX8fn0KULX0o2S3TxoZuh5zuwLt9eEURDgpbXl5h8zxe8h-yyGk6ChzMe3BCjEO2r2cJL_LLk8M2njEgfPsEjGbJM_OokJst_klwMwGowIUlIO2EDBSctJQWbuazOSSeLw8OKt0-Uo-QBiRkvGIQoA54")',
                        }}
                      ></div>
                      <div className="p-6">
                        <p className="text-sm font-medium text-[var(--primary-color)] mb-1">
                          Featured Project
                        </p>
                        <h4 className="text-lg font-bold text-[var(--text-primary)]">
                          EcoTrack: Sustainability App
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] mt-2">
                          Developed a mobile app to track and reduce carbon
                          footprint, incorporating gamification and community
                          features.
                        </p>
                        <a
                          className="inline-block mt-4 text-[var(--primary-color)] hover:underline font-medium"
                          href="#"
                        >
                          View Project →
                        </a>
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-sm border border-[var(--border-color)] overflow-hidden">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7gu-K30PCe2uduFd3UQMF3v89X7ldi-RPyGRojt0CMjRsOsdYgB-ecuLuiN_2r43SZk_YyBX2KVIQvXEC4HoZaTqYtEnh8FLx046WY0ny0GAbW1Fcl1iYXx8aGJytuJYHyOW3JqurGDryYYnVuyIUxmuqiYvk9sofIsaMRK82tsehn30RWFswcNGiOiMsaa-rMPIMN_0B-rypkcjUsQj--6YenRMQuYIANeGbb37w4LB8KmCTKtkODfzCBDHxjRB-Vp6oWUEYSW4")',
                        }}
                      ></div>
                      <div className="p-6">
                        <p className="text-sm font-medium text-[var(--primary-color)] mb-1">
                          Personal Project
                        </p>
                        <h4 className="text-lg font-bold text-[var(--text-primary)]">
                          Portfolio Website
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] mt-2">
                          Designed and built a personal portfolio website using
                          React, showcasing projects, skills, and experience.
                        </p>
                        <a
                          className="inline-block mt-4 text-[var(--primary-color)] hover:underline font-medium"
                          href="#"
                        >
                          View Project →
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="flex flex-col md:flex-row gap-6 w-full">
                  <div className="flex flex-col w-full">
                    {/* left column */}

                    {/* Career & Job Applications */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                      <div className="flex gap-3">
                        <GoBriefcase
                          size={25}
                          className="text-[var(--primary-color)]"
                        />
                        <h1 className="text-lg font-semibold text-[var(--text-primary)]">
                          Career & Job Applications
                        </h1>
                      </div>

                      <div className="mt-4 flex flex-col gap-4">
                        <div className="p-4 bg-[var(--background-color)] rounded-xl flex md:flex-row flex-col gap-5 justify-between items-center">
                          <div>
                            <h1 className="text-md font-semibold text-[var(--text-primary)]">
                              Resume Auto Builder
                            </h1>
                            <p className="mt-2">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Labore, aspernatur!
                            </p>
                          </div>
                          <button className="bg-[var(--primary-color)] text-white flex items-center p-2 gap-2 rounded-lg">
                            <CiStar /> <span>Build Resume</span>
                          </button>
                        </div>
                        <div className="p-4 bg-[var(--background-color)] rounded-xl flex md:flex-row flex-col gap-5 justify-between items-center">
                          <div>
                            <h1 className="text-md font-semibold text-[var(--text-primary)]">
                              Upload/Link Resume
                            </h1>
                            <p className="mt-2">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Labore, aspernatur!
                            </p>
                          </div>
                          <button className="bg-[var(--primary-color)] text-white flex items-center p-2 gap-2 rounded-lg">
                            <FaFileUpload /> <span>Upload/Link</span>
                          </button>
                        </div>
                      </div>

                      <h1 className="text-lg mt-6 font-semibold text-[var(--text-primary)]">
                        Job Tracker
                      </h1>

                      <div>
                        <div className="overflow-x-auto rounded-lg overflow-clip shadow-lg">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="p-2 text-left">Company</th>
                                <th className="p-2 text-left">Role</th>
                                <th className="p-2 text-left">Status</th>
                                <th className="p-2 text-left">Date Applied</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="p-2 font-semibold">
                                  Tech Innovators Inc.
                                </td>
                                <td className="p-2">
                                  Software Engineer Intern
                                </td>
                                <td className="p-2 text-yellow-600 flex items-center gap-1">
                                  <FaHourglassHalf /> Interviewing
                                </td>
                                <td className="p-2">2024-01-15</td>
                              </tr>
                              <tr>
                                <td className="p-2 font-semibold">
                                  Global Solutions Ltd.
                                </td>
                                <td className="p-2">Data Analyst</td>
                                <td className="p-2 text-green-600 flex items-center gap-1">
                                  <FaCheckCircle /> Applied
                                </td>
                                <td className="p-2">2024-02-20</td>
                              </tr>
                              <tr>
                                <td className="p-2 font-semibold">
                                  Creative Minds Co.
                                </td>
                                <td className="p-2">UX/UI Designer</td>
                                <td className="p-2 text-red-600 flex items-center gap-1">
                                  <FaTimesCircle /> Rejected
                                </td>
                                <td className="p-2">2024-03-05</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <button className="mt-3 px-4 py-2 border text-[var(--primary-color)] rounded-lg flex items-center gap-2">
                          <FaExternalLinkAlt /> Export Recruiter View
                        </button>
                      </div>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg mt-6">
                      <div className="flex gap-3">
                        <CiStar
                          size={25}
                          className="text-[var(--primary-color)]"
                        />
                        <h1 className="text-lg font-semibold text-[var(--text-primary)]">
                          Skill Recognition & Endorsements
                        </h1>
                      </div>
                      {/* Categories */}

                      <div className="flex gap-4 mt-2 overflow-x-auto">
                        <p className="p-2 rounded-2xl bg-slate-200">
                          Technical
                        </p>
                        <p className="p-2 rounded-2xl bg-slate-200">
                          Soft_Skill
                        </p>
                        <p className="p-2 rounded-2xl bg-slate-200">Creative</p>
                        <p className="p-2 rounded-2xl bg-slate-200">
                          Leadership
                        </p>
                      </div>

                      <div className="mt-4 flex gap-3 overflow-x-auto">
                        <div className="bg-[var(--background-color)] rounded-xl shadow-sm p-3 flex-1">
                          <h1 className="font-semibold">Programming</h1>
                          <p className="text-slate-600">
                            Proficiency: Advanced
                          </p>
                          <div className="w-full bg-gray-200 h-2 rounded mt-2">
                            <div
                              className="bg-[var(--primary-color)] h-2 rounded"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="bg-[var(--background-color)] rounded-xl shadow-sm p-3 flex-1">
                          <h1 className="font-semibold">Public Speakin</h1>
                          <p className="text-slate-600">
                            Proficiency: Intermediate
                          </p>
                          <div className="w-full bg-gray-200 h-2 rounded mt-2">
                            <div
                              className="bg-[var(--primary-color)] h-2 rounded"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="bg-[var(--background-color)] rounded-xl shadow-sm p-3 flex-1">
                          <h1 className="font-semibold">Graphic Design</h1>
                          <p className="text-slate-600">
                            Proficiency: Beginner
                          </p>
                          <div className="w-full bg-gray-200 h-2 rounded mt-2">
                            <div
                              className="bg-[var(--primary-color)] h-2 rounded"
                              style={{ width: "30%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl flex flex-col shadow-lg mt-6 p-6 space-y-4">
                      <div className="flex gap-3">
                        <GoTrophy
                          size={25}
                          className="text-[var(--primary-color)]"
                        />
                        <h1 className="text-lg font-semibold text-[var(--text-primary)]">
                          Achievements Overview
                        </h1>
                      </div>

                      <div className="border border-dashed rounded-lg p-6 flex flex-col justify-center items-center">
                        <h3 className="font-medium">
                          Competitions & Academic Contests
                        </h3>
                        <p className="text-slate-600">
                          No achievments added yet
                        </p>
                        <button className="mt-2 p-2 border rounded-lg flex gap-1">
                          <span>
                            <IoIosAddCircleOutline size={25} />
                          </span>{" "}
                          Add Achievement
                        </button>
                      </div>
                      <div className="border border-dashed p-6 flex flex-col rounded-lg justify-center items-center">
                        <h3 className="font-medium">Certificates</h3>
                        <p className="text-slate-600">
                          No certificates added yet
                        </p>
                        <button className="mt-2 p-2 border rounded-lg flex gap-1">
                          <span>
                            <IoIosAddCircleOutline size={25} />
                          </span>{" "}
                          Add Certifiactes
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {/* right column */}
                    <div className="bg-white flex flex-col gap-3 shadow-xl rounded-lg p-6">
                      <div className="flex gap-3 items-center">
                        <PiStudent
                          className="text-lg text-[var(--primary-color)]"
                          size={40}
                        />
                        <span className="font-semibold">
                          Higher Education Admissions
                        </span>
                      </div>
                      <div className="rounded-lg p-4 bg-[var(--background-color)] flex flex-col">
                        <h1 className="font-semibold">Academic Dashboard</h1>
                        <div className="flex mt-2 gap-3">
                          <div className="flex-1">
                            <h1 className="text-slate-600">GPA</h1>
                            <p className="text-[var(--primary-color)] font-bold text-lg">
                              3.8/4.0
                            </p>
                          </div>
                          <div>
                            <div className="flex-1">
                              <h1 className="text-slate-600">Grades</h1>
                              <p className="text-black font-bold text-lg">
                                A, A+, B+
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button className="bg-[var(--primary-color)] text-white p-2 rounded-xl flex gap-3 items-center">
                        <FaDownload /> Export Admission Pack
                      </button>

                      <div className="mt-5 rounded-lg border p-3 border-dashed">
                        <h3 className="font-medium">Recommendation Letters</h3>
                        <p className="text-sm text-gray-500">
                          No letters requested.
                        </p>
                        <button className="mt-2 px-4 py-2 border rounded-lg flex items-center">
                          <span>
                            <IoAddOutline size={20} />
                          </span>{" "}
                          Request Letter
                        </button>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white mt-6 shadow-xl p-6 space-y-4">
                      <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FaChartPie /> Portfolio Summary & Insights
                      </h2>
                      <div>
                        <h3 className="font-medium">Skill Distribution</h3>
                        <p>Programming</p>
                        <div className="w-full bg-gray-200 h-2 rounded mb-2">
                          <div
                            className="bg-[var(--primary-color)] h-2 rounded"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <p>Design</p>
                        <div className="w-full bg-gray-200 h-2 rounded mb-2">
                          <div
                            className="bg-[var(--primary-color)]  h-2 rounded"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                        <p>Communication</p>
                        <div className="w-full bg-gray-200 h-2 rounded mb-2">
                          <div
                            className="bg-[var(--primary-color)]  h-2 rounded"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Achievement Categories</h3>
                        <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                          Chart placeholder
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 border rounded-lg">
                          PDF
                        </button>
                        <button className="px-4 py-2 border rounded-lg">
                          Excel
                        </button>
                      </div>
                      <div className="flex items-center gap-2 md:flex-row flex-col">
                        <input
                          value="https://portfolio.colleg.edu/sophia-clark"
                          readOnly
                          className="border rounded-lg px-2 py-1 flex-1"
                        />
                        <button className="px-4 py-2 border rounded-lg flex items-center gap-2">
                          <FaCopy /> Copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <footer className="bg-white mt-16 py-6 border-t border-[var(--border-color)]">
              <div className="container mx-auto px-6 text-center text-[var(--text-secondary)] text-sm">
                <p>© 2024 Sophia Carter. All Rights Reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp;
