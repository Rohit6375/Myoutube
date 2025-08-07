import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen bg-gray-50">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Body;