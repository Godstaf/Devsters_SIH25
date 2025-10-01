import React from "react";
import Navbar from "../layout_files/Navbar";
import Footer from "../layout_files/Footer";

const HomePage = () => {
  return (
    <main className="flex-1 mt-18">
      <section className="bg-white py-20">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2 px-6">
          <div>
            <h1 className="text-5xl font-bold">
              Unlock Your Full Potential{" "}
              <span className="whitespace-nowrap">
                with <span className="text-[#6C47FF]">Portfolio</span>
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              A centralized platform to manage your academic records, track
              achievements, and build a stunning digital portfolio effortlessly.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✔ Track grades, attendance, activities</li>
              <li>✔ Verified by faculty for authenticity</li>
              <li>✔ Generate digital portfolio instantly</li>
            </ul>
            <div className="mt-10 flex gap-4">
              <a
                className="rounded-lg bg-[#6C47FF] px-6 py-3 text-white font-semibold hover:bg-[#6C47FF]/80"
                href="#"
              >
                Get Started Free
              </a>
              <a
                className="rounded-lg border px-6 py-3 text-gray-700 font-semibold hover:bg-gray-100"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGGVzZUVX8JtE5fQNcrrOD1PwpL1XZ8dalT72uVhdiQGdw6emols4Q0y9pZGrFkzPEG_vf8MdOZZO-3y3WNOtq2MJiNwTU4glZw2yKH2UVgHWnwmSWuuINfG_fdQujSLJAo6_r5VBxBJioJTHeROdn2A7Y1GYxQU6gccuE5Q0MR5KudYLKJ0A0BfgwzOID9lqdWOLFhWZQCf3VV5llQ64SWr6Ejv-r1VsRXXYcvK6afybwjNSV6U2Yq1kAVHbsPjkL7HOPUNv-a5gC"
              alt="Student dashboard mockup"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* <!-- Features --> */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">
            Everything You Need in One Place
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the powerful features that make Smart Student Hub the
            ultimate tool for academic success.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border p-8 shadow-sm bg-white">
              <h3 className="text-xl font-bold">Dynamic Student Dashboard</h3>
              <p className="mt-2 text-gray-600">
                Real-time overview of grades, attendance, and progress.
              </p>
            </div>
            <div className="rounded-xl border p-8 shadow-sm bg-white">
              <h3 className="text-xl font-bold">Activity Tracker</h3>
              <p className="mt-2 text-gray-600">
                Log seminars, online courses, internships, and extracurriculars.
              </p>
            </div>
            <div className="rounded-xl border p-8 shadow-sm bg-white">
              <h3 className="text-xl font-bold">Faculty Approval Panel</h3>
              <p className="mt-2 text-gray-600">
                Faculty validates records to ensure authenticity.
              </p>
            </div>
            <div className="rounded-xl border p-8 shadow-sm bg-white">
              <h3 className="text-xl font-bold">Auto-Generated Portfolio</h3>
              <p className="mt-2 text-gray-600">
                Download and share verified digital portfolios.
              </p>
            </div>
            <div className="rounded-xl border p-8 shadow-sm bg-white">
              <h3 className="text-xl font-bold">Analytics & Reporting</h3>
              <p className="mt-2 text-gray-600">
                Generate reports for NAAC, AICTE, NIRF, and evaluations.
              </p>
            </div>
            <div className="rounded-xl border p-8 shadow-sm bg-white">
              <h3 className="text-xl font-bold">Integration Support</h3>
              <p className="mt-2 text-gray-600">
                Seamless link with LMS, ERP, and digital university systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- How It Works --> */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-xl bg-gray-50 shadow-sm">
              <h3 className="text-xl font-semibold">1. Upload & Track</h3>
              <p className="mt-2 text-gray-600">
                Add academic, extra-curricular, and internship records.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 shadow-sm">
              <h3 className="text-xl font-semibold">2. Get Verified</h3>
              <p className="mt-2 text-gray-600">
                Faculty approve and validate records for authenticity.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 shadow-sm">
              <h3 className="text-xl font-semibold">3. Showcase & Share</h3>
              <p className="mt-2 text-gray-600">
                Generate a portfolio PDF or shareable web profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Benefits --> */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Benefits for Everyone
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="p-6 rounded-xl bg-white shadow">
              <h3 className="text-xl font-semibold text-[#6C47FF]">
                For Students
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✔ Verified academic + extracurricular portfolio</li>
                <li>✔ Easy sharing for jobs and internships</li>
                <li>✔ Stay on top of grades and attendance</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-white shadow">
              <h3 className="text-xl font-semibold text-[#6C47FF]">
                For Institutions
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✔ Simplified NAAC, AICTE, and NIRF reporting</li>
                <li>✔ Transparency and data accuracy</li>
                <li>✔ Improved student engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials --> */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">What People Say</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <p className="text-gray-700 italic">
                "Smart Student Hub helped me create a verified portfolio that
                impressed recruiters during placements!"
              </p>
              <p className="mt-4 font-semibold">– Student User</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <p className="text-gray-700 italic">
                "We saved weeks of effort during NAAC reporting with the
                automated reports feature."
              </p>
              <p className="mt-4 font-semibold">– Faculty Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FAQs --> */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">FAQs</h2>

          <div className="mt-8 flex flex-col gap-2 max-w-3xl mx-auto">
            <div className="collapse collapse-plus bg-white border border-base-300">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold">
                Is my data secure?
              </div>
              <div className="collapse-content text-sm">
                Yes. We use encrypted storage and faculty verification for data
                integrity.
              </div>
            </div>
            <div className="collapse collapse-plus bg-white border border-base-300">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold">
                Can I download my portfolio?
              </div>
              <div className="collapse-content text-sm">
                Absolutely. You can export it as a PDF or share it via a public
                web link.
              </div>
            </div>
            <div className="collapse collapse-plus bg-white border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                Do faculty need a separate login?
              </div>
              <div className="collapse-content text-sm">
                Yes, faculty have their own portal to validate student records.
              </div>
            </div>
            <div className="collapse collapse-plus bg-white border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA --> */}
      <section className="bg-[#6C47FF] py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to take control of your academic journey?
        </h2>
        <p className="mt-4 text-lg">
          Join thousands of students already using Smart Student Hub.
        </p>
        <a
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-[#6C47FF] hover:bg-gray-100"
          href="#"
        >
          Sign Up Now
        </a>
      </section>
    </main>
  );
};

export default HomePage;
