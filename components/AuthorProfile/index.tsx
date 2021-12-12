import { get } from 'lodash'
import { Image } from 'prensa'
import React from 'react'
import styled from 'styled-components'

import * as S from './styled'
import { AuthorProfileProps } from './types'

const Link = styled.a`
  cursor: pointer;
  text-transform: uppercase;
`

const AuthorProfile = ({
  amp = false,
  authorNameProps,
  containerProps,
  date,
  dateTimeProps,
  href,
  image,
  imageWrapProps,
  title,
  titleProps,
  name,
  newsTitle,
  newsTitleHref,
  newsTitleProps
}: AuthorProfileProps) => {

  const image_desktop_url = get(image, 'desktop_path', '')
  const image_mobile_url = get(image, 'mobile_path', '')
  const image_width_desktop = get(image, 'width[0]', '40px')
  const image_height_desktop = get(image, 'height[0]', '40px')
  const image_width_mobile = get(image, 'width[1]', '40px')
  const image_height_mobile = get(image, 'height[1]', '40px')
  const image_title = get(image, 'title', '')

  const AreaLink = ({ children, path }) => {
    if (path && path !== '') {
      return (
        <Link href={path}>
          {children}
        </Link>
      )
    }
    return children
  }
  return (
    <S.Container {...containerProps}>
      {newsTitle &&
        <AreaLink path={newsTitleHref}>
          <S.NewsTitle {...newsTitleProps}>
            {newsTitle}
          </S.NewsTitle>
        </AreaLink>
      }
      <S.Content>
        <AreaLink path={href} >
          <S.ImageWrap {...imageWrapProps}>
            <Image
              amp={amp}
              custom_class='image-with-radius'
              title={image_title}
              layout_desktop={{
                enabled: true,
                height: image_height_desktop,
                width: image_width_desktop,
                path: image_desktop_url,
                type: 'responsive'
              }}
              layout_mobile={{
                enabled: true,
                height: image_height_mobile,
                width: image_width_mobile,
                path: image_mobile_url,
                type: 'responsive'
              }}
            />
          </S.ImageWrap>
        </AreaLink>
        <S.TitleWrapper>
          {title &&
            <AreaLink path={href}>
              <S.Title {...titleProps}>
                {title}
              </S.Title>
            </AreaLink>
          }
          {name &&
            <S.AuthorName {...authorNameProps}>
              {name}
            </S.AuthorName>
          } 
          {date &&
            <S.DateTime {...dateTimeProps}>
              {date}
            </S.DateTime>
          }     
        </S.TitleWrapper>
      </S.Content>
    </S.Container>
  )
}

export default AuthorProfile
