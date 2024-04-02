import React from 'react'
import { useAuth } from './../CustomHook/Auth';
import { Navigate, Outlet } from 'react-router-dom';



function PrivateRoute() {

    const { contextData} = useAuth()

    //if token is present and login is success -> redirect to all component to outlet
    //if login is false and token is not present -> redirect to Login path

  return (
    <React.Fragment>
        {
            contextData?.token ? <Outlet/> : <Navigate to={`/login`} />
         }
    </React.Fragment>
  )
}

export default PrivateRoute