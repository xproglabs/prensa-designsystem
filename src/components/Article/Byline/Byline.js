import PropTypes from 'prop-types'
import React from 'react'

import Share from '../Share'
import * as S from './Byline.styled'

const Byline = ({
  amp,
  author,
  datetime,
  share
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.DateLine>
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
        <Share amp={amp} {...share} />
      </S.Content>
    </S.Container>
  )
}

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
}

Byline.propTypes = {
  amp: PropTypes.bool,
  author: PropTypes.object,
  datetime: PropTypes.object,
  medias: PropTypes.object,
  share: PropTypes.object
}

export default Byline