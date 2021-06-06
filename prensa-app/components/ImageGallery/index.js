import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import {Container, Subtitle, SubtitleBox} from './styled';

const ImageGallery = ({caption, items, height, width}) => {
  return (
    <Container $height={height} $width={width}>
      <amp-carousel
        lightbox={true}
        height="720px"
        layout="responsive"
        type="slides"
        width="720px">
        {map(items, (item, key) => (
          <figure style={{margin: '0'}} key={key}>
            <amp-img 
              alt={item.caption}
              src={item.value}
              layout="responsive"
              height="360px"
              key={key}
              width="720px"
            />
            <figcaption>    
              <SubtitleBox>
                <Subtitle
                  fontFamily={caption.fontFamily}
                  fontSize={caption.fontSize}
                  lineHeight={caption.lineHeight}>
                  {item.caption}
                </Subtitle>
              </SubtitleBox>
            </figcaption>
          </figure>
        ))}
      </amp-carousel>
    </Container>
  );
};

export const gallery_amp_script = () => (
  <script async custom-element="amp-lightbox-gallery" src="https://cdn.ampproject.org/v0/amp-lightbox-gallery-0.1.js" />
);

ImageGallery.defaultProps = {
  caption: {
    fontFamily: 'secondary',
    fontSize: ['14px', '14px'],
    lineHeight: ['130%', '130%']
  },
  height: '500px',
  width: '720px'
};

ImageGallery.propTypes = {
  caption: PropTypes.object,
  items: PropTypes.array,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default ImageGallery;