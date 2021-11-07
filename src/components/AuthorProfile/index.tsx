import { get } from 'lodash'
import { Image } from 'prensa'
import React from 'react'

import * as S from './styled'
import { AuthorProfileProps } from './types'

const AuthorProfile = ({
  amp = false,
  authorTitle,
  columnTitle,
  containerProps,
  image,
  titleProps,
  titleAuthorProps,
  newsTitle,
  newsTitleProps
}: AuthorProfileProps) => {

  const image_desktop_url = get(image, 'desktop_path', '')
  const image_mobile_url = get(image, 'mobile_path', '')
  const image_width_desktop = get(image, 'width[0]', '40px')
  const image_height_desktop = get(image, 'height[0]', '40px')
  const image_width_mobile = get(image, 'width[1]', '40px')
  const image_height_mobile = get(image, 'height[1]', '40px')
  const image_title = get(image, 'title', '')

  return (
    <S.Container {...containerProps}>
      {newsTitle &&
        <S.NewsTitle {...newsTitleProps}>
          {newsTitle}
        </S.NewsTitle>
      }
      <S.Content>
        <S.ImageWrap>
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
        <S.TitleWrapper>
          <S.Title {...titleProps}>
            {columnTitle}
          </S.Title>
          <S.TitleAuthor {...titleAuthorProps}>
            {authorTitle}
          </S.TitleAuthor>
        </S.TitleWrapper>
      </S.Content>
    </S.Container>
  )
}

export default AuthorProfile
