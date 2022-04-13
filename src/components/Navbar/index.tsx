import * as S from './style'
import { CgMenu } from 'react-icons/cg'

export const Navbar = ()=>{
    return(
        <S.Container>
            <ul>
                <li><a href="#">About Me</a> </li>
                <li><a href="#">Skils</a></li>
                <li><a href="#">My Portfolio</a> </li>
                <li><a href="#">Contacte me</a></li>
                <li className="optionbar">
                    <CgMenu width={450} />
                </li>

            </ul>

        </S.Container>
    )
}