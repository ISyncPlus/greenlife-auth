import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const { session } = UserAuth();

    if (session === undefined) {
        return <p>Loading...</p>
    }
    // put a loader here
  return <> {session ? <>{children}</> : <Navigate to='/signin'/>  }</>
}

export default PrivateRoute
