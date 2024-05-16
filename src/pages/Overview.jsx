import React, { useState } from 'react'
import {Chart as chartjs} from 'chart.js/auto';
import { Line, Pie } from 'react-chartjs-2';
import { useContext } from 'react';
import { BlogContext } from '../context/Blog.context';
// console.log(Chart);
function Overview() {

  const {blogs} = useContext(BlogContext)
  const [monthData, setMonthData] = useState([])
  const data = new Date()

  const monthArr =  [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  if(blogs){
    blogs.map((elm)=>{
      monthData.push(monthArr[data.getMonth(elm.createdAt)])
      console.log(monthData);
    })
  }


  return (
    <>
      <div className="d-flex gap-4 p-3">

        <div className="bg-white p-2 w-full h-[400px] flex justify-center">
          <Line 
            
            datasetIdKey='id'
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                id: 1,
                label: 'Website view Demo Data',
                data: [65, 59, 80, 81, 56, 55, 40]
              },
              
            ]
            }}
          />
        </div>

        <div className="w-full flex gap-3 mt-2">
          <div className="bg-white">
            <Pie
              datasetIdKey='id'
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [
                              {
                              id: 1,
                              label: 'Website view Demo Data',
                              data: [65, 59, 80, 81, 56, 55, 40]
                            },
                            
                          ]
                }}
            />
          </div>
        </div>

      </div>
    </>
  )
}

export default Overview