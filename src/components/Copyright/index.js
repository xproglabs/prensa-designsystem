import LogoAtex from 'assets/LogoAtex'
import LogoXprog from 'assets/LogoXprog'
import { map } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import * as S from '../styled'
import TextItem from './item'

const Copyright = ({ color, text }) => {
  return (
    <S.ContainerCopyright>
      <S.ContainerCopyrightItems>
        <TextItem color={color} text={text} />
      </S.ContainerCopyrightItems>    
      <S.ContainerCompanies>
        <S.ContainerXprog>
          <TextItem text={text} />
          <a href='https://xprog.com.br' target='_blank' rel='noreferrer' aria-label='Marca da Xprog'>
            <LogoXprog />
          </a>  
        </S.ContainerXprog>
        <S.ContainerAtex>
          <TextItem color={color} text={text}></TextItem>
          <a href='https://www.atex.com' target='_blank' rel='noreferrer' aria-label='Marca da Atex'>
            <LogoAtex />
          </a>  
        </S.ContainerAtex>
      </S.ContainerCompanies>  
    </S.ContainerCopyright>  
  )
}
export default withTheme(Copyright)