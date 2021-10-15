import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'
import Share from '../Share'
import * as S from './Byline.styled'

const Byline = ({
  amp,
  author,
  content,
  dateline,
  datetime,
  share
}) => {
  return (
    <S.Container>
      <S.Content {...content}>
        <S.BylineContainer {...dateline}>
          <S.Author {...author}>
            {author.value}
          </S.Author>
          <Block mb={1}>
            <S.BylineText {...datetime}>
              {author.socialMedias}
            </S.BylineText>
            <S.BylineText {...datetime}>
              {author.email}
            </S.BylineText>
          </Block>
          <Block>
            <S.BylineText {...datetime}>
              {datetime.time_published} - Atualizado {datetime.time_modified}
            </S.BylineText>
          </Block>  
        </S.BylineContainer>
        <Share amp={amp} {...share} />
      </S.Content>
    </S.Container>
  )
}

Byline.defaultProps = {
  author: {
    color: 'neutral4',
    fontFamily: 'primary',
    email: 'emaildoautor@emaildoautor.com.br',
    fontSize: ['14px', '14px'],
    lineHeight: ['16px', '16px'],
    socialMedias: '@redessocias',
    value: 'Prensa Design System'
  },
  content: {
    mb: [3, '0px']
  },
  dateline: {
    mb: [4, 4]
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