import styled from "styled-components";


export const StyledLogin=styled.div`
width: 75%;
height: 100vh;
position: relative;
overflow: hidden;


&:hover{
    .login-img{
      transform:  scale(1.02);
    }
}
.login-img{
    transition: transform .2s;
    position: absolute;
    opacity: 0.7;
    width: 100%;
    height: 100%;
}
form{
    width: 35%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    label{
        font-size: 2rem;
        text-shadow: -2px 2px 0 black,
                      2px 2px 0 black,
                      2px -2px 0 black,
                     -2px -2px 0 black;
    }
    input{
        background-color: ${(props)=>props.theme.bgColor};
        color:${(props)=>props.theme.textColor};
        border: 2px solid ${(props)=>props.theme.textColor};
    }

    .alert{
        width: 50%;
        background-color: ${(props)=>props.theme.textColor};
        color: ${(props)=>props.theme.bgColor};
        font-weight: 700;
    }
}

@media (max-width:768px){
    width: 80%;
    height: 100vh;
  form{
    width: 70%;
  }
}
@media (max-width:576px){
  margin-top: 5rem;
  width: 75%;
  height: 50vh;
  form{
    width: 90%;
    label{
      font-size: 1.2rem;
        font-weight: bold;
        text-shadow: -1px 1px 0 black,
                      1px 1px 0 black,
                      1px -1px 0 black,
                     -1px -1px 0 black;
    }
    button{
      font-size: 1rem !important;
    }
  }
}
`