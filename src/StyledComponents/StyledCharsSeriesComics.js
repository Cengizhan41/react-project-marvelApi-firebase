import styled from "styled-components";


export const StyledCSC=styled.div`
.col-lg-4{
    padding: 0.5rem;
}
.pageHead{
    margin: 1rem 0 0 !important;
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
}
.img-wrap{
    height: 30rem;
    transition: filter 0.3s ease;
    img{
        height: 100%;
        object-fit: cover;
        transition: transform .2s; 
      
    }
}

.card{
    position: relative;
    overflow: hidden !important;
    cursor: pointer;
    .img-wrap{
    height: 35rem;
    transition: filter 0.3s ease;
    img{
        height: 100%;
        object-fit: cover;
        transition: transform .2s;  
    }
    }
    .card-body{
        position: absolute;
        color: ${(props)=>props.theme.textColor};
        top: 0px;
        /* transform: translateY(-50%); */
        &.cardBodyChars{
        .card-header{
        font-size: 2.5rem !important;
       }
       .card-text{
        font-size: 1.2rem !important;
       }
        }
        &.cardBodySeries{
        .card-header{
        font-size: 1.5rem !important;
       }
       .card-text{
        font-size: 1rem !important;
       }
        }
        &.cardBodyEvents{
        .card-header{
        font-size: 1.7rem !important;
       }
       .card-text{
        font-size: 1.2rem !important;
       }
        }
        .detailButton{
            text-align: center !important;
            font-size: 1.5rem;
            color: ${(props)=>props.theme.textColor};
            border: 0.1rem solid  ${(props)=>props.theme.firstColor};
        }
      
       
      
    }
}
.onDetails{
    .card-body{
        display: block;
    }
    .img-wrap{
        filter: brightness(0.3);
        /* opacity: 0.3 !important; */
        img{
            transform:  scale(1.02); 
        }
    }
}
.offDetails{
    .card-body{
        display: none;
    }
}

@media (max-width:768px){
    .col-lg-4{
    padding: 0.2rem;
}
    .charsHead{
    font-size: 1.5rem !important;
    padding: .5rem;
    border-radius: 3px;
    }
    .card{
    .img-wrap{
    height: 25rem;
    }
    .card-body{
        padding: 0px .5rem !important;
        &.cardBodyChars{
        .card-header{
        font-size: 1.3rem !important;
       }
       .card-text{
        font-size: .8rem !important;
       }
        }
        &.cardBodySeries{
        .card-header{
        font-size: 1.3rem !important;
       }
       .card-text{
        font-size: .8rem !important;
       }
        }
        &.cardBodyEvents{
        .card-header{
        font-size: 1.3rem !important;
       }
       .card-text{
        font-size: 1rem !important;
       }
        }
        
        .detailButton{
            padding: 0.2rem !important;
            text-align: center !important;
            font-size: 1rem !important;
        } 
    }
   
       
   
}
    

}


`