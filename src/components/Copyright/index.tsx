import React from 'react'

import LogoAtex from '../../icons/LogoAtex'
import LogoXprog from '../../icons/LogoXprog'
import TextItem from './Item'
import { CopyrightProps } from './types'

import * as S from './styled'

const Copyright = ({ 
  color, 
  text, 
  textXprog, 
  textAtex 
} : CopyrightProps ) => {
  return (
    <S.ContainerCopyright>
      <S.ContainerCopyrightItems>
        <TextItem color={color} text={text} />
      </S.ContainerCopyrightItems>    
      <S.ContainerCompanies>
        <S.ContainerXprog>
          <TextItem color={color} text={textXprog} />
          <a href='https://xprog.com.br' target='_blank' rel='noreferrer' aria-label='Marca da Xprog'>
            <LogoXprog />
          </a>  
        </S.ContainerXprog>
        <S.ContainerAtex>
          <TextItem color={color} text={textAtex}></TextItem>
          <a href='https://www.atex.com' target='_blank' rel='noreferrer' aria-label='Marca da Atex'>
            <LogoAtex />
          </a>  
        </S.ContainerAtex>
      </S.ContainerCompanies>  
    </S.ContainerCopyright>  
  )
}
export default Copyright