import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'
import Share from '../Share/index.tsx'
import * as S from './Byline.styled'

const Byline = ({
  amp,
  author,
  content,
  dateline,
  datetime,
  fbappid,
  pageUrl,
  share
}) => {
  const AuthorInfo = () => {
    const hasAuthorEmail = author && author.email && author.email !== ''
    const hasAuthorSocialMedias = author && author.socialMedias && author.socialMedias !== ''
    if (!hasAuthorEmail && !hasAuthorSocialMedias) {
      return null
    }
    return (
      <Block mb={1}>
        {hasAuthorSocialMedias && (
          <S.BylineText {...datetime}>
            {author.socialMedias}
          </S.BylineText>
        )}
        {hasAuthorEmail && (
          <S.BylineText {...datetime}>
            {author.email}
          </S.BylineText>
        )}
      </Block>
    )
  }

  return (
    <S.Container>
      <S.Content {...content}>
        <S.BylineContainer {...dateline}>
          <S.Author {...author}>
            {author.value}
          </S.Author>
          <AuthorInfo />
          <Block lg={{ align: 'row' }}>
            <Block lg={{ mr: '4px' }}>
              <S.BylineText {...datetime}>
                {datetime.time_published}.
              </S.BylineText>
            </Block>
            <S.BylineText {...datetime}>
              Atualizado em {datetime.time_modified}
            </S.BylineText>
          </Block>
        </S.BylineContainer>
        <Share
          amp={amp}
          fbappid={fbappid}
          pageUrl={pageUrl}
          {...share}
        />
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