import React from 'react'
import Instagram from 'react-instagram-embed'

import { Container } from './styles'
import { InstagramEmbedProps } from './types'

const InstagramEmbed = ({ amp, url, height, mb, ml, mr, mt, width }: InstagramEmbedProps) => {
  const parsedPrefix = url.split('instagram.com/p/')
  if (!parsedPrefix[1]) return null
  const parsedSufix = parsedPrefix[1] && parsedPrefix[1].split('/')
  const dataShortcode = parsedSufix[0] ? parsedSufix[0] : parsedPrefix[1]

  if (!url) return null

  const Web = () => (
    <Instagram
      className="Prensa-Instagram-web" 
      url={url}
      clientAccessToken="" // prop obrigatória, mas não precisa ser preenchida
    />
  )

  const Amp = () => (
    <amp-instagram data-captioned data-shortcode={dataShortcode} layout='responsive' height='552' width='552' />
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

export default InstagramEmbed