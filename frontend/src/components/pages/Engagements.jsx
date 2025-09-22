import React, { useState } from 'react'
import SideBar from '../layout_files/SideBar';
import {MdGroups} from 'react-icons/md'
import ClubForm from '../forms/ClubForm';
import VolunteerForm from '../forms/VolunteerForm';

const clubs = [
  {
    id: 1,
    name: "Tech Innovators Club",
    role: "President",
    duration: "2023 - Present",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "Finance Leaders Society",
    role: "Treasurer",
    duration: "2022 - 2023",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Creative Writers Guild",
    role: "Member",
    duration: "2021 - 2022",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
];

const volunteer = [
  {
    id: 1,
    title: "Community Outreach Program",
    role: "Event Organizer",
    duration: "Jan 2023 - Dec 2023",
    hours: 50,
    icon: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Youth Empowerment Initiative",
    role: "Tutor",
    duration: "Sep 2021 - May 2022",
    hours: 30,
    icon: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
];



const Engagements = () => {
  const [clubFormH, setClubFormH] = useState(false);
  const [vFormVisible, setVFormVisible] = useState(false);

  return (
    <div className="bg-[#f4f2ff] font-sans text-gray-800">
      <div className="h-screen z-2 hidden md:flex md:fixed top-18 ">
        <SideBar />
      </div>
      <main className="min-h-screen flex flex-col md:ml-65 mt-24 sm:mt-18 p-8">
        <h1 className="text-3xl font-bold mb-8">Clubs & Volunteer</h1>
        {/* Clubs Section */}
        <h2 className="text-2xl font-bold mb-4">Clubs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {clubs.map((club) => (
            <div key={club.id} className="bg-white shadow rounded-lg p-4">
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{club.name}</h3>
              <p className="text-sm text-gray-600">{club.role}</p>
              <p className="text-xs text-gray-500">{club.duration}</p>
            </div>
          ))}
        </div>
        {clubFormH && (
          <div className="w-full mt-4 mb-4">
            <ClubForm clubFormH={clubFormH} setClubFormH={setClubFormH} />
          </div>
        )}
        <div className="mb-4">
          <button
            className="bg-purple-500 text-white font-semibold p-2 rounded-lg"
            onClick={() => setClubFormH((prev) => !prev)}
          >
            + Clubs
          </button>
        </div>

        {/* Volunteer Section */}
        <h2 className="text-2xl font-bold mb-4">Volunteer</h2>
        <div className="space-y-4">
          {volunteer.map((activity) => (
            <div
              key={activity.id}
              className="bg-white shadow rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex  items-center gap-3">
                <div className="bg-purple-200 p-2 rounded-lg">
                  <MdGroups size={27} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.role}</p>
                  <p className="text-xs text-gray-500">{activity.duration}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-purple-600">
                {activity.hours} hours
              </span>
            </div>
          ))}
        </div>
        {vFormVisible && (
          <div className="w-full mt-4">
            <VolunteerForm
              vFormVisible={vFormVisible}
              setVFormVisible={setVFormVisible}
            />
          </div>
        )}
        <div className="mt-6">
          <button
            className="bg-purple-500 text-white font-semibold p-2 rounded-lg"
            onClick={() => setVFormVisible((prev) => !prev)}
          >
            + Volunteer
          </button>
        </div>
      </main>
    </div>
  );
}

export default Engagements
