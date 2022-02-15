import React from 'react'
import WebYouTube from 'react-youtube'

import { Container } from '../styled'
import { YouTubeEmbedProps } from './types'
import { getYoutubeVideoId, getYoutubePlaylistId } from './utils'

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

  let opts = {}
  let videoId = getYoutubeVideoId(url)
  if (url.includes('list=')) {
    const playlistId = getYoutubePlaylistId(url)
    opts = {
      playerVars: {
        listType: 'playlist',
        list: playlistId,
      }
    }
    videoId = null
  }

  const Amp = () => {
    // if url.includes('list=') return amp-iframe if not, return amp-youtube
    if (url.includes('list=')) {
      return (
        <amp-iframe
          {...ampElementProps}
          layout='responsive'
          src={url}
          height='200'
          width='300'
        />
      )
    } else {
      return (
        <amp-youtube
          data-videoid={videoId}
          layout='responsive'
          height={height[1]}
          width={width[1]}
          {...ampElementProps}
        />
      )
    }
  }

  const Web = () => (
    <WebYouTube
      className='Prensa-YouTubeEmbed-web'
      videoId={videoId}
      {...elementProps}
      opts={opts}
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

YouTubeEmbed.defaultProps = {
  height: ['384px', '384px'],
  mb: 3,
  width: ['100%', '768px']
}

export { YouTubeEmbed }