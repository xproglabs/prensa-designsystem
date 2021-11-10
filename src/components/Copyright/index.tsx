import React from 'react'

import LogoAtex from '../../icons/LogoAtex'
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
  textRights, 
  textXprog, 
  textAtex 
} : CopyrightProps ) => {
  return (
    <S.ContainerCopyright bgColor={bgColor}>
      <S.ContainerCopyrightBox>
        <S.ContainerCopyrightItems>
          {textCopyright &&
            <TextItem
              color={color}
              fontFamily={fontFamily}
              text={textCopyright}
            />
          }
          {textCompany &&
            <TextItem
              color={color}
              fontFamily={fontFamily}
              text={textCompany}
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
          <S.ContainerXprog>
            <TextItem
              color={color}
              fontFamily={fontFamily}
              text={textXprog}
            />
            <LogoXprog
              href='https://xprog.com.br/'
              target="_blank"
              color={color}
            />
          </S.ContainerXprog>
          <S.ContainerAtex>
            <TextItem
              color={color}
              fontFamily={fontFamily}
              text={textAtex}
            />
            <LogoAtex
              href='https://atex.com/'
              target="_blank"
              color={color}
            />
          </S.ContainerAtex>
        </S.ContainerCompanies>
      </S.ContainerCopyrightBox>  
    </S.ContainerCopyright>  
  )
}
export default Copyright