import {createGlobalStyle} from 'styled-components'


export const GlobalStylle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width:1080px) {
            font-size: 93.75%;//15px
        }

        @media (max-width:720px){
            font-size:87.5%;//=14px

        }

  }
    body{
        font-family: 'Red Hat Mono', monospace;
        background:rgba(158, 8, 233, 0.87) ;
        background: linear-gradient(67.33deg, rgba(0, 209, 255, 0.85) 0.66%, rgba(158, 8, 233, 0.87) 50.63%, rgba(83, 88, 247, 0.832769) 97.72%, rgba(77, 94, 248, 0.83) 100.59%) fixed;
        
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    
    body, button, input, textarea, h1, h2, h3, h4, h5, h6,p{
    /*intervalo de tamanho da fonte conforme a rela*/
    font-size:clamp(14px 1.6rem 2vw);
   
}


`

