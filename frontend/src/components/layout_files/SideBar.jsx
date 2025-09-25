import React, { useState } from 'react'
import { CiGrid42 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import {motion} from 'motion/react'
import { FiBriefcase } from 'react-icons/fi';
import { FaRegFileAlt } from 'react-icons/fa';
import { FaUserGraduate } from "react-icons/fa";
import { HiChevronDown } from 'react-icons/hi';

const SideBar = () => {
   const [expand, setExpand] = useState(false)
   const isActive = (path) => (window.location.pathname === path ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300");
  return (
    <motion.div className="bg-slate-200 z-2 min-h-screen hidden md:flex md:w-65 p-4">
      <div className="text-black w-full overflow-y-auto max-h-[calc(100vh-100px)]">
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/dashboard')}`} href={'/dashboard'}>
          <CiGrid42 size={27} />
          Dashboard
        </a>
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/profile')}`} href={'/profile'}>
          <CgProfile size={27} />
          Profile
        </a>
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/portfolio')}`} href={'/portfolio'}>
          <FiBriefcase size={27} />
          Portfolio
        </a>
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/internships')}`} href={'/internships'}>
          <FaUserGraduate size={27} />
          Internships
        </a>
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/approvals')}`} href={'/approvals'}>
          <FaRegFileAlt size={27} />
          Approvals
        </a>
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/analytics')}`} href={'/analytics'}>
          <CiGrid42 size={27} />
          Analytics
        </a>
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/contest')}`} href={'/contest'}>
          <CiGrid42 size={27} />
          Contest
        </a>
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/Activity-tracker')}`} href={'/Activity-tracker'}>
          <CiGrid42 size={27} />
          Activity Tracker
        </a>
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/Integration-support')}`} href={'/Integration-support'}>
          <FaRegFileAlt size={27} />
          Integration Support
        </a>
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/LeadershipRoles')}`} href={'/LeadershipRoles'}>
          <FaRegFileAlt size={27} />
          Leadership Roles
        </a>
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/faculty-dashboard')}`} href={'/faculty-dashboard'}>
          <CiGrid42 size={27} />
          Faculty Dashboard
        </a>
        <a className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive('/faculty-approvals')}`} href={'/faculty-approvals'}>
          <FaRegFileAlt size={27} />
          Faculty Approvals
        </a>
        <div className="text-lg mb-3 items-center flex-col gap-2 hover:bg-slate-300 rounded-lg p-2">
          <div>
            <div className="flex gap-2">
              <FaRegFileAlt size={27} />
              ExtraCurriculur
              <button
                className={`flex justify-center items-center ${expand ? "rotate-180" : ""}`}
                onClick={() => setExpand((prev) => !prev)}
              >
                <HiChevronDown size={27} />
              </button>
            </div>
            {expand && (
              <div className="flex flex-col mt-4 ml-8">
                <a className="text-lg mb-2 flex gap-2 hover:bg-slate-400 rounded-lg p-2" href={'/workshops'}>
                  <CiGrid42 size={27} />
                  Conference & Workshops
                </a>
                <a className="text-lg mb-2 flex gap-2 hover:bg-slate-400 rounded-lg p-2" href={'/engagements'}>
                  <CgProfile size={27} />
                  Engagement
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SideBar
