import React from 'react'
import SideBar from '../layout_files/SideBar'
import Temp from './temp'

const Portfolio = () => {
  return (
    <div className="bg-[#f4f2ff] flex mt-18 font-sans relative">
        <div className="h-screen z-2 hidden md:flex md:fixed top-18 ">
            <SideBar />
        </div>
        <div className="min-h-screen md:ml-65 flex flex-col w-full">
            <Temp/>
        </div>
    </div>
  )
}

export default Portfolio
