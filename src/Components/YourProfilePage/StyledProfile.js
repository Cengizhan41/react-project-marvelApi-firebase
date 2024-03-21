import styled from "styled-components";


export const StyledProfile=styled.div`

    h2{
        font-size: 3rem !important;
    }
    .card-body{
        .col-sm-4{
            padding: 0px !important;
            font-size: 1.5rem ;
        }
        .id{
            font-size: 1rem;
            strong{
                font-size: 1.5rem;
            }
        }
    }

form{
    justify-content: space-between !important;
    width: 100%;

    button{
        width: 75%;
    }
    
}

@media (max-width:576px){
    margin-top : .5rem !important;
    h2{
        font-size: 2rem !important;
    }
    .card-body{
        .col-sm-4{
            font-size: 1rem ;
            margin: .5rem 0 .5rem;
        }
        .id{
            font-size: .8rem;
            strong{
                font-size: 1rem;
            }
        }
    }
    form{
        .col-sm-4{
            margin: .5rem 0 .5rem;
        }
    }
}

`