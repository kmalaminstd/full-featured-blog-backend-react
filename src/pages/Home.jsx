import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import Topbar from '../components/shared/Topbar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className="h-auto flex bg-gray-100">
             <div>
                <Sidebar />
             </div>
             <div className="ml-auto lg:w-[80%]">
                
                    <Topbar />
                
                
                    <Outlet />
                
             </div>
        </div>
    </>
  )
}

export default Home