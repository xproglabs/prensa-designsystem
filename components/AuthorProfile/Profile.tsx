import { get } from 'lodash'
import { Block, Image, parseImagePath } from 'prensa'
import React from 'react'

import Link from '../Link'
import * as S from './styled'
import { AuthorProfileProps } from './types'

const TeaserProfile = ({
  amp = false,
  authorNameProps,
  className,
  containerProps,
  domain,
  href,
  image,
  imageWrapProps,
  subtitleContainer,
  title,
  titleProps,
  name,
}: AuthorProfileProps) => {

  const image_desktop_policy = get(image, 'desktop_path', '')
  const image_mobile_policy = get(image, 'mobile_path', '')
  
  const image_desktop_url = parseImagePath('1x1', domain, image_desktop_policy, 40)
  const image_mobile_url = parseImagePath('1x1', domain, image_mobile_policy, 40)

  const image_width_desktop = get(image, 'width[0]', '40px')
  const image_height_desktop = get(image, 'height[0]', '40px')
  const image_width_mobile = get(image, 'width[1]', '40px')
  const image_height_mobile = get(image, 'height[1]', '40px')
  const image_title = get(image, 'title', '')

  return (
    <S.ResponsiveWrap className={className}>
      <S.Content {...containerProps}>
        <Link path={href}>
          <S.ImageWrap
            {...imageWrapProps}
            mr={1}>
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
        </Link>
        <S.TitleWrapper>
          {title &&
            <Block
              alignx='left'
              align='row'
              width='100%'>
              <Link path={href}>
                <S.Title {...titleProps}>
                  {title}
                </S.Title>
              </Link>
            </Block>
          }
          {name &&
            <S.AuthorName {...authorNameProps}>
              {name}
            </S.AuthorName>
          } 
          {subtitleContainer && subtitleContainer()}
        </S.TitleWrapper>
      </S.Content>
    </S.ResponsiveWrap>
  )
}

export default TeaserProfile
