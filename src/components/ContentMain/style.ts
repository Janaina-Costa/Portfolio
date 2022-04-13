import styled from "styled-components";


export const Container = styled.div`
    width:100% ;
    height:90% ;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    position:absolute ;
    top: 4.75rem ;

    

    .apresentation{
        display:flex ;
        flex-direction:column ;
        flex-wrap:nowrap;

        width:100% ;
        max-height:70vh;
       
        .image{
            display:inline-block ;

            margin: auto;
                 
            position:relative ;
            top: -5rem;
            text-align:center ;
            width:100%;
            height:18rem ;
            
            
            img{
               clip-path: circle();
               clip-path: circle(35.2% at 48% 27%);
               position:relative;
               width:min(30rem,90%);
            }
           
        }
        .greeting{
           
            width:100%;
            position:relative;
            top: -2rem;
            padding:1.5rem;
            
            h1, .intro{
                font-weight: 400;
                font-size:1.4rem;
            }
            span{
                color: #fff;
                font-weight: 600;
            }

            .like-btn a{
                position: relative;
                top:1.8rem ;
                font-size: 1rem;
                padding:0.625rem 2rem;
                width:5.625rem ;
                color:#000 ;
                border: 3px solid;
                border-image: linear-gradient(45deg, #3C93FD, #F93857 100%)1;
                transition: border-image, color 2s;
                &:hover{
                    border-image: linear-gradient(45deg, #F93857,  #3C93FD 100%)1;
                    color: #fff;
                }
            }

        }

    }

    @media (min-width: 522px){
        .apresentation{
            flex-direction: row;
        }
    }

    

`