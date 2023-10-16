import React from 'react'

function Topbar() {
  return (
    <>
    <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
      <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
      </div>
    </div>
    </>
  )
}

export default Topbar