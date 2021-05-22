import PropTypes from 'prop-types';
import React from 'react';

import * as S from './Article.styled';

const Article = ({
  message
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Message text={message}>
          {message}
        </S.Message>
      </S.Content>
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