import React from 'react'

import { Container } from '../styled'
import { IframeEmbedProps } from './types'

const IframeEmbed = ({
  amp,
  height,
  mt,
  mr,
  mb,
  ml,
  url,
  width
}: IframeEmbedProps) => {

  if (amp) {
    console.error('Prensa | IframeEmbed > amp not compatible')
    return null
  }

  if (!url) {
    console.error('Prensa | IframeEmbed > url is missed')
    return null
  }

  return (
    <Container
      $height={height}
      $width={width}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    >
      <iframe src={url} height='680px' width='100%' /> 
    </Container>
  )
}

IframeEmbed.defaultProps = {
  mb: 3,
  height: ['680px', '680px'],
  width: ['100%', '768px']
}

export { IframeEmbed }