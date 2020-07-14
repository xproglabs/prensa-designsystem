import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const Image = ({value}) => {

  if(!value || !value['image-contentId'])
    return false;

  const contentid = value['image-contentId'];
  const captionAndByline = value['image-subtitle'] ? 
    `${value['image-subtitle']} (${value['image-byline']})` : 
    `${value['image-subtitle-original']} (${value['image-byline']})`;
    
  const width = 1000;
  const derivative = '2x1';
  const imagePath = `/image/policy:${contentid}/image.jpg?f=${derivative}&w=${width}`;

  return (
    <Block custom="article-image-box" width="100p">
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