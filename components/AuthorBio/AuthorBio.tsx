import { Image } from 'prensa'
import React from 'react'

import { IcBioFacebook } from './IcBioFacebook'
import { IcBioInstagram } from './IcBioInstagram'
import { IcBioLinkedin } from './IcBioLinkedin'
import { IcBioTwitter } from './IcBioTwitter'
import { Bio,
  Container,
  ContentWrap,
  ImageContainer,
  ImageWrap,
  TextWrap,
  SocialMediasWrap,
  Title,
  Name
} from './styled'

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
}) => {

  const SocialMediaInfo = () => {
    return (
      <SocialMediasWrap>
        {hasFacebook && <IcBioFacebook />}
        {hasInstagram && <IcBioInstagram />}
        {hasLinkedin && <IcBioLinkedin />}
        {hasTwitter && <IcBioTwitter />}
      </SocialMediasWrap>
    )
  }
  
  return (
    <Container {...containerProps}>
      <ContentWrap>
        <ImageContainer>
          <ImageWrap>
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
          </ImageWrap>
        </ImageContainer>
        <TextWrap>
          <Title {...columnTitleProps}>
            {columnTitle}
          </Title>
          <Name {...authorTitleProps}>
            {authorTitle}
          </Name>
          <Bio {...authorBioProps}>
            {authorBio}
          </Bio>
          <SocialMediaInfo />
        </TextWrap>
      </ContentWrap>
    </Container>
  )
}

export { AuthorBio }
