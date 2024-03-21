import React, { useContext, useEffect, useState } from 'react'
import homeFetchHook from '../../CustomHooks/homeFetchHook';
import { MarvelContext } from '../../context/MarvelContext';
import LoadingComp from '../../Components/LoadingComp';
import { StyledCSC } from '../../StyledComponents/StyledCharsSeriesComics';
import { Link } from 'react-router-dom';
import LikeButtonComp from '../../Components/LikeButtonComp';

function CharactersPage() {
  const{cardToggle,display,setDisplay,timestamp,hash,likeFunc}=useContext(MarvelContext)
  const publicKey=import.meta.env.VITE_MARVEL_API_PUBLIC_KEY
  const [willPrintChars, setWillPrintChars] = useState([]);
  const[loading,error,data,getData]=homeFetchHook();
  useEffect(()=>{
    getData(`https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=99&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`)
  },[])

  // console.log(data)

  useEffect(()=>{
   const filteredCharacters=data?.data?.results.filter(item=>{
      if(item?.description?.length>0){
        if(!item?.thumbnail?.path.includes("image_not_available")){
          return item
        }
      }
    })
    setWillPrintChars(filteredCharacters)
    // console.log(willPrintChars)
  },[data])

  useEffect(()=>{
    const initialDisplayState = {};
    willPrintChars?.forEach((_, index) => {
      initialDisplayState[index] = false;
    });
    setDisplay(initialDisplayState);
    // console.log(display)
  },[willPrintChars])


  return (

      loading==true ?
      <LoadingComp/>
      :
      <StyledCSC className="row my-3  mx-auto">
        <h2 className='pageHead display-5 text-center'> Last Modified Marvel Characters</h2>
        {
          willPrintChars?.map((hero,index)=>{
            return (
              <div onClick={()=>cardToggle(index)} className="col-xl-4 col-md-6" key={index}>
              <div className={`card  my-3 ${display[index] ? "onDetails"  : "offDetails" }`}>
                <div className="img-wrap">
              <img src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`} className="card-img-top" alt={`${hero?.name}-img`}/>
              </div>
              <div className="card-body cardBodyChars">
                <div className="card-header">{hero?.name}</div>
                <p className="card-text">{hero?.description}</p>
                <div className="button-group d-flex justify-content-between align-items-center">
                <Link className='btn detailButton'  to={`/marvel/characters/${hero?.id}`}>Details</Link>
                <LikeButtonComp id={hero?.id} name={hero?.name} kind={"characters"} />
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

export default CharactersPage