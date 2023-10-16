import React, { useContext } from 'react'
import {AuthContext} from '../context/Auth.context'
import { Navigate, useLocation } from 'react-router-dom'
import { Puff } from 'react-loader-spinner'

function Public({children}) {
    const location = useLocation()
    const {currentUser, loader} = useContext(AuthContext)
    // console.log(currentUser);
    let loadCom;
    if(loader){
        loadCom = currentUser ? (
            <Navigate to={location?.state?.from ? location.state.from : '/'} /> 
        ) : children
    }else{
        <Puff
            height="80"
            width="80"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    }


  return (
    <>
        {
            loadCom
        }
    </>
  )
}

export default Public