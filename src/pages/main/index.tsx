import { Navbar } from "../../components/Navbar"
import * as S from './style'
import { About } from "../../components/About"
import { ContentMain } from "../../components/ContentMain"
import { Skills } from "../../components/Skills"

export const Main = ()=>{
    return(
        <S.Container>
            <S.Wrapper>            
               <Navbar/>
                <ContentMain/>    
        </S.Wrapper>

        <About/>
        
        <Skills/>
        
        </S.Container>
    )
}