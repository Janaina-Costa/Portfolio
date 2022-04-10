import styled from "styled-components";

export const BallOne = styled.div`
        position: fixed;
        left:1rem;
        top: 2rem;
        width:27rem;
        height:27rem;

        clip-path: circle();
        background: linear-gradient(146.05deg, #F1CAD8 13.89%, rgba(253, 213, 227, 0) 86.42%);
        filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.25));    


`
export const BallTwo = styled.div`

        position: fixed;
        left: 40rem;
        top: 17rem;
        
        width:60rem;
        height:60rem;
        clip-path: circle(50% at 50% 50%);
        
        background: linear-gradient(223.35deg, rgba(255, 255, 255, 0.2) 16.81%, rgba(255, 255, 255, 0.032) 87.24%), linear-gradient(318.54deg, #83D5F0 26.75%, rgba(253, 213, 227, 0) 97.42%);
        box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);


`