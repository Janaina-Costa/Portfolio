import avatar from '../../assets/img/avatar.svg'
import * as S from './style'

export const ContentMain = ()=>{
    return(
        <S.Container>
        <div className="apresentation">
            <div className="image">
                <img src={avatar} alt="" />
            </div>

            <div className="greeting">
                <h1>Olá!</h1> 
                <p className="intro">meu nome é <span>Janaina Costa</span>,</p>
                <p className="intro">desenvolvedora web fullstak.</p>
                <p className="like-btn"><a href="">Portfolio</a></p>
            </div>
        </div>
    </S.Container>
    )
}