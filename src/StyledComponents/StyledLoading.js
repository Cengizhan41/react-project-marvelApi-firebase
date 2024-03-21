import styled from "styled-components";


export const StyledLoading=styled.div`
height: 85vh;
display: flex;
align-items: center;
justify-content: center;
.content{
    .spinner-grow{
    height:3.5rem;
    width:3.5rem;
}
}

@media (max-width:768px){
    height: 70vh;
    
}

@media (max-width:576px){
    .content{
    .spinner-grow{
    height:2rem;
    width:2rem;
}
}
}

`