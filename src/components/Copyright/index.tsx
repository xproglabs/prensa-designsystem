import React from 'react'
import styled from 'styled-components'

import LogoAtex from '../../icons/LogoAtex'
import LogoXprog from '../../icons/LogoXprog'
import TextItem from './Item'
import * as S from './styled'
import { CopyrightProps } from './types'

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`

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
          <Link href='https://xprog.com.br/' target="_blank" title='Site xProg'> 
            <S.ContainerXprog>
              <TextItem color={color} text={textXprog} />
              <LogoXprog />
            </S.ContainerXprog>
          </Link>
          <Link href='https://atex.com/' target="_blank" title='Site Atex'>
            <S.ContainerAtex>
              <TextItem color={color} text={textAtex} />
              <LogoAtex />
            </S.ContainerAtex>
          </Link>
        </S.ContainerCompanies>
      </S.ContainerCopyrightBox>  
    </S.ContainerCopyright>  
  )
}
export default Copyright