import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    padding:1rem;
    position: relative;
    top: 4rem;
    margin: auto;

    width: 80vw;
    height: 580px;
    background: linear-gradient(109.41deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 254, 254, 0.15) 100%);
    backdrop-filter: blur(1rem);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius:4rem;


    .apresentation{
        width:90%;
        display: flex;
        justify-content: space-between;
        position: relative;
        margin:2rem auto;
        padding:2rem;
        
        
        
    }
    .image{
        
        position: relative;
        width: min(20rem, 10%);
        height:20rem;
        left: -1rem;
        top: -4rem;
    }
    img{
        
        width: max(31.25rem);
        clip-path: circle(34% at 50% 30%);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        box-shadow:2px 2px 2px red
        
       

    }

    .greeting{
        display: flex;
        flex-direction: column;
        position: relative;
        top: 2rem;
        left: 3rem;
        padding: 0.8rem;
        width:50%;
        height:max-content;
        text-overflow: none;
    
        
    }
    .greeting h1, h3, p{
        font-weight: 400;
        font-size:2rem;
        color:#4E4E4E
        
    }
    span{
        color:#fff
    }
    .like-btn{
        margin-top:2.6rem;
       
    }
    .greeting a{
        
        font-size:1rem;
        text-decoration: none;
        color: #000;
        
        margin-left: 1.6rem;
        
        border: 4px solid;
        border-top-color: rgba(0, 209, 255, 0.85) ;
        border-bottom-color:rgba(158, 8, 233, 0.87);
        border-left-color:rgba(83, 88, 247, 0.832769);
        border-right-color: rgba(77, 94, 248, 0.83);
        padding:.5rem 1rem;
        transition:1s;
    }
    .greeting a:hover{
      
        border-top-color:rgba(83, 88, 247, 0.832769)   ;
        border-bottom-color:rgba(0, 209, 255, 0.85)  ;
        border-left-color:rgba(158, 8, 233, 0.87) ;
        border-right-color:rgba(77, 94, 248, 0.83) ;

    }

    @media (min-width: 1413px){
        main{
            max-width:80vw;
        }
    }

    @media (max-width:1373px){
        .apresentantion .image{
            left: -5rem;
        }
        .apresentation .image img{
            max-width: 25rem;
            

        }
        h1, h3, p, span{
            font-size:1.4rem;
        }
    }

    @media (max-width:958px){
       
       
      
    }

`
