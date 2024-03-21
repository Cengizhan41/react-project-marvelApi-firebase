import React, { useContext, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { MarvelContext } from '../context/MarvelContext';
import homeFetchHook from '../CustomHooks/homeFetchHook';
import LoadingComp from '../Components/LoadingComp';
import { StyledResults } from '../StyledComponents/StyledResults';
import NotFoundPage from './NotFoundPage';

function SearchResults() {
    const [searchParams,setSearchParams]=useSearchParams();
    const query=searchParams.get("q")
    const param=query.split("/");
    // console.log(param)

    const{timestamp,hash,scrollContainer1Ref,scrollContainer2Ref}=useContext(MarvelContext)
    const publicKey=import.meta.env.VITE_MARVEL_API_PUBLIC_KEY
    const[loading,error,data,getData]=homeFetchHook();
    const [willPrintData,setWillPrintData]=useState();
    useEffect(()=>{
      if(param[0]=="characters"){
        // console.log("characters")
        getData(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${param[1].length<5 ? param[1] : param[1].slice(0,5)}&orderBy=-modified&limit=99&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`)
      }
      else if(param[0]=="series"){     
        getData(`https://gateway.marvel.com/v1/public/series?titleStartsWith=${param[1].length<5 ? param[1] : param[1].slice(0,5)}&orderBy=-modified&limit=99&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`)
      }
      else if(param[0]=="events"){
        getData(`https://gateway.marvel.com/v1/public/events?nameStartsWith=${param[1].length<5 ? param[1] : param[1].slice(0,5)}&orderBy=-modified&limit=99&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`)
      }
    },[query])

    useEffect(()=>{
      const filteredData=data?.data?.results?.filter(item=>!item.thumbnail.path.includes("image_not_available"))
      setWillPrintData(filteredData)
    },[data])
    // console.log(willPrintData)
  return (
    loading==true ?
    <LoadingComp/>
    :
    (   willPrintData?.length>0 
      ?
      <StyledResults >
      <h2 className='results-title display-5 text-center my-3 p-3 rounded'>The <strong>{param[0].charAt(0).toUpperCase() + param[0].slice(1)}</strong>  for <strong>"{param[1]}"</strong>  query! </h2>
      <div className="results-content  ">
      <div className="row g-3 my-3 mx-auto">
        {
        willPrintData?.map((item,index)=>{
          return (
              <div className="col-xl-3  col-sm-4  col-6  " key={index}>
              <Link to={`/marvel/${param[0]}/${item?.id}`} className="card shadow mx-auto">
              <div className="card-header img-wrap p-0">
                    <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} className="card-img-top" alt={item?.name ? item.name : item.title} />
              </div>
                <div className="card-body text-center">
              <h5 className="card-title">{item?.title ? item?.title : item?.name}</h5>
              {
              (item?.start && item?.end) &&
              <div className='pt-2'>
              <p className="card-text mb-1"> <strong>Start</strong>  - {item?.start?.slice(0, -8)}</p>
              <p className="card-text"> <strong>End</strong>  - {item?.end?.slice(0, -8)}</p>
              </div>
              } 
              </div>
                </Link>
              </div>
           
          )
        })
        }
        </div>
      </div>
      </StyledResults>

      :
      <NotFoundPage/>
  )
  
  )
}

export default SearchResults