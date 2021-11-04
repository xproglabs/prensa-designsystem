import React from 'react'
import * as S from './styled'
import { ContainerProps } from './types'
import Image from '../Image'

import IcBioFacebook from '../../icons/IcBioFacebook'
import IcBioInstagram from '../../icons/IcBioInstagram'
import IcBioLinkedin from '../../icons/IcBioLinkedin'
import IcBioTwitter from '../../icons/IcBioTwitter'

const AuthorBio = ({
  authorBio,
  authorBioColor,
  authorTitleColor, 
  authorTitle,
  b,
  bgColor,
  borderColor,
  columnTitle,
  columnTitleColor,
  fontSizeAuthor,
  fontSizeBio,
  fontSizeColumn,
  fontWeightAuthor,
  fontWeightBio,
  fontWeightColumn,
  mb
}: ContainerProps) => {
  return(
    <S.Container
      b={b}
      bgColor={bgColor}
      borderColor={borderColor}>
      <S.Content>
        <S.ContainerImage>
          <S.ContentImage>
            <Image 
            amp={false} 
            custom_class='image-with-radius'
            title='Autor'
            layout_desktop={{ 
              enabled: true,
              height: '104px',
              width: '104px',
              path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
              type: 'responsive'
            }}
            layout_mobile={{
              enabled: true,
              height: '80px',
              width: '80px',
              path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
              type: 'responsive'
            }} />
          </S.ContentImage>
        </S.ContainerImage>  
        <S.ContainerTitles>
          <S.ContainerCenter>
            <S.ColumnTitle
            color={columnTitleColor}
            fontSize={fontSizeColumn}
            fontWeight={fontWeightColumn}
            mb={mb}>
            {columnTitle}
            </S.ColumnTitle>
          </S.ContainerCenter> 
          <S.ContainerCenter> 
            <S.AuthorTitle
              color={authorTitleColor}
              fontSize={fontSizeAuthor}
              fontWeight={fontWeightAuthor}>
              {authorTitle}
            </S.AuthorTitle>
            <S.AuthorBio
              color={authorBioColor}
              fontSize={fontSizeBio}
              fontWeight={fontWeightBio}>
              {authorBio}
            </S.AuthorBio>
          </S.ContainerCenter> 
          <S.ContainerCenter>
            <S.ContainerMedias>
              <IcBioFacebook />
              <IcBioInstagram />
              <IcBioLinkedin />
              <IcBioTwitter />
            </S.ContainerMedias>  
          </S.ContainerCenter> 
        </S.ContainerTitles>
      </S.Content> 
    </S.Container>
  )
}

AuthorBio.defaultProps = {
  authorBio: 'Mineiro de Muriaé, Leandro Mazzini é jornalista pós-graduado em Ciência Política pela UnB e escritor reportagem@colunaesplanada.com.br',
  authorBioColor: 'neutral2',
  authorTitle: 'Aldecir Xavier',
  authorTitleColor: 'neutral2',
  b: '1px',
  bgColor: 'white',
  borderColor: 'neutral9',
  columnTitle: 'Preto no Branco',
  columnTitleColor: 'neutral2',
  fontSizeAuthor: '14px',
  fontSizeBio: '12px',
  fontSizeColumn: '18px',
  fontWeightAuthor: '700',
  fontWeightBio: '400',
  fontWeightColumn: '700',
  mb: 1,
  radius: 'circle',
}

export default AuthorBio
