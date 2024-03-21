import React, { useContext, useEffect, useState } from 'react'
import { MarvelContext } from '../../context/MarvelContext'
import FavsComponent from './FavsComponent';

function Favs() {
  const {datas}=useContext(MarvelContext);
  const active=datas?.find(item=>item.userActive)

  // console.log(active)

  return (
    <div className="favs">
    <h3 className='text-center display-6 bg-light p-3'>Your Favorites</h3>
    <div className="container">
    <FavsComponent active={active} itemKind={"characters"}/>
    <FavsComponent active={active} itemKind={"series"}/>
    <FavsComponent active={active} itemKind={"events"}/>
    </div>
   

  </div>
  )
}

export default Favs