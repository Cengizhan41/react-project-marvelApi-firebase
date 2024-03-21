
import React, { useState } from "react";


function homeFetchHook(){
const[data,setData]=useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(false);


async function getData(url){
    const response = await fetch(url);
    const jsonData= await response.json();
    setData(jsonData);
    setLoading(false);
    if(!response.ok){
        setError(true)
    }
}

return [loading,error,data,getData]
}

export default  homeFetchHook;