import React from 'react'

import { FacebookProvider, EmbeddedPost } from 'react-facebook'
import { Container } from './styles'
import { FacebookEmbedProps } from './types'

const FacebookEmbed = ({ amp, url, height, mb, ml, mr, mt, width }: FacebookEmbedProps) => {
  if (!url) {
    return null
  }

  const Amp = () => (
    <amp-facebook data-tweetid={url} layout='responsive' height='472' width='552' />
  )

  const Web = () => (
    <FacebookProvider appId="123456789">
      <EmbeddedPost href={url} width="500" />
   </FacebookProvider>
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

FacebookEmbed.defaultProps = {
  height: ['max-content', '360px'],
  mb: 3,
  width: ['100%', '720px']
}

export default FacebookEmbed