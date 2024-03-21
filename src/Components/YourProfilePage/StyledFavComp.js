import styled from "styled-components";


export const StyledFavComp=styled.section`

.characters,.events,.series{
    width: 50%;
    margin: 0px auto;

    .list-group-item{
        border: 2px solid white;
        margin: 0.5rem;
        background-color: ${(props)=>props.theme.secondColor} ;
        .link{
        font-size: 1.5rem;
        color: ${(props)=>props.theme.firstColor} ;
    }
    }

    .dontHaveFavorites{
        .card-body{
            background-color: ${(props)=>props.theme.secondColor} ;
            h3{

                font-size: 1.5rem;
            }
        .link{
            overflow: hidden !important;
        color: ${(props)=>props.theme.firstColor} ;
        }
        }
    }
   
}

@media (max-width:576px){
    .characters,.events,.series{
    width: 95%;
    margin: 0px auto;

    .list-group-item{
        border: 1px solid white;
        margin: 0.3rem;
        .link{
        font-size: .9rem;
        }
        .btn{
            font-size: .9rem !important;
        }
    }

    .dontHaveFavorites{
        .card-body{
            h3{
                font-size: .9rem;
            }
        .link{
        font-size: 1.1rem;
        }
        }
    }
   
}
}
`