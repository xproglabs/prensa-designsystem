import PropTypes from 'prop-types';
import React from 'react';

import * as S from './TopImage.styled';

const TopImage = ({
  amp,
  caption,
  image,
  mb,
  px,
  py,
  value,
  width
}) => {
  if(!image)
    return null;
  return (
    <S.Box mb={mb}>
      {amp ? (
        <amp-img
          alt={caption}
          src={value}
          layout='responsive'
          style={{
            display: 'inline-flex',
            width: '100%'
          }}
          height='320px'
          width='640px'
        />
      ):(
        <img
          alt={caption}
          src={value}
        />
      )}
      {caption && caption.show && (
        <S.SubtitleBox px={px} py={py} width={width}>
          <S.Subtitle
            fontSize={caption.fontSize}
            lineHeight={caption.lineHeight}>
            {caption.value}
          </S.Subtitle>
        </S.SubtitleBox>
      )}
    </S.Box>
  );
};

TopImage.defaultProps = {
  amp: false,
  image: true,
  caption: {
    fontSize: ['14px', '14px'],
    lineHeight: ['18px', '18px'],
    show: true,
    value: 'Legenda da Imagem'
  },
  mb: ['2', '2'],
  px: ['3', '3'],
  py: ['3', '3'],
  value: 'https://xprog.com.br/static/images/img-destak.jpg',
  width: 'calc(100% - 48px)'
};

TopImage.propTypes = {
  amp: PropTypes.bool,
  image: PropTypes.bool,
  caption: PropTypes.object,
  mb: PropTypes.array,
  px: PropTypes.array,
  py: PropTypes.array,
  value: PropTypes.string,
  width: PropTypes.array
};

export default TopImage;