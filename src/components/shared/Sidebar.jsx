import React, { useEffect, useState } from 'react'
import { myImg } from '../../assets/images'
import { MdDashboard } from 'react-icons/md'
import {FaClipboardList} from 'react-icons/fa'
import {BiSolidAddToQueue} from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'


function Sidebar() {

  const [active, setActive] = useState('dashboard')
  const location = useLocation()
  // console.log(location.pathname.split('/')[1]);

  useEffect(()=>{
    setActive(location.pathname.split('/')[1] ?location.pathname.split('/')[1] : 'dashboard')
    // console.log(location.pathname.split('/')[1])
  },[])

  return (
    <div className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col pt-5 gap-4 h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">

      <div className="flex flex-col justify-center items-center gap-3">
        <div className="w-2/4 overflow-hidden rounded-full ring-4 ring-black">
          <img src={myImg} alt="" />
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-2xl text-gray-700 opacity-90">K.M. AL-AMIN</h3>
          <p className="text-base text-gray-600">Admin</p>
        </div>
      </div>

      <div className="w-4/5 my-0 mx-auto">
        <ul className="w-full flex gap-4 flex-col">

          <li className="w-full">
            <Link className={`w-full flex items-center gap-4  px-4 py-3 rounded-xl hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:transition-all hover:text-white text-black font-semibold ${active === 'dashboard' ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white" : ''}`} onClick={()=>setActive("dashboard")} to="/">
              <MdDashboard />
              <span>Overview</span>
            </Link>
          </li>

          <li className="w-full">
            <Link className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-black font-semibold hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:transition-all hover:text-white ${active === 'all-posts' ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white" : ''}`} onClick={()=>setActive("all-posts")} to="all-posts">
              <FaClipboardList />
              <span>All Posts</span>
            </Link>
          </li>

          <li className="w-full">
            <Link className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-black font-semibold hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:transition-all hover:text-white ${active === 'write-post' ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white" : ''}`} onClick={()=>setActive("write-post")} to="write-post">
              <BiSolidAddToQueue />
              <span>Add Post</span>
            </Link>
          </li>

          <li className="w-full">
            <Link className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-black font-semibold hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:transition-all hover:text-white ${active === 'profile' ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white" : ''}`} onClick={()=>setActive("profilet")} to="profile">
              <BiSolidAddToQueue />
              <span>Profile</span>
            </Link>
          </li>


        </ul>
      </div>

    </div>
  )
}

export default Sidebar