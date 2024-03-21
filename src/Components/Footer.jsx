import React from 'react'
import { FaGithub } from "react-icons/fa";
import { StyledFooter } from '../StyledComponents/StyledFooter';

function Footer() {
  return (
    <StyledFooter className="d-flex  justify-content-between align-items-center py-3 mt-4 border-top ">
    <div className="col-md-4 d-flex align-items-center ms-md-5">
      <a href="/marvel/home" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img src="/Marvel_Logo.svg" alt="" />
      </a>
      <span className="mb-3 mb-md-0 text-muted">© 2024 Company, Inc  </span>
    </div>
    <small className='fw-lighter'>This is a React Demo Project-Created by  using MarvelAPI for Developers.</small>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-md-5">
      <li className="ms-3  mt-md-0 mt-3"><a className="text-muted" target='blank' href="https://github.com/Cengizhan41"><FaGithub style={{fontSize:"2rem"}} /></a></li>
    </ul>

  </StyledFooter>
  )
}

export default Footer