import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'


function PrivateRoutes({children}) {
  const[control,setControl]=useState(JSON.parse(localStorage.getItem("activeControl")))
  // console.log(control)
  return (
  control ?
   children
   :
   <Navigate to={"/"}/>
  
  )
}

export default PrivateRoutes