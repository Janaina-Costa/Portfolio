import { Navbar } from "../../components/Navbar"
import avatar from '../../assets/img/avatar.svg'
import * as S from './style'
import { About } from "../../components/About"

export const Main = ()=>{
    return(
        <S.Container>
            <S.Wrapper>            
                <main>
                <Navbar/>
                    <div className="apresentation">
                        <div className="image">
                            <img src={avatar} alt="" />
                        </div>

                        <div className="greeting">
                            <h1>Olá!</h1> 
                            <h3>eu sou a <span>Janaina Costa</span>,</h3>
                            <p>desenvolvedora web fullstak.</p>
                            <p className="like-btn"><a href="">Portfolio</a></p>
                        </div>
                    </div>
                </main>
        </S.Wrapper>

        <About/>
        
        </S.Container>
    )
}