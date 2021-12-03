import React from 'react'
import { Tweet } from 'react-twitter-widgets'

import { Container } from './styles'
import { TwitterEmbedProps } from './types'

const TwitterEmbed = ({ amp, url, height, mb, ml, mr, mt, width }: TwitterEmbedProps) => {
  if (!url) {
    return null
  }

  const Web = () => (
    <Tweet
      options={{
        className:'Prensa-Twitter-web'
      }} 
      tweetId={url}
    />
  )

  const Amp = () => (
    <amp-twitter data-tweetid={url} layout='responsive' height='472' width='552' />
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

TwitterEmbed.defaultProps = {
  height: ['max-content', '360px'],
  mb: 3,
  width: ['100%', '720px']
}

export default TwitterEmbed