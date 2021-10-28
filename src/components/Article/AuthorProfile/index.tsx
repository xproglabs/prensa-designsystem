import React from 'react'
import  Block from '../../Block'
import * as S from './styled'
import { AuthorProfileProps } from './types'

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
  radius
}: AuthorProfileProps) => {
  return(
    <S.Container
      b={b}
      bgColor={bgColor}
      borderColor={borderColor}>
      <S.Content>
        <S.Image radius={radius}>
        </S.Image>
        <S.Titles>
          <Block mb={1}>
            <S.ColumnTitle
            fontWeight={fontWeightColumn}
            color={columnTitleColor}
            fontSize={fontSizeColumn}>
            {columnTitle}
            </S.ColumnTitle>
          </Block>
          <S.AuthorTitle
            color={authorTitleColor}
            fontSize={fontSizeAuthor}
            fontWeight={fontWeightAuthor}>
            {authorTitle}
          </S.AuthorTitle>
        </S.Titles>
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
  radius: 'circle'
}

export default AuthorProfile
