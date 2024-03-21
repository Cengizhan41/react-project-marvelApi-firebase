import styled from "styled-components";


export const  StyledHome=styled.div`
.container{
    width: 80%;
}

.hero{
    height: 85vh;
    background-size :cover !important ;
    background-position: 10% left !important;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url("/img/homehero.jpg"); 
    .heroInside{
    height: 85vh;
    width: 75%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

   .heroHead{
    font-size: 4rem;
   }
   .heroText{
    font-size: 2rem;
   }
   img{
    height: 3rem;
    margin-bottom: .5rem;
   }
  
}
}

section{
    .card{
        transition: color .2s ease;
        overflow: hidden;
        text-decoration: none;
        background-color: white;
        color: ${(props)=>props.theme.textColor};
        opacity: .9;
        .img-wrap{
        height: 20rem;
        img{
            height: 100%;
            width: auto;
            object-fit: cover;  
            transition: transform .2s; 
        }
        }
        .card-body{
            flex-direction: column;
            height: 100%;
            display: flex !important;
            justify-content: center;

            .card-title{
                font-size:3rem;
            }
            .card-text{
                font-size: 1.5rem;
            }
        }

        &:hover{
            color: ${(props)=>props.theme.bgColor};
            img{
                transform:  scale(1.02);   
            }
        }
    }
    
}
@media (max-width:768px){
    .container{
        width: 95%;
    }
    section{
        .card{
        .img-wrap{
        height: 15rem;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        }
        .card-title{
                font-size:2rem !important;
            }
            .card-text{
                font-size: 1rem !important;
            }
        }
    
    }
    
.hero{
    height: 90vh;
    .heroInside{
    height: 90vh;
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

   .heroHead{
    font-size: 2rem;
   }
   .heroText{
    font-size: 1rem;
   }
   img{
    height: 2rem;
    margin-bottom: .3rem;
   }
  
}
}
}
`