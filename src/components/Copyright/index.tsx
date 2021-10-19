import React from 'react'

import LogoAtex from '../../icons/LogoAtex'
import LogoXprog from '../../icons/LogoXprog'
import TextItem from './Item'
import * as S from './styled'
import { CopyrightProps } from './types'

const Copyright = ({ 
  bgColor,
  color,
  textCompany, 
  textCopyright, 
  textRights, 
  textXprog, 
  textAtex 
} : CopyrightProps ) => {
  return (
    <S.ContainerCopyright bgColor={bgColor}>
      <S.ContainerCopyrightBox>
        <S.ContainerCopyrightItems>
          <TextItem color={color} text={textCopyright} />
          <TextItem color={color} text={textCompany} />
          <TextItem color={color} text={textRights} />
        </S.ContainerCopyrightItems>    
        <S.ContainerCompanies>
          <S.ContainerXprog>
            <TextItem color={color} text={textXprog} />
            <LogoXprog />
          </S.ContainerXprog>
          <S.ContainerAtex>
            <TextItem color={color} text={textAtex} />
            <LogoAtex />
          </S.ContainerAtex>
        </S.ContainerCompanies>
      </S.ContainerCopyrightBox>  
    </S.ContainerCopyright>  
  )
}
export default Copyright