import styled from "styled-components";

export const StyledNotFound=styled.div`
background-color: ${(props)=>props.theme.secondColor};
color:${(props)=>props.theme.firstColor} ;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;

.link{
    font-size: 1.5rem;
    color:${(props)=>props.theme.secondColor};
    background-color: ${(props)=>props.theme.firstColor};
    text-decoration: none;
    border: 2px solid ${(props)=>props.theme.firstColor};
    padding: 1rem;
}

@media (max-width:576px){
    height: 75vh;
    .link{
    font-size: 1.2rem;
    padding: .9rem;
}
}
`