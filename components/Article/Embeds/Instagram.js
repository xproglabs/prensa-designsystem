import PropTypes from 'prop-types'
import React from 'react'

import { Container } from './styled'

const InstagramEmbed = ({ url, height, width }) => {

  if (!url) {
    console.error('InstagramEmbed LOGGER: missing url')
    return null
  }

  const parsedPrefix = url.split('instagram.com/p/')
  if (!parsedPrefix[1]) return null
  const parsedSufix = parsedPrefix[1] && parsedPrefix[1].split('/')
  const dataShortcode = parsedSufix[0] ? parsedSufix[0] : parsedPrefix[1]

  return (
    <Container $height={height} $width={width}>
      <amp-instagram data-captioned data-shortcode={dataShortcode} layout='responsive' height='552' width='552' />
    </Container>
  )
}

export const instagram_amp_script = () => (
  <script async custom-element='amp-instagram' src='https://cdn.ampproject.org/v0/amp-instagram-0.1.js'/>
)

InstagramEmbed.defaultProps = {
  height: 'max-content',
  width: '552px'
}

InstagramEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
}

export default InstagramEmbed