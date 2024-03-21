import styled from "styled-components";


export const StyledResults=styled.div`
min-height: 80vh;
.results-title{
    font-size: 2.5rem !important;
    vertical-align: middle !important;
    background-color: white;           
}

.card{
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
        height: 23rem !important;
        width: 18rem !important;
        .img-wrap{
            height: 17rem !important;
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
        padding: 0.5rem .7rem !important;
        h5{
        font-size: 1.2rem;
        margin-bottom: 0px !important;
        }
        p{
            font-size: .8rem;
        }
        }
      
    }


    @media (max-width:992px){
    .card{

        height: 19rem !important;
        width: 15rem !important;
        .img-wrap{
            height: 13rem !important;
        }
        .card-body{
        height: 6rem !important;
        h5{
        font-size: 1.1rem;
        margin-bottom: 0px !important;
        }
        p{
            font-size: .7rem;
        }
        }
      
    }
    }
    @media (max-width:768px){
        min-height: 85vh;
        .results-title{
            font-size: 2rem !important;
        }
        .card{
        height: 16rem !important;
        width: 12rem !important;
        .img-wrap{
            height: 11rem !important;
        }
        .card-body{
        height: 5rem !important;
        h5{
        font-size: 1rem;
        margin-bottom: 0px !important;
        }
        p{
            font-size: .6rem;
        }
        }
      
    }
    }
    @media (max-width:576px){
        .results-title{
            font-size: 1.5rem !important;
        }
        .card{
        height: 14rem !important;
        width: 10rem !important;
        .img-wrap{
            height: 9rem !important;
        }
        .card-body{
        height: 5rem !important;
        h5{
        font-size: .9rem;

        }
        p{
            font-size: .5rem;
        }
        }
      
    }
    }

`