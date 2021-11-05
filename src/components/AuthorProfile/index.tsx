import { Image } from 'prensa'
import React from 'react'

import * as S from './styled'
import { ContainerProps } from './types'

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
  return (
    <S.Container
      b={b}
      bgColor={bgColor}
      borderColor={borderColor}>
      <S.Content>
        <S.ImageWrap>
          <Image
            amp={false}
            custom_class='image-with-radius'
            title='Autor'
            layout_desktop={{
              enabled: true,
              height: '40px',
              width: '40px',
              path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
              type: 'responsive'
            }}
            layout_mobile={{
              enabled: true,
              height: '40px',
              width: '40px',
              path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
              type: 'responsive'
            }}
          />
        </S.ImageWrap>
        <S.TitleWrap>
          <S.Title
            color={columnTitleColor}
            fontSize={fontSizeColumn}
            fontWeight={fontWeightColumn}
            mb={mb}>
            {columnTitle}
          </S.Title>
          <S.TitleAuthor
            color={authorTitleColor}
            fontSize={fontSizeAuthor}
            fontWeight={fontWeightAuthor}>
            {authorTitle}
          </S.TitleAuthor>
        </S.TitleWrap>
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
