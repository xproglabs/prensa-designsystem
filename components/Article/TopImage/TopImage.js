import PropTypes from 'prop-types';
import React from 'react';

import * as S from './TopImage.styled';

const TopImage = ({amp, caption, value}) => {
  return (
    <S.Box>
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
      <S.SubtitleBox>
        <S.Subtitle>
          {caption}
        </S.Subtitle>
      </S.SubtitleBox>
    </S.Box>
  );
};

TopImage.defaultProps = {
  amp: false,
  caption: 'A legenda da imagem já deve vir com os seus respectivos créditos / Byline - Fotógrafo',
  value: 'https://xprog.com.br/static/images/img-destak.jpg'
};

TopImage.propTypes = {
  amp: PropTypes.bool,
  /**
   * Cor do Título
   */
  caption: PropTypes.string,
  /**
   * Valor (HTML)
   */
  value: PropTypes.string
};

export default TopImage;