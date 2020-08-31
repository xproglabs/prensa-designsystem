import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {pathToImage} from '../Util/pathToImage';

const Image = ({content, custom, domain, lazy, placeholder}) => {
  let img_placeholder = placeholder || null;
  if(content['image-contentId']) {
    let policy_id = content['image-contentId'];
    let derivative = '2x1';
    let width = 1000;
    content['image-path'] = pathToImage(derivative, domain, policy_id, width);
    img_placeholder = img_placeholder || pathToImage(derivative, domain, policy_id, 10);
  }
  if(content['image-legacy']) {
    content['image-path'] = content['image-legacy'];
    content['image-subtitle'] = 'Imagem importada do sistema legado / Reprodução';
    img_placeholder = '';
  }
  if(content['image-path']) {
    let content_path = content['image-path'];
    if(lazy) {
      content_path = lazy(content_path, img_placeholder);
    }
    const byline = !content['image-byline'] || content['image-byline'] == 'undefined' ? null : content['image-byline'];
    const caption_byline = content['image-subtitle'] ? 
      `${content['image-subtitle']}${byline ? ` (${byline})` : ''}`: 
      `${content['image-subtitle-original']}${byline ? ` (${byline})` : ''}`;
      
    return (
      <Block custom={`image-box ${custom}`} w="100p">
        <img alt={caption_byline ? caption_byline : 'Reprodução'} src={content_path} />
        <Block custom='label'>{caption_byline}</Block>
      </Block>
    );
  }
  return <pre>no-image</pre>;
};

Image.propTypes = {
  content: PropTypes.object.isRequired,
  custom: PropTypes.string,
  domain: PropTypes.string,
  lazy: PropTypes.func,
  placeholder: PropTypes.string
};
Image.defaultProps = {
  content: {}
};
export default Image;