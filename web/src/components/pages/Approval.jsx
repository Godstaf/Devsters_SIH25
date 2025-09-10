import React from "react";
import SideBar from "../layout_files/SideBar";

const colorMap = {
  amber: "bg-amber-50 text-amber-700 ring-amber-200",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  rose: "bg-rose-50 text-rose-700 ring-rose-200",
};

const StatusPill = ({ color = "amber", children }) => {
  const cls = colorMap[color] || colorMap.amber;
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ring-inset ${cls}`}
    >
      {children}
    </span>
  );
};

export default function Approval() {
  const cards = [
    {
      title: "Pending Approvals",
      count: 8,
      cta: "View Pending",
      color: "amber",
      desc: "Requests waiting for review",
    },
    {
      title: "Approved Items",
      count: 24,
      cta: "View Approved",
      color: "emerald",
      desc: "Items cleared by faculty",
    },
    {
      title: "Rejected Items",
      count: 3,
      cta: "View Rejected",
      color: "rose",
      desc: "Items requiring changes",
    },
  ];

  return (
    <section className="bg-[#f4f2ff] flex mt-18 font-sans relative">
      <div className="h-screen z-2 hidden md:flex md:fixed top-18 ">
        <SideBar />
      </div>
      <div className="min-h-screen md:ml-65 flex flex-col p-8 w-full">
        <div className="mb-3 sm:mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-slate-800 font-semibold text-lg sm:text-xl">
              Faculty Approvals
            </h2>
            <p className="text-slate-500 text-sm">
              Monitor, approve, and track student submissions.
            </p>
          </div>
          <button className="inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 transition-colors whitespace-nowrap cursor-pointer">
            Export
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white shadow-sm rounded-xl border border-slate-200 p-4 sm:p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500">{card.title}</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-semibold text-slate-800">
                      {card.count}
                    </span>
                    <StatusPill color={card.color}>{card.desc}</StatusPill>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium bg-[#6C47FF] text-white hover:bg-[#6C47FF]/80 w-full sm:w-auto cursor-pointer">
                  {card.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}