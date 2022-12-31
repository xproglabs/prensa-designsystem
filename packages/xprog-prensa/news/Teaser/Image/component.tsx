import React from 'react'

import { useLink } from '../../../hooks'
import * as S from './styles'
import * as t from './types'

const Image: React.FC<t.ImageProps> = ({
  alt,
  css,
  customProps,
  derivative,
  image,
  imageHref,
  imageLink,
  imageLinkProps,
  wrapImage
}) => {
  const aspectRatio =
    derivative === '1x1' ? 1 / 1
      : derivative === '2x1' ? 2 / 1
        : derivative === '3x1' ? 3 / 1
          : derivative === '3x2' ? 3 / 2
            : derivative === '1x2' ? 1 / 2
              : derivative === '1x3' ? 1 / 3
                : derivative === '2x3' ? 2 / 3
                  : css?.aspectRatio

  const imageUrl = image?.url?.endsWith('?') ? `${image?.url}f=${derivative}` : `${image?.url}&f=${derivative}`
  const imageParsed = { ...image, url: imageUrl }
  return (
    <S.ImageContainer
      css={{
        ...css,
        aspectRatio: aspectRatio
      }}
      customProps={customProps}
    >
      {useLink(
        {
          title: alt,
          href: imageHref,
          component: imageLink,
          ...imageLinkProps
        },
        <S.ImageWrap
          image={imageParsed}
          wrapImage={wrapImage}
        />
      )}
    </S.ImageContainer>
  )
}

export { Image }
