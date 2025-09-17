import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 z-100 text-white">
      <div className="container flex flex-col justify-center items-center mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold">Smart Student Hub</h3>
            <p className="mt-2 text-gray-400 max-w-[180px]">
              Empowering students to succeed.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Product</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-400">
          © 2024 Smart Student Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
