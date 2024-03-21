import styled from "styled-components";


export const StyledNavbar=styled.nav`
background-color: ${(props)=>props.theme.textColor};
height: 15vh;

.dropdown-toggle{
  color: white !important;
  font-size: 1.5rem !important;
}
.dropdown-item.active{
  background-color:${(props)=>props.theme.textColor} ;

  [aria-current="page"] {
    background-color:${(props)=>props.theme.textColor}  !important;
}
}
div.offcanvas{
  background-color:${(props)=>props.theme.firstColor} ;
    }
.btn-close{
  background-color: white !important;
  padding: 1rem !important;
}


form{
  margin-top: .5rem;
  .searchBtn{
    color: white !important;
    background-color: ${(props)=>props.theme.bgColor} !important;

    &:hover{
      color: ${(props)=>props.theme.bgColor} !important;
      background-color:white !important;
    }
  }
}
@media (max-width:576px){
  padding: 0px !important;
  div.offcanvas{
      width: 60% !important;
    }
  form{
      margin-top: 1rem;
      .searchBtn{
        font-size: 1rem !important;
      }
    }

  .navbar-brand{
      margin: 0px auto;
      img{
        width:120px !important;
        height:60px !important;
      }
    }
  .dropdown{
    .dropdown-toggle{
      display: none;
    }
    .dropdown-menu{
      display: block;

    }
  }
}

@media (min-width: 992px){ 
    .navbar{
        position: relative;
    }
    .navbar-brand{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

}

@media (max-width:768px){
  height:10vh !important;
  .navbar{
        position: relative;
    }
    .navbar-brand{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

}
@media (max-width:576px){
  form{
    margin-top: .5rem !important;
    margin: auto;
    align-items: center;
    width: 90%;
    display: flex;
    flex-direction: column;
  }
}

`