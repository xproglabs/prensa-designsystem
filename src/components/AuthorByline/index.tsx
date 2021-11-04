import React from 'react'
import Block from '../Block'
import * as S from './styled'
import { ContainerProps } from './types'
import Image from '../Image'
import Byline from '../Article/Byline/Byline'

const AuthorByline = ({
  newsTitle,
  newsTitleColor,
  b,
  bgColor,
  borderColor,
  columnTitle,
  columnTitleColor,
  fontSizeNews,
  fontSizeColumn,
  fontWeightNews,
  fontWeightColumn,
  mb,
  newsTitleMargin,
  radius
}: ContainerProps) => {
  return(
    <S.Container
      b={b}
      bgColor={bgColor}
      borderColor={borderColor}>
      <S.NewsTitle
        {...newsTitleMargin}
        color={newsTitleColor}
        fontSize={fontSizeNews}
        fontWeight={fontWeightNews}>
        {newsTitle}
      </S.NewsTitle>
      <S.Content>
        <S.ContentImage>
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
          }} />
        </S.ContentImage>
        <S.ContainerTitles>
          <Block>
            <S.ColumnTitle
            color={columnTitleColor}
            fontSize={fontSizeColumn}
            fontWeight={fontWeightColumn}
            mb={mb}>
            {columnTitle}
            </S.ColumnTitle>
          </Block>
          <Byline
            content={{
              mb: ['0px', '0px']
            }}
            dateline={{
              mb: ['0px', '0px']
            }}
          />
        </S.ContainerTitles>
      </S.Content> 
    </S.Container>
  )
}

AuthorByline.defaultProps = {
  authorTitle: 'Aldecir Xavier',
  authorTitleColor: 'neutral5',
  b: '1px',
  bgColor: 'white',
  borderColor: 'neutral9',
  columnTitle: 'Preto no Branco',
  columnTitleColor: 'neutral2',
  fontSizeNews: '20px',
  fontSizeAuthor: '14px',
  fontSizeColumn: '14px',
  fontWeightAuthor: '400',
  fontWeightColumn: '700',
  fontWeightNews: '900',
  newsTitleMargin: {
    mb: [1, 2],
  },
  newsTitle: 'Conspiração',
  newsTitleColor: 'black',
  radius: 'circle'
}

export default AuthorByline
