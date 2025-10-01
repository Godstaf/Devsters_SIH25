import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";
import { CiGrid42 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { FiBriefcase } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const SideBar_sm = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [hidden, setHidden] = useState(true);
  const [expand, setExpand] = useState(false);

  function btnRouter() {
    return true;
  }

  const isActive = (path) =>
    window.location.pathname === path
      ? "bg-[#6C47FF] text-white"
      : "hover:bg-slate-300";

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      {btnRouter() && (
        <div className="flex">
          <button className="mt-2" onClick={() => setHidden((prev) => !prev)}>
            <FiMenu size={25} />
          </button>
          <AnimatePresence>
            {!hidden && (
              <motion.div
                className="fixed top-0 left-0 bg-slate-200 w-[250px] z-[200] min-h-screen flex-col flex p-4"
                initial={{
                  scale: 1,
                  x: "-250px",
                }}
                animate={{
                  scale: 1,
                  x: "0px",
                }}
                exit={{
                  x: "-250px",
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <div className="mb-2 w-full flex items-center justify-between">
                  <p className="text-lg font-bold">Menu</p>
                  <button onClick={() => setHidden((prev) => !prev)}>
                    <MdCancel size={25} />
                  </button>
                </div>
                <div className="text-black flex-1 max-h-[calc(100vh-100px)] overflow-y-auto">
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/dashboard"
                    )}`}
                    href="/dashboard"
                  >
                    <CiGrid42 size={27} />
                    Dashboard
                  </a>
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/profile"
                    )}`}
                    href="/profile"
                  >
                    <CgProfile size={27} />
                    Activities
                  </a>
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/portfolio"
                    )}`}
                    href="/portfolio"
                  >
                    <FiBriefcase size={27} />
                    Portfolio
                  </a>
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/internships"
                    )}`}
                    href="/internships"
                  >
                    <FaUserGraduate size={27} />
                    Internships
                  </a>
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/approvals"
                    )}`}
                    href="/approvals"
                  >
                    <FaRegFileAlt size={27} />
                    Approvals
                  </a>
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/analytics"
                    )}`}
                    href="/analytics"
                  >
                    <CiGrid42 size={27} />
                    Analytics
                  </a>
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/contest"
                    )}`}
                    href="/contest"
                  >
                    <CiGrid42 size={27} />
                    Contest
                  </a>
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/Activity-tracker"
                    )}`}
                    href="/Activity-tracker"
                  >
                    <CiGrid42 size={27} />
                    Activity Tracker
                  </a>
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/Integration-support"
                    )}`}
                    href="/Integration-support"
                  >
                    <FaRegFileAlt size={27} />
                    Integration Support
                  </a>
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/LeadershipRoles"
                    )}`}
                    href="/LeadershipRoles"
                  >
                    <FaRegFileAlt size={27} />
                    Leadership Roles
                  </a>
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/faculty-dashboard"
                    )}`}
                    href="/faculty-dashboard"
                  >
                    <CiGrid42 size={27} />
                    Faculty Dashboard
                  </a>
                  <a
                    className={`text-lg mb-3 flex gap-2 rounded-lg p-2 ${isActive(
                      "/faculty-approvals"
                    )}`}
                    href="/faculty-approvals"
                  >
                    <FaRegFileAlt size={27} />
                    Faculty Approvals
                  </a>
                  <div className="text-lg mb-3 items-center flex-col gap-2 hover:bg-slate-300 rounded-lg p-2">
                    <div>
                      <div
                        className="flex gap-2"
                        onClick={() => setExpand((prev) => !prev)}
                      >
                        <FaRegFileAlt size={27} />
                        Expandable
                        <button
                          className={`flex justify-center items-center ${
                            expand ? "rotate-180" : ""
                          }`}
                        >
                          <HiChevronDown size={27} />
                        </button>
                      </div>
                      {expand && (
                        <div className="flex flex-col mt-4 ml-8">
                          <a
                            className="text-lg mb-2 flex gap-2 hover:bg-slate-400 rounded-lg p-2"
                            href="/workshops"
                          >
                            <CiGrid42 size={27} />
                            Conferences & Workshops
                          </a>
                          <a
                            className="text-lg mb-2 flex gap-2 hover:bg-slate-400 rounded-lg p-2"
                            href="/engagements"
                          >
                            <CgProfile size={27} />
                            Engagements
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default SideBar_sm;
