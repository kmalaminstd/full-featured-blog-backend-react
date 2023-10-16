import React, { useState } from 'react'
import {MdAdminPanelSettings} from 'react-icons/md'
import { auth } from '../config/firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminLogin() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        useremail: '',
        userpassword: ''
    })

    const handleSubmit = e=>{
        e.preventDefault()

        try{
            signInWithEmailAndPassword(auth, data.useremail, data.userpassword)
            navigate('/')
            toast.success("Admin Login Successfull")
        }catch(err){
            console.log(err);
            toast.success("Admin Login Failed")
        }
    }

    const handleChange = e=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

  return (
    <>
        <div className="h-screen w-full flex items-center justify-center pb-4">
            <form className="bg-white w-[480px] flex flex-col gap-5 px-3 py-2 shadow-md" onSubmit={handleSubmit}>

                

                    <h2 className="flex items-center gap-2 mx-auto my-4 text-3xl border-b-2 border-lime-600 pb-2">Admin Login <MdAdminPanelSettings /></h2>
               

                <label htmlFor="" className="mb-2 flex flex-col">
                    <span>Admin Email</span>
                    <input className="outline-none border border-lime-400 py-2 px-4 rounded-md shadow-inner" name="useremail" type="email" onChange={handleChange} />
                </label>

                <label htmlFor="" className="mb-2 flex flex-col">
                    <span>Admin Password</span>
                    <input className="outline-none border border-lime-400 py-2 px-4 rounded-md shadow-inner" name="userpassword" type="password"  onChange={handleChange} />
                </label>

                <button className="border bg-lime-600 py-2 font-semibold text-white hover:bg-lime-500">Log In</button>
            </form>
        </div>
    </>
  )
}

export default AdminLogin