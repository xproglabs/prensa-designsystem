import PropTypes from 'prop-types';
import React from 'react';

import Medias from '../Medias/Medias';
import * as S from './Byline.styled';

const Byline = ({
  author,
  customContent,
  datetime,
  medias
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.DateLine custom={customContent}>
          <S.Author {...author}>
            {author.value}
          </S.Author>
          <S.TimeEntry {...datetime}>
            Publicado em {datetime.time_published}
          </S.TimeEntry>
          <S.TimeEntry {...datetime}>
            Atualizado há {datetime.time_modified}
          </S.TimeEntry>
        </S.DateLine>
        <Medias {...medias} />
      </S.Content>
    </S.Container>
  );
};

Byline.defaultProps = {
  author: {
    color: 'neutral4',
    fontFamily: 'primary',
    fontSize: ['14px', '14px'],
    lineHeight: ['16px', '16px'],
    value: 'Prensa Design System'
  },
  datetime: {
    color: 'neutral2',
    fontFamily: 'secondary',
    fontSize: ['12px', '12px'],
    lineHeight: ['16px', '16px'],
    time_modified: '18 dias atrás',
    time_published: '21/05/2021 às 23:20'
  },
  medias: {
    color: '#999999'
  }
};

Byline.propTypes = {
  author: PropTypes.object,
  customContent: PropTypes.string,
  datetime: PropTypes.object,
  medias: PropTypes.object
};

export default Byline;