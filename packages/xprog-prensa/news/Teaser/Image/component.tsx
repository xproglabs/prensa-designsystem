import React from 'react'

import * as S from './styles'
import * as t from './types'

const Image: React.FC<t.ImageProps> = ({
  children,
  css,
  customProps,
  derivative,
  image,
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
  return (
    <S.ImageContainer
      css={{
        ...css,
        aspectRatio: aspectRatio
      }}
      customProps={customProps}
    >
      <S.ImageFile>
        {image || children}
      </S.ImageFile>
    </S.ImageContainer>
  )
}

export { Image }
