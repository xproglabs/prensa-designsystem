import { get } from 'lodash'
import { Image } from 'prensa'
import React from 'react'

import Link from '../Link'
import Block from '../NewBlock'
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
  href,
  imagePath,
  imageProps,
  name,
  nameProps,
  title,
  titleProps,
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  twitterUrl
}: AuthorBioProps) => {

  const imageSize = get(imageProps, 'size', ['80px', '104px'])

  return (
    <Container {...containerProps}>
      <ContentWrap>
        <ImageContainer>
          <Link path={href}>
            <ImageWrap {...imageProps}>
              <Image
                amp={amp}
                custom_class='image-with-radius'
                title={name}
                layout_desktop={{
                  enabled: true,
                  height: imageSize[1],
                  width: imageSize[1],
                  path: imagePath,
                  type: 'responsive'
                }}
                layout_mobile={{
                  enabled: true,
                  height: imageSize[0],
                  width: imageSize[0],
                  path: imagePath,
                  type: 'responsive'
                }}
              />
            </ImageWrap>
          </Link>
        </ImageContainer>
        <TextWrap>
          {title &&
            <Block
              align={['column', 'row']}
              alignx={['center', 'left']}
              mb={1}
              width='100%'
            >
              <Link path={href}>
                <Title {...titleProps}>
                  {title}
                </Title>
              </Link>
            </Block>
          }
          {name &&
            <Name {...nameProps}>
              {name}
            </Name>
          }
          {bio &&
            <Bio {...bioProps}>
              {bio}
            </Bio>
          }
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
