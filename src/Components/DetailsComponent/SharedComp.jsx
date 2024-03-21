import React, { useContext, useEffect, useState } from 'react'
import { MarvelContext } from '../../context/MarvelContext';
import homeFetchHook from '../../CustomHooks/homeFetchHook';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import LoadingComp from '../LoadingComp';

function SharedComp({param1,id,param2,name,componentRef}) {
  // characters/${charID}/event
  // param1 characters
  // id ${charID}
  //param2 event
  const{timestamp,hash,scrollLeft,scrollRight}=useContext(MarvelContext)
  const publicKey=import.meta.env.VITE_MARVEL_API_PUBLIC_KEY
  const[loading,error,data,getData]=homeFetchHook();
  const [willPrint,setWillPrint]=useState([]);

  useEffect(()=>{
      getData(`https://gateway.marvel.com:443/v1/public/${param1}/${id}/${param2}?orderBy=-modified&limit=99&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`)
  },[])
  useEffect(()=>{
        const filteredEvents=data?.data?.results.filter(item=>{
            if(!item?.thumbnail?.path.includes("image_not_available")){
              return item
            }
          }
        )
        setWillPrint(filteredEvents)
     },[data])
    //  console.log(data)
    //  console.log(willPrint)
return (
  loading==true ?
  <LoadingComp/>
  :
  (   willPrint?.length>0 
    &&
    <>
   <h2 className='text-center my-2 p-3 rounded mx-auto'>{name} / {param2.charAt(0).toUpperCase() + param2.slice(1)}</h2>
    <div className="buttonsContain">
    <button className='backBtn btn' onClick={()=>scrollLeft(componentRef)}><IoIosArrowBack /></button>
    <button className='forwardBtn btn' onClick={()=>scrollRight(componentRef)}><IoIosArrowForward /></button>
    <div ref={componentRef} className="componentContain mx-2">
    {willPrint?.map((event,index)=>{
      // console.log(event?.id)
          return(
        <div key={index} className="d-inline-block">
          <Link to={`/marvel/${param2}/${event.id}`} className="card shadow m-2 text-center">
            <div className="img-wrap">
            <img src={`${event?.thumbnail?.path}.${event?.thumbnail?.extension}`} className="card-img-top" alt={event?.title}/>
            </div>
            <div className="card-body">
              <h5 className="card-title">{event?.title ? event?.title : event?.name}</h5>
              {
              (event?.start && event?.end) &&
              <div className='pt-2'>
              <p className="card-text mb-1"> <strong>Start</strong>  - {event?.start?.slice(0, -8)}</p>
              <p className="card-text"> <strong>End</strong>  - {event?.end?.slice(0, -8)}</p>
              </div>
              } 
            </div>
          </Link>
        </div>
          )
         })}
    </div>
    </div>
    </>
)
 
)
}

export default SharedComp