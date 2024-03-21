import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { StyledNavbar } from '../StyledComponents/StyledNavbar'
import { MarvelContext } from '../context/MarvelContext'


function Navbar() {
  
const {logOut}=useContext(MarvelContext)
const navigasyon=useNavigate();
const[btnDisabled,setBtnDisabled]=useState(true)
const searchInputRef = useRef(null);
const selectInputRef = useRef(null)


function onChangeFunc(e){
e.preventDefault();
// console.log(selectInputRef.current.value)
// console.log(searchInputRef.current.value)
if(selectInputRef.current.value!="default" && searchInputRef.current.value.length>3){
    setBtnDisabled(false)
}
else{
    setBtnDisabled(true)
}
}

function searchFunc(e){
    e.preventDefault();
    if(e.target.elements[0].value=="default" || e.target.elements[1].value.length<3){
        if(e.target.elements[0].value=="default"){console.log("seç birini.")}
        else{console.log("3 harften uzun arat.")}
    }
    else{
        navigasyon(`/marvel/search?q=${e.target.elements[0].value}/${e.target.elements[1].value}`)
        searchInputRef.current.value = "";
        selectInputRef.current.value = "default";
        setBtnDisabled(true)
    }  

}


  return (
    <StyledNavbar className="navbar navbar-expand-lg  p-lg-3 p-2 fs-5">
    <div className="container-fluid">
            <a className=" d-lg-none" href="#offcanvasNavbar"
            role='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"> <span className="navbar-toggler-icon"></span></a>
            <div className="navbar-brand "><a href="/marvel/home"><img style={{width:"150px",height:"75px"}} src="/Marvel_Logo.svg" alt="marvel-logo" /></a></div>
            {/* <!-- Offcanvas Navbar --> */}
            {/*  */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">Explore!</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Menu
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li className="nav-item dropdown-item" data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to={"/marvel/home"} >Home</NavLink></li>
                        <li className="nav-item dropdown-item"  data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to={"/marvel/characters"}>Characters</NavLink></li>
                        <li className="nav-item dropdown-item"  data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to={"/marvel/series"}>Series</NavLink></li>
                        <li className="nav-item dropdown-item"  data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to={"/marvel/events"}>Events</NavLink></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li  data-bs-dismiss="offcanvas"><NavLink className="dropdown-item text-center" to={"/marvel/profile"}>Your Profile</NavLink></li>
                        <li><button onClick={logOut} className="dropdown-item btn bg-light text-center" >Logout!</button></li>
                        </ul>
                    </li>
                    </ul>
                    <form onSubmit={searchFunc} className="d-flex ms-auto" role="search" >
                    <select ref={selectInputRef} className="form-select me-sm-1 mb-1" aria-label="Default select example" onChange={onChangeFunc}>
                    <option value="default">Select</option>
                    <option value="characters">Characters</option>
                    <option value="series">Series</option>
                    <option value="events">Events</option>
                    </select>
                    <input onChange={onChangeFunc} ref={searchInputRef}  className="form-control me-sm-2 mb-1" type="search" placeholder="Search" aria-label="Search"/>
                    <button disabled={btnDisabled ? true : false}  data-bs-dismiss="offcanvas"  className="btn searchBtn" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>

  </StyledNavbar>
  
  )
}

export default Navbar