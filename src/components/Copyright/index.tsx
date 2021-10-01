import React from 'react'

import LogoAtex from '../../icons/LogoAtex'
import LogoXprog from '../../icons/LogoXprog'
import TextItem from './Item'
import { CopyrightProps } from './types'

import * as S from './styled'

const Copyright = ({ 
  bgColor,
  color, 
  text, 
  textXprog, 
  textAtex 
} : CopyrightProps ) => {
  return (
    <S.ContainerCopyright bgColor={bgColor}>
      <S.ContainerCopyrightItems>
        <TextItem color={color} text={text} />
      </S.ContainerCopyrightItems>    
      <S.ContainerCompanies>
        <S.ContainerXprog>
          <TextItem color={color} text={textXprog} />
          <LogoXprog />
        </S.ContainerXprog>
        <S.ContainerAtex>
          <TextItem color={color} text={textAtex}></TextItem>
          <LogoAtex />
        </S.ContainerAtex>
      </S.ContainerCompanies>  
    </S.ContainerCopyright>  
  )
}
export default Copyright