import PropTypes from 'prop-types';
import React from 'react';

import Intertitle from '../Intertitle/Intertitle';
import Paragraph from '../Paragraph/Paragraph';
import * as S from './TextBody.styled';

const TextBody = ({
  value
}) => {
  return (
    <S.Body>
      <Intertitle />
      <Paragraph />
      <Paragraph />
      <Paragraph />
      <Intertitle value={value} />
      <Paragraph />
      <Paragraph />
      <Paragraph />
    </S.Body>
  );
};

TextBody.defaultProps = {
  value: 'value'
};

TextBody.propTypes = {
  /**
   * Mensagem principal
   */
  value: PropTypes.string
};

export default TextBody;