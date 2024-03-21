import React, { useContext, useEffect } from 'react'
import { MarvelContext } from '../context/MarvelContext'
import Profile from '../Components/YourProfilePage/Profile';
import Favs from '../Components/YourProfilePage/Favs';


function YourProfile() {
  const{datas}=useContext(MarvelContext);
  const currentUser=datas?.find(item=>item.userActive)
  // console.log(currentUser)
  return (
      <>
     <Profile currentUser={currentUser}/>
     <Favs/>
    </>
  )
}

export default YourProfile