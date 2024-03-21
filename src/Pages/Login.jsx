import React, { useContext, useEffect, useState } from 'react'
import { StyledLogin } from '../StyledComponents/StyledLogin'
import { MarvelContext } from '../context/MarvelContext'

function Login() {
    const{loginSubmit,err,haveAccount,doNotHaveAccount}=useContext(MarvelContext)

  return (
    <StyledLogin className=' mx-auto rounded shadow'>
        <img className='login-img rounded' src="/img/marveluniverse.jpg" alt="marvel" />
        <form onSubmit={loginSubmit} className='text-center'>
  <div className="mb-3 ">
    <label htmlFor="username" className="form-label">Mail Address</label>
    <input type="mail" className="form-control" id="username" name='inputNameUser' placeholder='Mail Address 10-30 Characters' required/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='inputNamePassword' placeholder='Password 6-14 Characters' required />
  </div>
  <div className={`alert mx-auto ${err != null  ? "d-block" : "d-none"}`} role="alert">
  {err}
  </div>
  <div className="btn-group d-flex">
  <button type="submit" className="btn  text-center">{ haveAccount==true ? "Login" : "Sign Up"}</button>
  <button type='button' onClick={doNotHaveAccount} className={`btn ${haveAccount==false ? "d-none" : "d-block"}`}>I do not have an account</button>
  </div>
</form>
    </StyledLogin>
  )
}

export default Login