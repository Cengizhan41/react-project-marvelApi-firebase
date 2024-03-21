import styled from "styled-components";


export const StyledDetails=styled.div`

&.char-details,&.series-details,&.event-details{
    .contain{
    background-color: ${(props)=>props.theme.secondColor};
    padding: 2rem;
    color:${(props)=>props.theme.firstColor} ;
    margin: 3rem auto;
    width: 90%;
    .imgContainer{
    height: 30rem !important;
    img{
    height: 100%;
    max-width: 100%;
    width: 80%;
    object-fit: cover;
    }
    }
    .generalDetails{
        .title{
            font-size: 2.5rem !important;
            vertical-align: middle !important;
            small{
                color: #fff;
                font-size: 1.5rem !important;
            } 
        }
      
        .description{
            font-size: 1.5rem !important;
        }
        small{
            font-size: .9rem !important;
            color: #fff;
        }
    }
    }   
}

.charSeries,.charEvents,.seriesChars,.seriesEvents,.eventChars,.eventSeries{
    padding: 1rem !important;
    background-color: ${(props)=>props.theme.secondColor} !important;
    color:${(props)=>props.theme.firstColor} !important ;

    .buttonsContain{
        position: relative;
    button{
        background-color: ${(props)=>props.theme.firstColor} !important;
        color: white !important;
        position: absolute;
        top: 50%; 
        transform: translateY(-50%); 
        z-index: 1;
        border-radius: 50%;
        padding-bottom: 0.7rem;
    }
    .backBtn{
        left: 0; 
    }
    .forwardBtn{
        right: 0; 
    }   
    .componentContain{
    overflow-x: auto !important;
    white-space: nowrap !important;
    scrollbar-width: thin; 
    scrollbar-color: ${(props)=>props.theme.firstColor} transparent;

    } 
    }
  

    h2{
        font-size: 3rem !important;
        background-color: #fff  !important;
    }
    .card{
        white-space: normal; 
        width: 12rem !important;
        text-decoration: none;
        transition: transform 0.3s ease-in-out;
        height: 22rem !important;
        .card-body{
           padding: 0.5rem .1rem;
           height: 7rem;
           overflow: hidden;
        }
        .img-wrap{
            height: 15rem !important;
            img{
                height: 100%;
                width: 100%;
                max-width: 100%;
                object-fit: cover;
            }
        }
        &:hover{
            transform: translateY(-10px);
        }
     
    }

}

@media (max-width:576px){
    &.char-details,&.series-details,&.event-details{
    .contain{
    padding: 1rem;
    margin: 1rem auto;
    width: 90%;
    .imgContainer{
    height: 20rem !important;
    img{
    height: 100%;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    }
    }
    .generalDetails{
        padding: 1rem;
        .title{
            font-size: 1.5rem !important;
            small{
                font-size: 1rem !important;
             
            }
        }
        .description{
            font-size: 1rem !important;
        }
        small{
            font-size: .8rem !important;
        }
    }
    }   
    }
    .charSeries,.charEvents,.seriesChars,.seriesEvents,.eventChars,.eventSeries{
    padding: .5rem !important;
    .col-xl-2{
    padding: 0px !important;
    margin: 0px !important;
    }
    h2{
        font-size: 1.5rem !important;
    }
    .card{
        height: 19rem !important;
        width: 10rem !important;
        .img-wrap{
            height: 13rem !important;
            img{
                height: 100%;
                width: 100%;
                max-width: 100%;
                object-fit: cover;
            }
        }
        &:hover{
            transform: translateY(-10px);
        }
        .card-body{
        height: 6rem !important;
        margin-top: .5rem;
        padding: 0.2rem !important;
        h5{
        font-size: 1rem;
        margin-bottom: 0px !important;
        }
        p{
            font-size: .8rem;
        }
        }
      
    }

}
}

`