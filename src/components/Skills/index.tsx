import * as S from './style'
import skills from '../../assets/img/skill.svg'
import skillmobile from '../../assets/img/skillmobile.svg'
import { Glass } from '../Glass'
import React from 'react'



export const Skills = ()=>{
    return(
        <S.Container>

            <Glass>
    
             <h1 className="title">Skills</h1>
             <div className="image">
                 <img className="skillmobile" src={skillmobile} alt="imagem dos skills" />
                 <img className='skillweb' src={skills} alt="" style={{display: 'none'}} />
             </div>
    
            </Glass>
            

        </S.Container>
        
    )
}