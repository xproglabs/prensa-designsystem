import React from 'react'
import PropTypes from 'prop-types'
import {Container} from './styled'

const FacebookEmbed = ({url, height, width}) => {

  if (!url) {
    console.error('FacebookEmbed LOGGER: missing url')
    return null;
  }

  return (
    <Container $height={height} $width={width}>
      <amp-facebook data-align-center data-href={url} layout='responsive' height='310' width='552' />
    </Container>
  );
};

export const facebook_amp_script = () => (
  <script async custom-element='amp-facebook' src='https://cdn.ampproject.org/v0/amp-facebook-0.1.js'/>
);

FacebookEmbed.defaultProps = {
  height: 'max-content',
  width: '552px'
}

FacebookEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
}

export default FacebookEmbed