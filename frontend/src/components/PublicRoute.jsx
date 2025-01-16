import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {

    if(localStorage.getItem('user') && localStorage.getItem('token')){
        <Navigate to='/' replace  />
    }

  return children;
}

export default PublicRoute