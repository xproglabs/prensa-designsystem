import React from 'react'
import Block from '../Block'
import * as S from './styled'
import { ContainerProps } from './types'
import Image from '../Image'

const AuthorProfile = ({
  authorTitleColor, 
  authorTitle,
  b,
  bgColor,
  borderColor,
  columnTitle,
  columnTitleColor,
  fontSizeAuthor,
  fontSizeColumn,
  fontWeightAuthor,
  fontWeightColumn,
  mb,
  radius
}: ContainerProps) => {
  return(
    <S.Container
      b={b}
      bgColor={bgColor}
      borderColor={borderColor}>
      <S.Content>
        <Image 
        amp={false} 
        title='Autor'
        layout_desktop={{ 
          enabled: true,
          height: '40px',
          width: '40px',
          path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
          type: 'fixed'
        }}
        layout_mobile={{
          enabled: true,
          height: '40px',
          width: '40px',
          path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
          type: 'fixed'
        }} />
        <S.ContainerTitles>
          <Block mb={1}>
            <S.ColumnTitle
            color={columnTitleColor}
            fontSize={fontSizeColumn}
            fontWeight={fontWeightColumn}
            mb={mb}>
            {columnTitle}
            </S.ColumnTitle>
          </Block>
          <S.AuthorTitle
            color={authorTitleColor}
            fontSize={fontSizeAuthor}
            fontWeight={fontWeightAuthor}>
            {authorTitle}
          </S.AuthorTitle>
        </S.ContainerTitles>
      </S.Content> 
    </S.Container>
  )
}

AuthorProfile.defaultProps = {
  authorTitle: 'Aldecir Xavier',
  authorTitleColor: 'neutral5',
  b: '1px',
  bgColor: 'white',
  borderColor: 'neutral9',
  columnTitle: 'Preto no Branco',
  columnTitleColor: 'neutral2',
  fontSizeAuthor: '14px',
  fontSizeColumn: '16px',
  fontWeightColumn: '700',
  fontWeightAuthor: '400',
  mb: 1,
  radius: 'circle'
}

export default AuthorProfile
