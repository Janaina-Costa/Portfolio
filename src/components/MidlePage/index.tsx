import * as S from './style'

type Props = {children:React.ReactNode}


export const MidlePage = (props:Props)=>{
    return(
        <S.Container>
            {props.children}
        </S.Container>
    )
}