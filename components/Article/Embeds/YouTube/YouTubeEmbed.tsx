import React from 'react'
import WebYouTube from 'react-youtube'

import { Container } from '../styled'
import { YouTubeEmbedProps } from './types'
import { getYoutubeVideoId } from './utils'


const YouTubeEmbed = ({
  amp,
  ampElementProps,
  elementProps,
  height,
  mt,
  mr,
  mb,
  ml,
  url,
  width,
}: YouTubeEmbedProps) => {

  if (!url) {
    console.error('Prensa | YouTubeEmbed > missing url')
    return null
  }

  const videoId = getYoutubeVideoId(url)

  const Amp = () => (
    <amp-youtube
      data-videoid={videoId}
      height={height[1]}
      layout='responsive'
      width={width[1]}
      {...ampElementProps}
    />
  )

  const Web = () => (
    <WebYouTube
      className='Prensa-YouTubeEmbed-web'
      videoId={videoId}
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

YouTubeEmbed.defaultProps = {
  height: ['360px', '472px'],
  mb: 3,
  width: ['100%', '720px']
}

export { YouTubeEmbed }