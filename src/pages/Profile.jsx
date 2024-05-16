import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../config/firebase.config'
import { useNavigate } from 'react-router-dom'

function Profile() {

    const navigate = useNavigate()
    const profileSignOut = ()=>{
        signOut(auth)
        navigate('/')
    }

  return (
    <div>

        <button className="border-spacing-1 border-green-400 border-2 py-1 px-4 bg-lime-400 mt-6 mx-5" onClick={profileSignOut}>Log Out</button>
    </div>
  )
}

export default Profile