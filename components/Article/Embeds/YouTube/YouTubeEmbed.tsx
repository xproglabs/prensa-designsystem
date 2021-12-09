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
      layout='responsive'
      height={height[1]}
      width={width[1]}
      {...ampElementProps}
    />
  )

  const Web = () => (
    <WebYouTube
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
  height: ['max-content', '472px'],
  mb: 3,
  width: ['100%', '720px']
}

export { YouTubeEmbed }