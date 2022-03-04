import React from 'react'
import { TikTokEmbed as TikTok } from 'react-social-media-embed'

import { Container } from '../styled'
import { TikTokProps } from './types'
import { getTikTokVideoId } from './utils'


export const TikTokEmbed = ({
  amp,
  url,
  ampElementProps,
  elementProps,
  height,
  width,
  mb,
  mt,
  mr,
  ml
}: TikTokProps) => {

  const videoId = getTikTokVideoId(url)
  
  const Amp = () => (
    <amp-tiktok
      data-src={videoId}
      height={height[1]}
      layout='responsive'
      width={width[1]}
      {...ampElementProps}
    />
  )

  const Web = () => (
    <TikTok
      url={videoId}
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

TikTokEmbed.defaultProps = {
  height: ['384px', '384px'],
  mb: 3,
  width: ['100%', '768px'],
}
