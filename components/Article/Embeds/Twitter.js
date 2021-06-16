import PropTypes from 'prop-types';
import React from 'react';

import {Container} from './styled';

const TwitterEmbed = ({url, height, width}) => {

  if (!url) {
    console.error('TwitterEmbed LOGGER: missing tweet id');
    return null;
  }

  return (
    <Container $height={height} $width={width}>
      <amp-twitter data-tweetid={url} layout='responsive' height='472' width='552' />
    </Container>
  );
};

export const twitter_amp_script = () => (
  <script
    async
    custom-element='amp-twitter'
    src='https://cdn.ampproject.org/v0/amp-twitter-0.1.js'
  />
);

TwitterEmbed.defaultProps = {
  height: 'max-content',
  width: '100%'
};

TwitterEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default TwitterEmbed;