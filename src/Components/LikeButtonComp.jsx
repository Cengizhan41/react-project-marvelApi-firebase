import React, { useContext } from 'react'
import { MarvelContext } from '../context/MarvelContext'
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

function LikeButtonComp({id,name,kind}) {
    const {likeFunc,datas}=useContext(MarvelContext);
   
    const active=datas?.find(item=>item.userActive)

    const control=active?.favorites?.find(item=> item.id == id && item.kind == kind)

  return (
    control ? 
    <button onClick={(e)=>{e.stopPropagation(); likeFunc(id,name,kind,active.userID);}} className='btn likeBtn liked' > <AiFillLike /> </button> 
    :  
    <button onClick={(e)=>{e.stopPropagation(); likeFunc(id,name,kind,active.userID);}} className='btn likeBtn unliked'><AiOutlineLike /> </button>

  )
}

export default LikeButtonComp