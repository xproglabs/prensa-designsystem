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
  authorBioProps,
  authorTitle,
  authorTitleProps,
  b,
  bgColor,
  borderColor,
  columnTitle,
  columnTitleProps,
  containerProps
}: ContainerProps) => {
  return(
    <S.Container {...containerProps}>
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
            <S.ColumnTitle {...columnTitleProps}>
            {columnTitle}
            </S.ColumnTitle>
          </S.ContainerCenter> 
          <S.ContainerCenter> 
            <S.AuthorTitle {...authorTitleProps}>
              {authorTitle}
            </S.AuthorTitle>
            <S.AuthorBio {...authorBioProps}>
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

export default AuthorBio
