import React from "react";
import SideBar from "../layout_files/SideBar";
import { FaRegCalendarAlt } from "react-icons/fa";
import cpdsa from '../../assets/cpdsa.jpg'
import fbasic from '../../assets/fbasic.jpg'
import reactbc from '../../assets/reactbc.png'
import { FaArrowRight } from "react-icons/fa";
import { FaUsers, FaPaintBrush, FaLaptopCode, FaVolleyballBall } from 'react-icons/fa';


const Profile = () => {

const clubs = [
  {
    name: "Tech Innovators",
    icon: <FaUsers size={40} />,
  },
  {
    name: "Artistic Expressions",
    icon: <FaPaintBrush size={40} />,
  },
  {
    name: "CodeCrafters",
    icon: <FaLaptopCode size={40} />,
  },
  {
    name: "Sports Enthusiasts",
    icon: <FaVolleyballBall size={40} />,
  },
];

const competitions = [
  {
    title: "International AI Challenge 2025",
    Date: "March 15, 2025",
    Organizer: "OpenAI Global",
    KeyLearnings: "Advanced ML techniques, real-world dataset handling.",
    imageSrc: "https://th.bing.com/th/id/OIP.qor3LHP0xKqdd3-KkUiEFwHaE4?w=263&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
  },
  {
    title: "Global Hackathon Series - Europe Edition",
    Date: "June 3, 2025",
    Organizer: "HackEurope",
    KeyLearnings: "Team collaboration, rapid prototyping, pitching skills.",
    imageSrc: "https://th.bing.com/th/id/OIP.p0f7sil8fWd7kkmj3AzIPQHaFj?w=242&h=182&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
  },
  {
    title: "National Robotics Championship",
    Date: "August 22, 2025",
    Organizer: "RoboLeague",
    KeyLearnings: "Autonomous systems, hardware-software integration.",
    imageSrc: "https://th.bing.com/th/id/OIP.Ri_AwIr3aENKYI1FpxT--AHaEK?w=306&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
  },
];


  const conferences = [
    {
      title: "Tech Innovation Summit",
      imageSrc:"https://th.bing.com/th/id/OIP.qor3LHP0xKqdd3-KkUiEFwHaE4?w=263&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
      Date: "2023-05-15",
      Location: "San Francisco",
      Role: "Address",
    },
    {
      title: "AI Research Conference",
      imageSrc:"https://th.bing.com/th/id/OIP.qor3LHP0xKqdd3-KkUiEFwHaE4?w=263&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
      Date: "2023-06-20",
      Location: "New York",
      Role: "Presenter",
    },
    {
      title: "Web Development Expo",
      imageSrc:"https://th.bing.com/th/id/OIP.qor3LHP0xKqdd3-KkUiEFwHaE4?w=263&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
      Date: "2023-07-10",
      Location: "London",
      Role: "Attendee",
    },
  ];

  const workshops = [
    {
      title: "Frontend Basics Workshop",
      Organizer: "IIIT Pune Web Club",
      imageSrc: fbasic,
      Date: "2023-04-12",
      KeyLearnings: "HTML, CSS, and JavaScript fundamentals",
    },
    {
      title: "React Bootcamp",
      imageSrc: reactbc,
      Organizer: "Google Developer Student Club (GDSC)",
      Date: "2023-06-05",
      KeyLearnings: "React components, props, state, and hooks",
    },
    {
      title: "Data Structures in C++",
      imageSrc: cpdsa,
      Date: "2023-08-18",
      KeyLearnings: "Arrays, Linked Lists, Stacks, Queues, Trees",
      Organizer: "Coding Ninjas",
    },
  ];

  const certificates = [
    {
      title: "Frontend Web Development Certificate",
      imageSrc:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=500&q=60",
      Date: "2023-03-15",
      Issuer: "freeCodeCamp",
      KeySkills: "HTML, CSS, JavaScript",
    },
    {
      title: "React Developer Certificate",
      imageSrc:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=60",
      Date: "2023-05-20",
      Issuer: "Coursera",
      KeySkills: "React, Hooks, State Management",
    },
    {
      title: "Data Structures & Algorithms in C++",
      imageSrc:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60",
      Date: "2023-07-05",
      Issuer: "Coding Ninjas",
      KeySkills: "DSA, Problem Solving, C++",
    },
  ];

  const contests = [
    {
      title: "National Mathematics Olympiad",
      date: "2024-11-15",
      location: "New Delhi, India",
      role: "Participant",
    },
    {
      title: "Inter-School Science Quiz",
      date: "2023-08-05",
      location: "Pune, Maharashtra",
      role: "Team Leader",
    },
    {
      title: "Regional Coding Challenge",
      date: "2025-03-10",
      location: "Mumbai, India",
      role: "Organizer",
    },
  ];

  const volunteerOpportunities = [
    {
      title: "WordCamp Pune 2025",
      imageSrc: fbasic,
      Date: "2025-11-15",
      Organizer: "WordCamp Pune",
      KeyLearnings:
        "Collaborate with WordPress enthusiasts, assist in event coordination, and gain insights into community-driven tech events.",
    },
    {
      title: "Rebearth 2025 - Punaravartan",
      imageSrc: cpdsa,
      Date: "2025-04-22",
      Organizer: "eCoexist Foundation",
      KeyLearnings:
        "Participate in eco-friendly initiatives, promote sustainable practices, and contribute to environmental conservation efforts.",
    },
    {
      title: "Composting & Organic Gardening Workshop",
      imageSrc: reactbc,
      Date: "2025-03-20",
      Organizer: "Earth5R",
      KeyLearnings:
        "Learn sustainable gardening techniques, engage in community-driven environmental education, and green practices.",
    },
  ];


  return (
    <div className="bg-[#f4f2ff] font-sans text-gray-800">
      <div className="h-screen z-2 hidden md:flex md:fixed top-18 ">
        <SideBar />
      </div>
      <div className="min-h-screen flex flex-col md:ml-65 mt-18 p-8">
        <div className="w-full items-center">
          <h1 className="text-slate-900 text-4xl font-bold">My Activities</h1>
        </div>

        {/* conferences */}
        <div className="mt-8">
          <h1 className="font-bold text-xl">Conferences</h1>

          <div className="mt-6 flex flex-col relative gap-3">
            {conferences.map((con, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-[#6f29d9]/20 rounded-full text-[#6f29d9]">
                  <FaRegCalendarAlt size={20} />
                </div>
                <div className="text-black bg-white p-2 shadow-lg rounded-lg flex-1">
                  <h1 className="text-[16px] font-semibold">{con.title}</h1>
                  <div className="mt-1 text-[#5344b3]">
                    <div className="flex flex-col sm:gap-1 sm:flex-row">
                      <div>
                        <span>Date: {con.Date}</span>
                      </div>
                      <div>
                        <span>| Location: {con.Location}</span>
                      </div>
                      <div>
                        <span>| Role: {con.Role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops Attended */}
        <div className="mt-8">
          <h1 className="font-bold text-xl">Workshop Attended</h1>

          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-6 w-max items-center">
              {workshops.map((wshop, index) => (
                <div
                  key={index}
                  className="min-w-[280px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <img
                    src={wshop.imageSrc}
                    alt={wshop.title}
                    className="w-full h-40 object-cover"
                  />

                  {/* Content */}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      {wshop.title}
                    </h2>
                    <p className="text-sm text-[#5344b3] mb-1">
                      📅 Date: <span className="font-medium">{wshop.Date}</span>
                    </p>
                    <p className="text-sm text-[#5344b3] mb-1">
                      👤 Organizer:{" "}
                      <span className="font-medium">{wshop.Organizer}</span>
                    </p>
                    <p className="text-sm text-[#5344b3] mt-2">
                      <span className="font-semibold text-black">
                        Key Learnings:
                      </span>{" "}
                      {wshop.KeyLearnings}
                    </p>
                  </div>
                </div>
              ))}
              <div className="h-20 w-20 justify-center flex items-center bg-slate-200 rounded-full">
                <FaArrowRight size={40} />
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-8">
          <h1 className="font-bold text-xl">Certificates</h1>

          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-6 w-max items-center">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="min-w-[280px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <img
                    src={cert.imageSrc}
                    alt={cert.title}
                    className="w-full h-40 object-cover"
                  />

                  {/* Content */}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      {cert.title}
                    </h2>
                    <p className="text-sm text-[#5344b3] mb-1">
                      📅 Date: <span className="font-medium">{cert.Date}</span>
                    </p>
                    <p className="text-sm text-[#5344b3] mb-1">
                      🏢 Issuer:{" "}
                      <span className="font-medium">{cert.Issuer}</span>
                    </p>
                    <p className="text-sm text-[#5344b3] mt-2">
                      <span className="font-semibold text-black">
                        Key Skills:
                      </span>{" "}
                      {cert.KeySkills}
                    </p>
                  </div>
                </div>
              ))}
              <div className="h-20 w-20 justify-center flex items-center bg-slate-200 rounded-full">
                <FaArrowRight size={40} />
              </div>
            </div>
          </div>
        </div>

        {/* Clubs */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Clubs & Societies</h2>
          <div className="mt-6 flex justify-between items-center gap-6 overflow-x-auto">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden flex flex-col min-w-40 items-center gap-2"
              >
                <div className="mt-2 text-gray-900 bg-white flex justify-center items-center p-4 rounded-full shadow-lg">
                  {club.icon}
                </div>
                <h3 className="text-xl font-semibold max-w-40 h-15 text-center">
                  {club.name}
                </h3>
              </div>
            ))}
            <div className="h-20 w-20 shrink-0 justify-center flex items-center bg-slate-200 rounded-full">
              <FaArrowRight size={40} />
            </div>
          </div>
        </div>

        {/* Volunteer */}
        <div className="mt-8">
          <h1 className="font-bold text-xl">Volunteer</h1>

          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-6 w-max items-center">
              {volunteerOpportunities.map((vol, index) => (
                <div className="card w-96 bg-white card-md shadow-lg overflow-y-auto h-60" key={index}>
                  <div className="card-body">
                    <h2 className="card-title">{vol.title}</h2>
                   <p className="text-sm text-gray-500 mb-1">
                     📅 Date: <span className="font-medium">{vol.Date}</span>
                   </p>
                   <p className="text-sm text-[#5344b3] mb-1">
                     👤 Organizer:{" "}
                     <span className="font-medium">{vol.Organizer}</span>
                   </p>
                   <p className="text-sm text-[#5344b3]">
                     <span className="font-semibold text-black">
                       Key Learnings:
                     </span>{" "}
                     {vol.KeyLearnings}
                   </p>
                  </div>
                </div>
              ))}
              <div className="h-20 w-20 justify-center flex items-center bg-slate-200 rounded-full">
                <FaArrowRight size={40} />
              </div>
            </div>
          </div>
        </div>

        {/* Competition */}
        <div className="mt-8">
          <h1 className="font-bold text-xl">Competitions</h1>

          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-6 w-max items-center">
              {competitions.map((wshop, index) => (
                <div
                  key={index}
                  className="min-w-[280px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <img
                    src={wshop.imageSrc}
                    alt={wshop.title}
                    className="w-full h-40 object-cover"
                  />

                  {/* Content */}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      {wshop.title}
                    </h2>
                    <p className="text-sm text-[#5344b3] mb-1">
                      📅 Date: <span className="font-medium">{wshop.Date}</span>
                    </p>
                    <p className="text-sm text-[#5344b3] mb-1">
                      👤 Organizer:{" "}
                      <span className="font-medium">{wshop.Organizer}</span>
                    </p>
                    <p className="text-sm text-[#5344b3] mt-2">
                      <span className="font-semibold text-black">
                        Key Learnings:
                      </span>{" "}
                      {wshop.KeyLearnings}
                    </p>
                  </div>
                </div>
              ))}
              <div className="h-20 w-20 justify-center flex items-center bg-slate-200 rounded-full">
                <FaArrowRight size={40} />
              </div>
            </div>
          </div>
        </div>

        {/* Academic Contests */}
        <div className="mt-8">
          <h1 className="font-bold text-xl">Academic Contests</h1>

          <div className="mt-6 flex flex-col relative gap-3">
            {contests.map((con, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-[#6f29d9]/20 rounded-full text-[#6f29d9]">
                  <FaRegCalendarAlt size={20} />
                </div>
                <div className="text-black bg-white p-2 shadow-lg rounded-lg flex-1">
                  <h1 className="text-[16px] font-semibold">{con.title}</h1>
                  <p className="mt-1 text-[#5344b3]">
                    Date: {con.date} | Location: {con.location} | Role:{" "}
                    {con.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
