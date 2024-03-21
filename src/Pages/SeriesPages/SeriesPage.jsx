import React, { useContext, useEffect, useState } from 'react'
import homeFetchHook from '../../CustomHooks/homeFetchHook';
import { StyledCSC } from '../../StyledComponents/StyledCharsSeriesComics';
import LoadingComp from '../../Components/LoadingComp';
import { MarvelContext } from '../../context/MarvelContext';
import { Link } from 'react-router-dom';
import LikeButtonComp from '../../Components/LikeButtonComp';

function SeriesPage() {
  const{cardToggle,display,setDisplay,hash,timestamp,likeFunc}=useContext(MarvelContext)
  const publicKey=import.meta.env.VITE_MARVEL_API_PUBLIC_KEY
  const [willPrintSeries, setWillPrintSeries] = useState([]);
  const[loading,error,data,getData]=homeFetchHook();
  useEffect(()=>{
    getData(`https://gateway.marvel.com/v1/public/series?contains=comic&orderBy=-modified&limit=99&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`)
  },[])
  useEffect(()=>{
    const filteredSeries=data?.data?.results.filter(item=>{
       if(item?.description?.length>0){
         if(!item?.thumbnail?.path.includes("image_not_available")){
           return item
         }
       }
     })
     setWillPrintSeries(filteredSeries)
    //  console.log(willPrintSeries)
   },[data])
  // console.log(data)

  
  useEffect(()=>{
    const willSet={}
    willPrintSeries?.forEach((item,index)=>{
      willSet[index]=false;
    })
    setDisplay(willSet)
    // console.log(display)
  },[willPrintSeries])
 

  return (

    loading==true ?
      <LoadingComp/>
      :
      <StyledCSC className="row  my-1  mx-auto">
        <h2 className='pageHead display-5 text-center'> Last Modified Marvel Series</h2>
        {
          willPrintSeries?.map((series,index)=>{
            return (
              <div  onClick={()=>cardToggle(index)}  className="col-xl-4 col-md-6" key={index}>
              <div className={`card  my-3  ${ display[index]==true ? "onDetails" : "offDetails" }`}>
                <div className="img-wrap">
              <img src={`${series?.thumbnail?.path}.${series?.thumbnail?.extension}`} className="card-img-top" alt={`${series?.title}-img`}/>
              </div>
              <div className="card-body cardBodySeries">
                <div className="card-header">{series?.title}</div>
                <p className="card-text">{series?.description}</p>
                <div className="button-group d-flex justify-content-between align-items-center">
                <Link className='btn detailButton'  to={`/marvel/series/${series?.id}`}>Details</Link>
                <LikeButtonComp id={series?.id} name={series?.title} kind={"series"} />
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


export default SeriesPage