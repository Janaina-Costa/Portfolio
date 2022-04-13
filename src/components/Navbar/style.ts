import styled from 'styled-components'


export const Container = styled.nav`
    display: flex;
    position: relative;
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
      
        color: #fff;
        display: none;
        font-size:2rem;        
        
    }

    @media (max-width:893px){
       li{
           display: none;
       }
        .optionbar{
            position: relative;
            display: block;
            justify-content:flex-end;
            cursor: pointer;
        }
    }

`