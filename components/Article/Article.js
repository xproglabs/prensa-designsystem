import PropTypes from 'prop-types';
import React from 'react';

import * as S from './Article.styled';
import Subtitle from './Subtitle/Subtitle';
import Title from './Title/Title';

const Article = ({
  message
}) => {
  return (
    <S.Container>
      <S.Content>
        <Title />
        <Subtitle />
      </S.Content>
      <S.Body>
        <pre>{message}</pre>
      </S.Body>
    </S.Container>
  );
};

export default Article;

Article.defaultProps = {
  message: 'message'
};

Article.propTypes = {
  /**
   * Mensagem principal
   */
  message: PropTypes.string
};