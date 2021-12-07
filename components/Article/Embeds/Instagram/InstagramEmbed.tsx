import React from 'react'
import Instagram from 'react-instagram-embed'

import { Container } from '../styled'
import { InstagramEmbedProps } from './types'
import { getInstagramShortcode } from './utils'

const InstagramEmbed = ({
  amp,
  height,
  mb,
  ml,
  mr,
  mt,
  url,
  width
}: InstagramEmbedProps) => {
  
  if (!url) {
    console.error('Prensa | InstagramEmbed > missing url')
    return null
  }

  const dataShortcode = getInstagramShortcode(url)

  const Amp = () => (
    <amp-instagram
      data-captioned
      data-shortcode={dataShortcode}
      layout='responsive'
      height='552'
      width='552'
    />
  )

  const Web = () => (
    <Instagram
      className="Prensa-Instagram-web" 
      url={dataShortcode}
      clientAccessToken="" // prop obrigatória, mas não precisa ser preenchida
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
      {amp ? <Amp /> : <Web />}
    </Container>
  )
}

InstagramEmbed.defaultProps = {
  height: ['max-content', '360px'],
  mb: 3,
  width: ['100%', '720px']
}

export { InstagramEmbed }