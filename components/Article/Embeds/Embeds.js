import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';

export const FacebookEmbed = ({
  amp,
  value
}) => {
  if(!amp)
    return false;
  return (
    <Block width='100%'>
      <amp-facebook
        data-align-center data-href={value}
        layout="responsive"
        height="310"
        width="552">
      </amp-facebook>
    </Block>
  );
};
FacebookEmbed.propTypes = {
  amp: PropTypes.bool,
  value: PropTypes.string
};

export const InstagramEmbed = ({
  amp,
  value
}) => {
  if(!amp)
    return false;
  const parsedPrefix = value.split('instagram.com/p/');
  if (!parsedPrefix[1]) return null;
  const parsedSufix = parsedPrefix[1] && parsedPrefix[1].split('/');
  const dataShortcode = parsedSufix[0] ? parsedSufix[0] : parsedPrefix[1];
  return (
    <Block width='100%'>
      <amp-instagram
        data-captioned
        data-shortcode={dataShortcode}
        layout="responsive"
        height="400"
        width="400">
      </amp-instagram>
    </Block>
  );
};
InstagramEmbed.propTypes = {
  amp: PropTypes.bool,
  value: PropTypes.string
};


export const TwitterEmbed = ({
  amp,
  value
}) => {
  if(!amp)
    return false;
  return (
    <Block width='100%'>
      <amp-twitter
        data-tweetid={value}
        layout="responsive"
        height="472"
        width="552">
      </amp-twitter>
    </Block>
  );
};
TwitterEmbed.propTypes = {
  amp: PropTypes.bool,
  value: PropTypes.string
};

export const YoutubeEmbed = ({
  amp,
  height = '270',
  width = '552',
  value,
}) => {
  const parseYoutubeLink = url => {
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  };
  const parsedValue = parseYoutubeLink(value);
  if(!amp) {
    return (
      <Block 
        custom={`
          overflow: hidden;
          padding-bottom: 56.25%;
          position: relative;
          height: 0;
          & > iframe {
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            position: absolute;
          }
        `}
        mb={3} 
        width='100%'>
        <iframe
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          height="480"
          src={`https://www.youtube.com/embed/${parsedValue}`}
          title="Embedded youtube"
          width="853"
        />
      </Block>
    );
  }
  return (
    <Block width='100%'>
      <amp-youtube
        data-videoid={parsedValue}
        height={height}
        layout="responsive"
        width={width}>
      </amp-youtube>
    </Block>
  );
};
YoutubeEmbed.propTypes = {
  amp: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.string
};