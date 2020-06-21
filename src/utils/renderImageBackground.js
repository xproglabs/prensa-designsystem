import PropTypes from 'prop-types';
import React from 'react';

const RenderImageBackground = props => {
  const {imageUrl, captionAndByline} = props.data;
  const background = {backgroundImage: `url('${imageUrl}')`};
  return (
    <div className='image-box' style={background}>
      <p className='label'>{captionAndByline}</p>
    </div>
  );
};

RenderImageBackground.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string,
    captionAndByline: PropTypes.string
  })
};

export default RenderImageBackground;