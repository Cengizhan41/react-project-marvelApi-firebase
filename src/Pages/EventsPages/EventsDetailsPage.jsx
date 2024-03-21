import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { MarvelContext } from '../../context/MarvelContext';
import homeFetchHook from '../../CustomHooks/homeFetchHook';
import { StyledDetails } from '../../StyledComponents/StyledDetails';
import LoadingComp from '../../Components/LoadingComp';
import SharedComp from '../../Components/DetailsComponent/SharedComp';
import NotFoundPage from '../NotFoundPage';
import LikeButtonComp from '../../Components/LikeButtonComp';

function EventsDetailsPage() {
    const {eventID}=useParams()
    const{timestamp,hash,scrollContainer1Ref,scrollContainer2Ref}=useContext(MarvelContext)
    const publicKey=import.meta.env.VITE_MARVEL_API_PUBLIC_KEY
    const[loading,error,data,getData]=homeFetchHook();
    // console.log(seriesID)

    useEffect(()=>{
      window.scrollTo(0, 0);
        getData(`https://gateway.marvel.com:443/v1/public/events/${eventID}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`)
      },[])
      // console.log(data)
      return (
        loading==true ?
          <LoadingComp/>
          :
          (error ? 
            <NotFoundPage/>
             :
        <StyledDetails className='event-details rounded'>
          <section className="row contain">
            <div className="col-md-6 imgContainer text-center">
              <img className='rounded shadow' src={`${data?.data?.results?.[0]?.thumbnail?.path}.${data?.data?.results?.[0]?.thumbnail?.extension}`} alt={data?.data?.results?.[0]?.title} />
            </div>
            <div className="col-md-6 generalDetails  d-flex flex-column justify-content-center align-items-center">
              <h2 className="title">{data?.data?.results?.[0]?.title}<small className='ms-1'>/ Event</small></h2>
              <p className='description lead'>{data?.data?.results?.[0]?.description}</p>
              <div className="card-text d-flex justify-content-between alignt-items-center" style={{"width":"100%"}}>
                <small className="small">Modified {data?.data?.results?.[0]?.modified.slice(0,10)}</small>
                <div className="start-end d-flex flex-column">
                <div className='d-flex justify-content-between'> 
                <small className='me-2'>Start </small> 
                <small>{data?.data?.results?.[0]?.end?.slice(0,10)}</small>
                </div>
                <div className='d-flex justify-content-between'>
                <small>End</small>
                <small>{data?.data?.results?.[0]?.end?.slice(0,10)}</small>
                </div>
                </div>
                 </div>
                 <LikeButtonComp id={data?.data?.results?.[0]?.id} name={data?.data?.results?.[0]?.title} kind={"events"}/>
            </div>
          </section>
          <section className='my-3 eventChars'> 
          <SharedComp param1={"events"} param2={"characters"} id={eventID} name={data?.data?.results?.[0]?.title} componentRef={scrollContainer1Ref}/>
          </section>
          <section className="eventSeries mt-sm-5 mt-3 mb-2  mx-auto">
           <SharedComp param1={"events"} param2={"series"} id={eventID} name={data?.data?.results?.[0]?.title} componentRef={scrollContainer2Ref}/>
          </section>
        </StyledDetails>
             )
        
      )
}

export default EventsDetailsPage