import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Image from '../Image';
import {Paragraph} from '../Typography'
import {parseBody} from './Utils';

const TextBody = ({AdComponent, adsblocks, content, domain, embeds, lazy}) => {
  
  if (!content) return null;
  const bodyItems = parseBody(content);
  
  let ads_p = 0;
  let ads_t = adsblocks.length;
  let count_p = 0;

  const RenderAds = () => {
    ads_p++;
    if(ads_p > ads_t)
      return false;
    return <AdComponent content={adsblocks[ads_p - 1]} />;
  };

  const RenderImage = ({value}) => {
    return (
      <Block custom="article-image-embed" mb="3">
        <Image custom="image-article" content={value} domain={domain} lazy={lazy} />
      </Block>
    );
  }

  const RenderParagraph = ({value}) => {
    let has_ads = false;
    count_p++;
    if(count_p === 2) {
      count_p = 0;
      has_ads = true;
    }
    return (
      <>
        <Paragraph>{value}</Paragraph>
        {has_ads && <RenderAds />}
      </>
    );
  };

  return map(bodyItems, ({type, value}, key) => {
    switch(type) {
      case 'Paragraph': 
        return <RenderParagraph key={key} value={value} />;
      case 'Facebook':
        return embeds && embeds.Facebook && <embeds.Facebook key={key} value={value} />;
      case 'GoogleForm': 
        return embeds && embeds.GoogleForm && <embeds.GoogleForm key={key} value={value} />;
      case 'Image':
      case 'ImageLegacy':
        return <RenderImage key={key} value={value} />;
      case 'Instagram':
        return embeds && embeds.Instagram && <embeds.Instagram key={key} value={value} />;
      case 'Tweet':
        return embeds && embeds.Tweet && <embeds.Tweet key={key} value={value} />;
      case 'Youtube':
        return embeds && embeds.Youtube && <embeds.Youtube key={key} value={value} />;
    }
  });
};

TextBody.propTypes = {
  AdComponent: PropTypes.func,
  adsblocks: PropTypes.array,
  content: PropTypes.string.isRequired,
  domain: PropTypes.string,
  embeds: PropTypes.object
};

TextBody.defaultProps = {
  content: {}
};

export default TextBody;
