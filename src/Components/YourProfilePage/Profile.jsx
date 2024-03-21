import React, { useContext, useState } from 'react'
import { StyledProfile } from './StyledProfile'
import { MarvelContext } from '../../context/MarvelContext'

function Profile({currentUser}) {

  const {changePassword}=useContext(MarvelContext)
  const [control,setControl]=useState(false)
  const [alert,setAlert]=useState(null)

  function formFunc(e){
    e.preventDefault();
    if(control==false){
      setControl(true)
     
      // console.log(e.target.elements[0].value)
      // console.log(e.target.elements[1].value)
    }
    else{
     if(e.target.elements[0].value.length <= 6  || e.target.elements[1].value.length  >= 14)
     {
      if(e.target.elements[0].value.length == 0 && e.target.elements[1].value.length  == 0){
        setControl(false)
        setAlert(null)
      }
      else{
        setAlert("Your password should be between 6-14 letters.")
      }
     }
     else{
      if(e.target.elements[0].value != e.target.elements[1].value){
        setAlert("Your 'New Password' and 'Verify Password' values must be the same.")
      } 
      else{
        changePassword(e.target.elements[0].value,currentUser?.userID)
        e.target.elements[0].value=""
        e.target.elements[1].value=""
        setAlert(null)
        setControl(false)
      }
     }
     
    }
   
  }
  return (
    <StyledProfile className="container card p-0 p-sm-3 my-5">
      <h2 className='text-center my-3 pb-3 border-bottom'>Profile</h2>
      <div className="row text-center card-body p-0 p-sm-3">
        <div className="col-sm-4"> <strong>Your mail adress</strong>  : {currentUser?.userMail}</div>
        <div className="col-sm-4"> <strong>Your Password</strong>  : {currentUser?.userPassword}</div>
        <div className="col-sm-4 id"> <strong>Your unique ID</strong> : {currentUser?.userID}</div>
      </div>
      <div className="my-3 text-center">
        <form onSubmit={formFunc} className='row d-flex align-items-end mx-auto'>
        <div className={`col-sm-4 ${control==true ? "d-block" : "d-none"}`}>
        <label htmlFor="newsPassword" className="form-label">New Password</label>
        <input type="password" className="form-control" id="newsPassword" name='inputNameUser' placeholder='Password 6-14 Characters' />
          </div>
        <div className={`col-sm-4 ${control==true ? "d-block" : "d-none"}`}>
        <label htmlFor="verifyNewPassword" className="form-label">Verify the New Password</label>
        <input type="password" className="form-control" id="verifyNewPassword" name='inputNameUser' placeholder='Password 6-14 Characters' />
        </div>
        <div className="col-sm-4 mx-auto">
        <div className={`alert alert-danger ${alert==null ? "d-none" : "d-block"}`} role="alert">{alert}</div>
          <button  className='btn col-sm-4'>Change your password!</button>
         
          </div>
        
        </form>
   
      </div>
    </StyledProfile>
  )
}

export default Profile