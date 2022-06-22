import { get } from 'lodash'
import { Image } from 'prensa'
import React from 'react'

import Link from '../Link'
import Block from '../NewBlock'
import { IcBioFacebook } from './IcBioFacebook'
import { IcBioInstagram } from './IcBioInstagram'
import { IcBioLinkedin } from './IcBioLinkedin'
import { IcBioTwitter } from './IcBioTwitter'
import { IcEmail } from './IcEmail'
import { AuthorBioProps } from './props'
import {
  Bio,
  Container,
  ContentWrap,
  Email,
  Name,
  ImageContainer,
  ImageWrap,
  Position,
  TextWrap,
  SocialMediasWrap,
  Title,
} from './styled'

const AuthorBio = ({
  amp,
  bio,
  bioProps,
  containerProps,
  email,
  emailProps,
  href,
  imagePath,
  imageProps,
  name,
  nameProps,
  position,
  positionProps,
  title,
  titleProps,
  emailUrl,
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
          {email &&
            <Email {...emailProps}>
              {email}
            </Email>
          }
          {name &&
            <Name {...nameProps}>
              {name}
            </Name>
          }
          {position &&
            <Position {...positionProps}>
              {position}
            </Position>
          }
          {bio &&
            <Bio {...bioProps}>
              {bio}
            </Bio>
          }
          <SocialMediasWrap>
            {emailUrl && <IcEmail href={`mailto:${emailUrl}`} />}
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
