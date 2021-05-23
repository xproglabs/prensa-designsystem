import PropTypes from 'prop-types';
import React from 'react';

import Medias from '../Medias/Medias';
import * as S from './Byline.styled';

const Byline = ({
  author,
  color,
  time_modified,
  time_published
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.DateLine>
          <S.Author>{author}</S.Author>
          <S.TimeEntry>Publicado em: {time_published}</S.TimeEntry>
          <S.TimeEntry>Atualizado em: {time_modified}</S.TimeEntry>
        </S.DateLine>
        <Medias color={color} />  
      </S.Content>
    </S.Container>  
  );
};

Byline.defaultProps = {
  author: 'Prensa Design System',
  color: 'primary2',
  time_modified: '18 dias atrás',
  time_published: '21/05/2021 às 23:20'
};

Byline.propTypes = {
  /**
   * Valor (HTML)
   */
  author: PropTypes.string,
  /**
   * Cor do Byline
   */
  color: PropTypes.string,
  /**
   * Timestamps
   */
  time_modified: PropTypes.string,
  time_published: PropTypes.string
};

export default Byline;