import * as S from './style'
type Props = {children: React.ReactNode}

export const Glass= (props:Props)=>{
    return(
            
        <S.Wrapper>
            {props.children}
        </S.Wrapper>
           
       
    )
}