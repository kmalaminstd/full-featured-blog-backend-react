import React, { useContext } from 'react'
import { AuthContext } from '../context/Auth.context'
import { Navigate, useLocation } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';

function Private({children}) {

    const {currentUser, loader} = useContext(AuthContext)
    const location = useLocation()

    let loadCom;

    if(loader){
        loadCom = currentUser ? (children) : <Navigate to="admin-login" state={{from: location.pathname}} />
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

export default Private