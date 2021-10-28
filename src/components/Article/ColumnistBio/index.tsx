import React from 'react'
import { border } from 'src/styled-system'
import  Block from '../../Block'

import * as S from './styled'
import { ColumnistBioProps } from './types'

 const ColumnistBio = ({
  authorTitleColor, 
  authorTitle,
  bgColor,
  columnTitle,
  columnTitleColor,
  fontSizeAuthor,
  fontSizeColumn,
  fontWeightAuthor,
  fontWeightColumn,
}: ColumnistBioProps) => {
  return(
    <S.Container
      bgColor={bgColor}>
      <S.Content>
        <S.Image>
        </S.Image>
        <S.Titles>
          <Block  mb={1}>
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

ColumnistBio.defaultProps = {
  authorTitle: 'Aldecir Xavier',
  authorTitleColor: 'neutral5',
  bgColor: 'white',
  columnTitle: 'Preto no Branco',
  columnTitleColor: 'neutral2',
  fontSizeAuthor: '14px',
  fontSizeColumn: '16px',
  fontWeightColumn: '700',
  fontWeightAuthor: '400',
}

export default ColumnistBio
