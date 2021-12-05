import React from 'react'
import { FacebookProvider, EmbeddedPost } from 'react-facebook'

import { Container } from '../styled'
import { FacebookEmbedProps } from './types'

const FacebookEmbed = ({
  amp,
  fbappid,
  height,
  mb,
  ml,
  mr,
  mt,
  url,
  width
}: FacebookEmbedProps) => {

  if (!url) {
    console.error('Prensa | FacebookEmbed > missing url')
    return null
  }

  const Amp = () => (
    <amp-facebook
      data-tweetid={url}
      layout='responsive'
      height='472'
      width='552'
    />
  )

  const Web = () => (
    <FacebookProvider appId={fbappid}>
      <EmbeddedPost href={url} width='500' />
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

export { FacebookEmbed }