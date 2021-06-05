import PropTypes from 'prop-types';
import React from 'react';

import {Container} from './styled';

const parseYoutubeLink = url => {
  let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  let match = url.match(regExp);
  return (match && match[7].length == 11) ? match[7] : false;
};

const YouTubeEmbed = ({url, height, width}) => {

  if (!url) {
    console.error('YouTubeEmbed LOGGER: missing url');
    return null;
  }

  const parsedUrl = parseYoutubeLink(url);

  return (
    <Container $height={height} $width={width}>
      <amp-youtube data-videoid={parsedUrl} height={height} layout='responsive' width={width} />
    </Container>
  );
};

export const youtube_amp_script = () => (
  <script async custom-element='amp-youtube' src='https://cdn.ampproject.org/v0/amp-youtube-0.1.js'/>
);

YouTubeEmbed.defaultProps = {
  height: '270px',
  width: '552px'
};

YouTubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default YouTubeEmbed;