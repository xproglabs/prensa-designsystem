import PropTypes from 'prop-types';
import React from 'react';

import Citation from '../Citation/Citation';
import Intertitle from '../Intertitle/Intertitle';
import Paragraph from '../Paragraph/Paragraph';
import * as S from './TextBody.styled';

const TextBody = ({
  bodyWidth,
  citation,
  intertitle,
  paragraph,
  value
}) => {
  return (
    <S.Body bodyWidth={bodyWidth}>
      <Intertitle
        {...intertitle}
      />
      <Paragraph
        {...paragraph}
      />
      <Intertitle
        {...intertitle}
      />
      <Paragraph
        {...paragraph}
        value={value}
      />
      <Paragraph
        {...paragraph}
      />
      <Citation
        {...citation}
      />
      <Paragraph
        {...paragraph}
      />
    </S.Body>
  );
};

TextBody.defaultProps = {
  value: 'Em março de 1937, a família foi parar na Fazenda São Martinho, em Ribeirão Preto, para o cultivo de café. Ficou por lá até janeiro  de 1940, quando Fumio, então com 6 anos, veio para Santo André, na região do ABC, onde ele aprendeu as primeiras letras.'
};

TextBody.propTypes = {
  bodyWidth: PropTypes.string,
  citation: PropTypes.object,
  intertitle: PropTypes.object,
  paragraph: PropTypes.object,
  value: PropTypes.string
};

export default TextBody;