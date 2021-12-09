import React from 'react'
import { Tweet } from 'react-twitter-widgets'

import { Container } from '../styled'
import { TwitterEmbedProps } from './types'
import { getTweetId } from './utils'

const TwitterEmbed = ({
  amp,
  ampElementProps,
  elementProps,
  height,
  mb,
  ml,
  mr,
  mt,
  url,
  width
}: TwitterEmbedProps) => {

  if (!url) {
    console.error('Prensa | TwitterEmbed > missing url')
    return null
  }

  const tweetId = getTweetId(url)

  const Amp = () => (
    <amp-twitter
      data-tweetid={tweetId}
      layout='responsive'
      height='472px'
      width={width[1]}
      {...ampElementProps}
    />
  )

  const Web = () => (
    <Tweet
      tweetId={tweetId}
      options={{ align: 'center' }}
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
      {amp ? <Amp /> : <Web />}
    </Container>
  )
}

TwitterEmbed.defaultProps = {
  height: ['max-content', 'max-content'],
  mb: 3,
  width: ['100%', '552px']
}

export { TwitterEmbed }