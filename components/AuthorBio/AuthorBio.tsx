import { Image } from 'prensa'
import React from 'react'

import { IcBioFacebook } from './IcBioFacebook'
import { IcBioInstagram } from './IcBioInstagram'
import { IcBioLinkedin } from './IcBioLinkedin'
import { IcBioTwitter } from './IcBioTwitter'
import {
  Bio,
  Container,
  ContentWrap,
  ImageContainer,
  ImageWrap,
  TextWrap,
  SocialMediasWrap,
  Title,
  Name
} from './styled'
import { AuthorBioProps } from './types'

const AuthorBio = ({
  amp,
  bio,
  bioProps,
  containerProps,
  imagePath,
  imageWrapProps,
  name,
  nameProps,
  title,
  titleProps,
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  twitterUrl
}: AuthorBioProps) => {
  return (
    <Container {...containerProps}>
      <ContentWrap>
        <ImageContainer>
          <ImageWrap {...imageWrapProps}>
            <Image
              amp={amp}
              custom_class='image-with-radius'
              title={name}
              layout_desktop={{
                enabled: true,
                height: '104px',
                width: '104px',
                path: imagePath,
                type: 'responsive'
              }}
              layout_mobile={{
                enabled: true,
                height: '80px',
                width: '80px',
                path: imagePath,
                type: 'responsive'
              }}
            />
          </ImageWrap>
        </ImageContainer>
        <TextWrap>
          <Title {...titleProps}>
            {title}
          </Title>
          <Name {...nameProps}>
            {name}
          </Name>
          <Bio {...bioProps}>
            {bio}
          </Bio>
          <SocialMediasWrap>
            {facebookUrl && <IcBioFacebook href={facebookUrl} />}
            {instagramUrl && <IcBioInstagram href={instagramUrl} />}
            {linkedinUrl && <IcBioLinkedin href={linkedinUrl} />}
            {twitterUrl && <IcBioTwitter href={twitterUrl} />}
          </SocialMediasWrap>
        </TextWrap>
      </ContentWrap>
    </Container>
  )
}

export { AuthorBio }
