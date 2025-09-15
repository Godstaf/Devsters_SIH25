import React from 'react'
import HomePage from './components/pages/HomePage';
import Navbar from './components/layout_files/Navbar';
import Footer from './components/layout_files/Footer';
import {Outlet} from 'react-router-dom'

const App = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="relative flex min-h-screen flex-col">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  );
}

export default App
