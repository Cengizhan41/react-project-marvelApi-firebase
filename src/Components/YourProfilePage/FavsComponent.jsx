import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StyledFavComp } from './StyledFavComp'
import { MarvelContext } from '../../context/MarvelContext'


function FavsComponent({active,itemKind}) {

  const{likeFunc}=useContext(MarvelContext);
  return (
    <StyledFavComp className="section  my-3">
      <h4 className='text-center bg-light display p-3 rounded'>{ itemKind.charAt(0).toUpperCase() + itemKind.slice(1)}</h4>
      <div className={itemKind}>
     { active?.favorites?.filter(item=>item.kind==itemKind).length>0 ?
      
          active?.favorites?.filter(item=>item.kind==itemKind).map((item,index)=>{
            return(
          <div key={index} className="d-flex justify-content-between list-group-item rounded">
          <Link  className='link p-2' style={{textDecoration:"none"}}  to={`/marvel/${itemKind}/${item?.id}`}>{item?.name}</Link>
          <button className='btn  btn-md' onClick={()=>likeFunc(item?.id,item?.name,itemKind,active?.userID)} >Delete!</button>
          </div>
            )
          })
        
       :
       <div className='dontHaveFavorites'>
        <div className="card card-body text-center">
        <h3 className='lead mb-0'>You do not have any favorite <strong>{itemKind}</strong>.To see the <strong>{itemKind}</strong> <Link className='link ms-2 ' to={`/marvel/${itemKind}`}>Click</Link> </h3>
        </div>
       
       </div>
       }
       
      </div>
    </StyledFavComp>
  )
}

export default FavsComponent