import React, { useState } from 'react'
import SideBar from '../layout_files/SideBar'
import WorkShopForm from '../forms/WorkShopForm';
import ConferenceForm from '../forms/ConferenceForm';
import ClubForm from '../forms/ClubForm';

const conferences = [
  {
    id: 1,
    title: "Tech Summit 2023",
    date: "2023-10-15",
    location: "Virtual",
    role: "Speaker",
  },
  {
    id: 2,
    title: "AI Developers Conference",
    date: "2023-12-06",
    location: "San Francisco, CA",
    role: "Attendee",
  },
];


const workshops = [
  {
    id: 1,
    title: "Advanced JavaScript Techniques",
    date: "2023-11-10",
    organizer: "Code Academy",
    keyLearnings:
      "Asynchronous programming, performance optimization, and modern ES6+ features.",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "UI/UX Design Principles",
    date: "2023-09-22",
    organizer: "Design Institute",
    keyLearnings:
      "User-centered design, wireframing, prototyping, and usability testing.",
    image:
      "https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


const WorkCon = () => {
  const [wFormH, setWFormH] = useState(false);
  const [cFormH, setCFormH] = useState(false);
  
  return (
    <div className="bg-[#f4f2ff] font-sans text-gray-800">
      <div className="h-screen z-2 hidden md:flex md:fixed top-18 ">
        <SideBar />
      </div>
      <main className="min-h-screen flex flex-col md:ml-65 mt-24 sm:mt-18 p-8 relative">
        {/* Conferences */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Conferences</h2>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              onClick={() => setCFormH((prev) => !prev)}
            >
              + Conferences
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {conferences.map((conf) => (
              <div
                key={conf.id}
                className="bg-white flex flex-col gap-1 shadow-md rounded-lg p-4 border border-gray-200"
              >
                <h3 className="text-lg font-semibold mb-1">{conf.title}</h3>
                <p className="text-sm text-gray-500">{conf.date}</p>
                <p className="text-sm">{conf.location}</p>
                <p className="text-sm font-medium">{conf.role}</p>
              </div>
            ))}
          </div>
        </section>
        {cFormH && (
          <div className="w-full mt-4">
            <ConferenceForm cForm={cFormH} setCFormH={setCFormH} />
          </div>
        )}
        {/* Workshops */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Workshops</h2>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              onClick={() => setWFormH((prev) => !prev)}
            >
              + Workshops
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {workshops.map((work) => (
              <div
                key={work.id}
                className="bg-white shadow-md md:flex md:p-4 rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-40 w-full md:w-auto object-cover rounded-t-lg md:rounded-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg mb-1 font-semibold">{work.title}</h3>
                  <p className="text-sm mb-2 text-gray-500">{work.date}</p>
                  <p className="text-sm">{work.organizer}</p>
                  <p className="text-sm mt-2">
                    <span className="font-medium">Key Learnings:</span>{" "}
                    {work.keyLearnings}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {wFormH && (
          <div className="w-full mt-4">
            <WorkShopForm wFormH={wFormH} setWFormH={setWFormH} />
          </div>
        )}
      </main>
    </div>
  );
}

export default WorkCon
