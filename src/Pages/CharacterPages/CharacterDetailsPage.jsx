import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MarvelContext } from '../../context/MarvelContext';
import homeFetchHook from '../../CustomHooks/homeFetchHook';
import { StyledDetails } from '../../StyledComponents/StyledDetails';
import LoadingComp from '../../Components/LoadingComp';
import SharedComp from '../../Components/DetailsComponent/SharedComp';
import NotFoundPage from '../NotFoundPage';
import LikeButtonComp from '../../Components/LikeButtonComp';


function CharacterDetailsPage() {
  const {charID}=useParams();
  const{timestamp,hash,scrollContainer1Ref,scrollContainer2Ref}=useContext(MarvelContext)
  const publicKey=import.meta.env.VITE_MARVEL_API_PUBLIC_KEY
  const[loading,error,data,getData]=homeFetchHook();

  useEffect(()=>{
    window.scrollTo(0, 0);
    getData(`https://gateway.marvel.com:443/v1/public/characters/${charID}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`)
  },[])

  return (
    loading==true ?
      <LoadingComp/>
      :
      (
        error ?
        <NotFoundPage/>
        :
        <StyledDetails className='char-details rounded'>
        <section className="row contain">
          <div className="col-md-6 imgContainer text-center">
            <img className='rounded shadow' src={`${data?.data?.results?.[0]?.thumbnail?.path}.${data?.data?.results?.[0]?.thumbnail?.extension}`} alt={data?.data?.results?.[0]?.name} />
          </div>
          <div className="col-md-6 generalDetails d-flex flex-column justify-content-center align-items-center">
            <h2 className="title">{data?.data?.results?.[0]?.name}<small className='ms-2'>/ Character</small></h2>
            <p className='description lead'>{data?.data?.results?.[0]?.description}</p>
            <p className="card-text"><small className="small">Modified {data?.data?.results?.[0]?.modified.slice(0,10)}</small></p>
            <LikeButtonComp id={data?.data?.results?.[0]?.id} name={data?.data?.results?.[0]?.name} kind={"characters"}/>
          </div>
        </section>
        <section className='my-3 charSeries mx-auto'>
          <SharedComp param1={"characters"} param2={"series"} id={charID} name={data?.data?.results?.[0]?.name} componentRef={scrollContainer1Ref}/>
        </section>
        <section className="mt-sm-5 mt-3 mb-2 charEvents mx-auto">
          <SharedComp param1={"characters"} param2={"events"} id={charID} name={data?.data?.results?.[0]?.name} componentRef={scrollContainer2Ref}/>
        </section>
      </StyledDetails>
      )
   
  )
}

export default CharacterDetailsPage