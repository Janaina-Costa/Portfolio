import styled from 'styled-components'


export const Container = styled.nav`
    display: flex;
    
    width: min(90%);
    padding: 1.5rem;
    
    ul{
        width: 100%;
        display: flex;    
        justify-content: flex-end;
    }
    li{
        margin-left: 4rem;
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #fff;
        font-weight:500;
        font-size:1rem;
    }
    .optionbar{
        position: relative;
        color: #fff;
        display: none;
        font-size:2rem;
        left: 250px;
        cursor: pointer;
    }

    @media (max-width:958px){
       ul{
           display: none;
       }
        .optionbar{
            display: block;
        }
    }

`