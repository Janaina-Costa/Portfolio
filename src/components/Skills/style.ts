import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 36.25vh;
    top: 7.75rem;
    
    .image{
        text-align: center;
        display: inline-block;
        position: relative;
        top: -3rem;
        height:50vh ;
        
        .skillmobile{
            position: relative;
            width: min(100vw,85%);
        }
        
    }

    @media (min-width:900px) {
        .skillweb{
            display:block !important;
            position: relative;
            

            width: min(100vw,100%);
        }
        .skillmobile{
            display: none;
        }
    }
        
`   