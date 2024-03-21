import { createGlobalStyle } from "styled-components";


export const GlobalStyles=createGlobalStyle`
*{
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;

}
html{
    overflow-x: hidden;
}
body{
    background-color: ${(props)=>props.theme.bgColor};
    color: ${(props)=>props.theme.textColor};
    font-family: "Oswald", sans-serif !important;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* min-height: 100vh; */


    button{
        font-size: 1.2rem !important;
        background-color: ${(props)=>props.theme.bgColor} !important;
        color: ${(props)=>props.theme.textColor} !important;

        &:hover{
        background-color: ${(props)=>props.theme.textColor} !important;
        color: ${(props)=>props.theme.bgColor} !important;
        }
    }

    .likeBtn{
        color: ${(props)=>props.theme.firstColor} !important;
        font-size: 1.5rem !important;
        background-color: transparent !important;
        border:  2px solid ${(props)=>props.theme.firstColor};
        padding: 0.2rem .5rem .5rem  !important;
        svg{
            width:30px !important;
            height: 30px !important;
            margin-bottom: 0.1rem;
        }
        }

        @media (max-width:768px){
            .likeBtn{
            padding: 0.2rem !important;
            font-size: 1rem !important;
            svg{
            width: 22px !important;
            height: 22px !important;
            /* margin-bottom: 0.5rem; */
            }
            }
          
        }
       
}
`