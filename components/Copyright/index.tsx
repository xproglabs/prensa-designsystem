import React from 'react'

import LogoAtex from '../../icons/LogoAtex'
import LogoPolopoly from '../../icons/LogoPolopoly'
import LogoXprog from '../../icons/LogoXprog'
import TextItem from './Item'
import * as S from './styled'
import { CopyrightProps } from './types'

const Copyright = ({ 
  bgColor,
  color,
  fontFamily,
  textCompany, 
  textCopyright, 
  textRights 
} : CopyrightProps ) => {
  return (
    <S.ContainerCopyright bgColor={bgColor}>
      <S.ContainerCopyrightBox>
        <S.ContainerCopyrightItems>
          {textCompany &&
            <TextItem
              color={color}
              fontFamily={fontFamily}
              text={textCompany}
            />
          }
          {textCopyright &&
            <TextItem
              color={color}
              fontFamily={fontFamily}
              text={textCopyright}
            />
          }
          {textRights && 
            <TextItem
              color={color}
              fontFamily={fontFamily}
              text={textRights}
            />
          }
        </S.ContainerCopyrightItems>    
        <S.ContainerCompanies>
          <S.ContainerLogo>
            <TextItem
              color={color}
              fontFamily={fontFamily}
              text='Distribuído por'
            />
            <LogoAtex
              href='https://atex.com/'
              target="_blank"
              color={color}
            />
          </S.ContainerLogo>
          <S.ContainerLogo>
            <TextItem
              color={color}
              fontFamily={fontFamily}
              text='Publicado no'
            />
            <LogoPolopoly
              href='https://atex.com/'
              target="_blank"
              color={color}
            />
          </S.ContainerLogo>
          <S.ContainerLogoXprog>
            <TextItem
              color={color}
              fontFamily={fontFamily}
              text='Desenvolvido por'
            />
            <LogoXprog
              href='https://xprog.com.br/'
              target="_blank"
              color={color}
            />
          </S.ContainerLogoXprog>
        </S.ContainerCompanies>
      </S.ContainerCopyrightBox>  
    </S.ContainerCopyright>  
  )
}
export default Copyright