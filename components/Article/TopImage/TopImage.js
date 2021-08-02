import {get} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import * as S from './TopImage.styled';

const Container = ({children, featured, mb, value}) => {
  if(featured)
    return <S.BoxFeatured mb={mb} value={value} />;
  return <S.Box mb={mb}>{children}</S.Box>;
};
Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  featured: PropTypes.bool,
  mb: PropTypes.array,
  value: PropTypes.string
};

const TopImage = ({
  amp,
  caption,
  featured,
  image,
  mb,
  value
}) => {
  if(!image)
    return null;
  const caption_value = get(caption, 'value', '');
  const fontFamily = get(caption, 'fontFamily', '');
  const fontSize = get(caption, 'fontSize', '');
  const lineHeight = get(caption, 'lineHeight', '');
  return (
    <Container featured={featured} mb={mb} value={value}>
      {amp ? (
        <amp-img
          alt={caption_value}
          src={value}
          layout='responsive'
          style={{
            display: 'inline-flex',
            width: '100%'
          }}
          height='640px'
          width='1280px'
        />
      ):(
        !featured && (
          <img
            alt={caption_value}
            src={value}
            style={{
              width: '100%'
            }}
          />
        )
      )}
      {caption && caption.show && (
        <S.SubtitleBox>
          <S.Subtitle
            fontFamily={fontFamily}
            fontSize={fontSize}
            lineHeight={lineHeight}>
            {caption_value}
          </S.Subtitle>
        </S.SubtitleBox>
      )}
    </Container>
  );
};

TopImage.defaultProps = {
  amp: false,
  featured: false,
  image: true,
  caption: {
    fontFamily: 'secondary',
    fontSize: ['14px', '14px'],
    lineHeight: ['130%', '130%'],
    show: true,
    value: 'Legenda da Imagem'
  },
  mb: ['2', '2'],
  value: 'https://xprog.com.br/static/images/img-destak.jpg',
};

TopImage.propTypes = {
  amp: PropTypes.bool,
  featured: PropTypes.bool,
  image: PropTypes.bool,
  caption: PropTypes.object,
  mb: PropTypes.array,
  value: PropTypes.string,
};

export default TopImage;