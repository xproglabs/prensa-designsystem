import React, { useEffect } from 'react'
import { Tweet } from 'react-twitter-widgets'

import { TwitterEmbedContainer } from './styled'
import { TwitterEmbedProps } from './types'

const TwitterEmbed = ({
  amp,
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

  const Web = () => (
    <Tweet
      tweetId='841418541026877441'
      options={{
        align: 'center',
        width: '552px',
        height: '472px',
      }}
    />
  )

  const Amp = () => (
    <amp-twitter
      data-tweetid={url}
      layout='responsive'
      height='472'
      width='552'
    />
  )

  return (
    <TwitterEmbedContainer
      $height={height}
      $width={width}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    >
      {amp ? <Amp /> : <Web />}
    </TwitterEmbedContainer>
  )
}

TwitterEmbed.defaultProps = {
  height: ['max-content', 'max-content'],
  mb: 3,
  width: ['100%', '720px']
}

export { TwitterEmbed }