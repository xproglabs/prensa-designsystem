import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const Image = ({domain, value}) => {

  if(!value || !value['image-contentId'])
    return false;

  const contentid = value['image-contentId'];
  const captionAndByline = value['image-subtitle'] ? 
    `${value['image-subtitle']} (${value['image-byline']})` : 
    `${value['image-subtitle-original']} (${value['image-byline']})`;
    
  const width = 1000;
  const derivative = '2x1';
  const _cid = contentid.split(".")
  const versioned = `${contentid}:${_cid[2]}`
  const imagePath = `${domain}/image/policy:${versioned}/image.jpg?f=${derivative}&w=${width}`;

  return (
    <Block custom="article-image-box" w="100p">
      <img className='image-article' src={imagePath} alt={captionAndByline ? captionAndByline : `Imagem ${contentid}`} />
      <Block custom='label'>{captionAndByline}</Block>
    </Block>
  );
};

Image.propTypes = {
  value: PropTypes.object.isRequired
};
Image.defaultProps = {
  value: {}
};
export default Image;