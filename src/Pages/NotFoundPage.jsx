import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNotFound } from '../StyledComponents/StyledNotFound'

function NotFoundPage() {
  return (
    <StyledNotFound className='container card my-3 p-2 text-center'>
        <h2>404 - Page Not Found</h2>
        <h3>We're sorry, the page you are looking for could not be found.</h3>
        <Link className='link my-3 btn' to={"/marvel/home"} >Go to Homepage</Link>
    </StyledNotFound>
  )
}

export default NotFoundPage