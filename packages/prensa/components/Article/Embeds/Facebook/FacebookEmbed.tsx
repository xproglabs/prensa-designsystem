import React from 'react'

import { Container } from '../styled'
import { FacebookEmbedProps } from './types'

const FacebookEmbed = ({
  amp,
  ampElementProps,
  elementProps,
  fbappid,
  height,
  mb,
  ml,
  mr,
  mt,
  url,
  width
}: FacebookEmbedProps) => {

  if (!url) {
    console.error('Prensa | FacebookEmbed > missing url')
    return null
  }

  const Amp = () => (
    <amp-facebook
      data-href={url}
      layout='responsive'
      height='472px'
      width={width[1]}
      {...ampElementProps}
    />
  )

  return (
    <Container
      $height={height}
      $width={width}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    >
      {amp ? <Amp /> : <></>}
    </Container>
  )
}

FacebookEmbed.defaultProps = {
  height: ['max-content', 'max-content'],
  mb: 3,
  width: ['100%', '552px']
}

export { FacebookEmbed }