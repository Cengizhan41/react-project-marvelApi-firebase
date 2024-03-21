import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

function MarveLayout() {
  return (
    <div className="marvel-layout">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MarveLayout