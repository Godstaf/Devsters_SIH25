import React from "react";

const CommunityServiceLog = () => {
  return (
    <main className="flex-1 mt-18 px-4 py-8 sm:px-6 lg:px-8 bg-[#f8faff] text-[#1a202c]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Community Service Log</h1>
          <p className="text-[#4a5568]">
            Track your contributions to the community.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold">Service Activities</h2>
            <button className="ml-auto bg-[#228b22] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#228b22] focus:ring-opacity-50 transition-colors duration-200 flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1Z"
                  fillRule="evenodd"
                ></path>
              </svg>
              Add Entry
            </button>
          </div>

          <div className="relative space-y-8 pl-12">
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gray-200"></div>

            {[
              {
                title: "Local Park Cleanup",
                role: "Volunteer",
                date: "2024-07-15",
                hours: 4,
              },
              {
                title: "Senior Center Visit",
                role: "Companion",
                date: "2024-08-02",
                hours: 3,
              },
              {
                title: "Food Bank Volunteering",
                role: "Organizer",
                date: "2024-09-10",
                hours: 6,
              },
              {
                title: "Environmental Awareness Workshop",
                role: "Participant",
                date: "2024-10-22",
                hours: 2,
              },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-1.5 top-2.5 w-8 h-8 bg-[#228b22]/20 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-[#228b22] rounded-full flex items-center justify-center text-white">
                    🤝
                  </div>
                </div>
                <div className="ml-4 p-4 bg-[#f8faff] rounded-lg border border-transparent hover:border-gray-300 hover:bg-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <div className="flex items-center text-sm text-[#4a5568] mt-1">
                    <p>
                      <strong>Role:</strong> {item.role}
                    </p>
                    <span className="mx-2">·</span>
                    <p>
                      <strong>Date:</strong> {item.date}
                    </p>
                    <span className="mx-2">·</span>
                    <p>
                      <strong>Impact Hours:</strong> {item.hours}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommunityServiceLog;
