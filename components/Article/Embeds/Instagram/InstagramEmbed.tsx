import React from 'react'
import Instagram from 'react-instagram-embed'

import { Container } from '../styled'
import { InstagramEmbedProps } from './types'
import { getInstagramShortcode } from './utils'

const InstagramEmbed = ({
  amp,
  ampElementProps,
  elementProps,
  clientToken,
  fbappid,
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
  const accessToken = `${fbappid}|${clientToken}`

  const Amp = () => (
    <amp-instagram
      data-captioned
      data-shortcode={dataShortcode}
      layout='responsive'
      height={width[1]}
      width={width[1]}
      {...ampElementProps}
    />
  )

  const Web = () => (
    <Instagram
      url={url}
      clientAccessToken={accessToken}
      {...elementProps}
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
      {amp ? <Amp/> : <Web/>}
    </Container>
  )
}

InstagramEmbed.defaultProps = {
  height: ['max-content', 'max-content'],
  mb: 3,
  width: ['100%', '552px']
}

export { InstagramEmbed }