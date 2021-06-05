import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import TopImage from '../Article/TopImage/TopImage';
import {Container, Subtitle, SubtitleBox} from './styled';

const ImageGallery = ({caption, items, height, width}) => {
  return (
    <Container $height={height} $width={width}>
      <amp-carousel
        lightbox={true}
        height="420"
        layout="responsive"
        type="slides"
        width="720">
        {map(items, (item, key) => (
          <figure key={key}>
            <TopImage
              caption={{show: false}}
              featured={false}
              image={true}
              mb={['0', '0']}
              value={item.value}
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
  height: '420px',
  width: '720px'
};

ImageGallery.propTypes = {
  caption: PropTypes.object,
  items: PropTypes.array,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default ImageGallery;