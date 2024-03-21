import styled from "styled-components";


export const StyledFooter=styled.footer`
background-color: ${(props)=>props.theme.textColor} !important;
color: white;

span,a{
    color: white !important;
}
small{
    opacity: .9;
}

@media (max-width:768px){
    flex-direction: column;
    justify-content: center;
    padding: .5rem !important;
}
`