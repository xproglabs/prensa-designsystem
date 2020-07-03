import PropTypes from 'prop-types';
import React from 'react';

const imageUrlBuilder = (policy, derivative, width) => 
  `/image/${policy}/image.jpg?f=${derivative}&w=${width}`;

const Image = ({value}) => {
  const imagePath = imageUrlBuilder(value, '2x1', 1000);
  return (
    <p>{imagePath}</p>
  );
};

Image.propTypes = {
  value: PropTypes.string.isRequired
};
Image.defaultProps = {
  value: {}
};

export default Image;