import { Image } from 'prensa'
import React from 'react'

import { IcBioFacebook } from './IcBioFacebook'
import { IcBioInstagram } from './IcBioInstagram'
import { IcBioLinkedin } from './IcBioLinkedin'
import { IcBioTwitter } from './IcBioTwitter'
import * as S from './styled'
import { ContainerProps } from './types'

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
  containerProps,
  hasFacebook,
  hasInstagram,
  hasLinkedin,
  hasTwitter
}: ContainerProps) => {

  const SocialMediaInfo = () => {
    return (
      <S.ContainerMedias>
        {hasFacebook && <IcBioFacebook />}
        {hasInstagram && <IcBioInstagram />}
        {hasLinkedin && <IcBioLinkedin />}
        {hasTwitter && <IcBioTwitter />}
      </S.ContainerMedias>
    )
  }
  return (
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
              }}
            />
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
          <SocialMediaInfo />
        </S.ContainerTitles>
      </S.Content>
    </S.Container>
  )
}

export { AuthorBio }
