import React, { useContext, useEffect, useState } from 'react'
import { MarvelContext } from '../../context/MarvelContext'
import homeFetchHook from '../../CustomHooks/homeFetchHook'
import LoadingComp from '../../Components/LoadingComp';
import { StyledCSC } from '../../StyledComponents/StyledCharsSeriesComics';
import { Link } from 'react-router-dom';
import LikeButtonComp from '../../Components/LikeButtonComp';

function EventsPage() {
  const{cardToggle,display,setDisplay,hash,timestamp,likeFunc}=useContext(MarvelContext);
  const publicKey=import.meta.env.VITE_MARVEL_API_PUBLIC_KEY
  const [willEvents, setWillEvents] = useState([]);
  const[loading,error,data,getData]=homeFetchHook();
  useEffect(()=>{
    getData(`https://gateway.marvel.com/v1/public/events?orderBy=-modified&limit=99&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`)
  },[])

  useEffect(()=>{
    const filteredEvents=data?.data?.results.filter(item=>{
      if(item?.description?.length>0){
        if(!item?.thumbnail?.path.includes("image_not_available")){
          return item
        }
      }
    })
    if(filteredEvents?.length>20){
     setWillEvents(filteredEvents?.slice(0,20))
    }
    else if(filteredEvents?.length<=20){
      setWillEvents(filteredEvents)
    }
  // console.log(willEvents)
  },[data])

  useEffect(()=>{
    const initialDisplayState = {};
    willEvents?.forEach((_, index) => {
      initialDisplayState[index] = false;
    });
    setDisplay(initialDisplayState);
    // console.log(display)
  },[willEvents])

  // console.log(data)
  return (
    loading==true ?
    <LoadingComp/>
    :
    <StyledCSC className="row my-3  mx-auto">
      <h2 className='pageHead display-5 text-center'> Last Modified Marvel Events</h2>
      {
        willEvents?.map((event,index)=>{
          return (
            <div onClick={()=>cardToggle(index)} className="col-xl-4 col-md-6" key={index}>
            <div className={`card  my-3 ${display[index] ? "onDetails"  : "offDetails" }`}>
              <div className="img-wrap">
            <img src={`${event?.thumbnail?.path}.${event?.thumbnail?.extension}`} className="card-img-top" alt={`${event?.name}-img`}/>
            </div>
            <div className="card-body cardBodyEvents">
              <h3 className="card-header">{event?.title}</h3>
              <p className="card-text">{event?.description}</p>
              <div className="button-group d-flex justify-content-between align-items-center">
                <Link className='btn detailButton'  to={`/marvel/events/${event?.id}`}>Details</Link>
                <LikeButtonComp id={event?.id} name={event?.title} kind={"events"} />
                </div>
            </div>
          </div>
          </div>
          )
        })
      }
  </StyledCSC>

  )
}

export default EventsPage