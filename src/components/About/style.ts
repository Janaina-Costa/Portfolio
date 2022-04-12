import styled from "styled-components";

export const Container = styled.section`
    content: '';
    height: 2px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);


    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
top: 7.4rem;
width: 80vw;
height: 580px;


    h1{
        margin-bottom: 4rem;
        /* border: 2px solid #fff; */
        padding:1rem 4rem;
        /* box-shadow: 0px 0px 10px 2px #fff; */
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        border-radius: 0.625rem;
        color: #fff;
        font-weight: 400;
    }

    p{
        text-align: justify;
        color: #fff;
        line-height: 2rem;
        padding: 1rem;
    }
`