import { Navbar } from "../../components/Navbar"
import * as S from './style'
import { About } from "../../components/About"
import { ContentMain } from "../../components/ContentMain"
import { Skills } from "../../components/Skills"
import { Glass } from "../../components/Glass"

export const Main = ()=>{
    return(
        <S.Container>
            <Glass>            
                <Navbar/>
                <ContentMain/>    
            </Glass>

        <About/>
        
        <Skills/>
        
        </S.Container>
    )
}