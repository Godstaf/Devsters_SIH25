import React, { useState } from 'react'
import { CiGrid42 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import {Link, NavLink} from 'react-router-dom'
import {motion} from 'motion/react'
import { FiBriefcase } from 'react-icons/fi';
import { FaRegFileAlt } from 'react-icons/fa';
import { FaUserGraduate } from "react-icons/fa";
import { HiChevronDown } from 'react-icons/hi';

const SideBar = () => {
   const [expand, setExpand] = useState(false)
  return (
    <motion.div className="bg-slate-200 z-2 min-h-screen hidden md:flex md:w-65 p-4">
      <div className="text-black w-full overflow-y-auto mb-40">
        <NavLink
          className={({ isActive }) =>
            `text-lg mb-3 flex gap-2 rounded-lg p-2 ${
              isActive ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300"
            }`
          }
          to={"/dashboard"}
        >
          <CiGrid42 size={27} />
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-lg mb-3 flex gap-2 rounded-lg p-2 ${
              isActive ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300"
            }`
          }
          to={"/profile"}
        >
          <CgProfile size={27} />
          Profile
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-lg mb-3 flex gap-2 rounded-lg p-2 ${
              isActive ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300"
            }`
          }
          to={"/portfolio"}
        >
          <FiBriefcase size={27} />
          Portfolio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-lg mb-3 flex gap-2 rounded-lg p-2 ${
              isActive ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300"
            }`
          }
          to={"/internships"}
        >
          <FaUserGraduate size={27} />
          Internships
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-lg mb-3 flex gap-2 rounded-lg p-2 ${
              isActive ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300"
            }`
          }
          to={"/approvals"}
        >
          <FaRegFileAlt size={27} />
          Approvals
        </NavLink>
        <div className="text-lg mb-3 items-center flex-col gap-2 hover:bg-slate-300 rounded-lg p-2">
          <div>
            <div className="flex gap-2">
              <FaRegFileAlt size={27} />
              ExtraCurriculur
              <button
                className={`flex justify-center items-center ${
                  expand ? "rotate-180" : ""
                }`}
                onClick={() => setExpand((prev) => !prev)}
              >
                <HiChevronDown size={27} />
              </button>
            </div>
            {expand && (
              <div className="flex flex-col mt-4 ml-8">
                <NavLink
                  className="text-lg mb-2 flex gap-2 hover:bg-slate-400 rounded-lg p-2"
                  to={"/workshops"}
                >
                  <CiGrid42 size={27} />
                  Conference & Workshops
                </NavLink>
                <NavLink
                  className="text-lg mb-2 flex gap-2 hover:bg-slate-400 rounded-lg p-2"
                  to={"/engagements"}
                >
                  <CgProfile size={27} />
                  Engagement
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SideBar
