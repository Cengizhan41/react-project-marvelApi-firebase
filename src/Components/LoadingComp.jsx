import React from 'react'
import { StyledLoading } from '../StyledComponents/StyledLoading'

function LoadingComp() {
  return (
    <StyledLoading className="spinners">
        <div className="content">
        <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow"  role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow"  role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow"  role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow"  role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    </StyledLoading>
    
  )
}

export default LoadingComp