import PropTypes from 'prop-types';
import React from 'react';

import Intertitle from '../Intertitle/Intertitle';
import Paragraph from '../Paragraph/Paragraph';
import * as S from './TextBody.styled';

const TextBody = ({
  bodyWidth,
  value
}) => {
  return (
    <S.Body bodyWidth={bodyWidth}>
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
  bodyWidth: PropTypes.string,
  value: PropTypes.string
};

export default TextBody;