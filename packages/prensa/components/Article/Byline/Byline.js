import get from 'lodash/get'
import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'
import Share from '../Share/index.tsx'
import ManyAuthors from './Authors'
import SectionTitle from '../SectionTitle'
import * as S from './Byline.styled'

const Byline = ({
  amp,
  author,
  authors,
  content,
  dateline,
  datetime,
  image,
  isExpanded,
  fbappid,
  pageUrl,
  sectionTitle,
  share
}) => {
  const shareData = get(share, 'byline', {})
  const shareColor = get(share, 'color', undefined)
  const shareSize = get(share, 'size', undefined)
  const shareEnabled = get(shareData, 'enabled', false)
  const shareHasSectionTitle = get(shareData, 'sectionTitle', false)
  const shareSectionTitleProps = get(shareData, 'sectionTitleProps', {})

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

  const BylineExpanded = () => {
    return (
      <Block>
        <S.BylineText {...datetime}>
          Publicado em {datetime.time_published}
        </S.BylineText>
        {datetime.time_modified_expanded && (
          <S.BylineText {...datetime}>
            Atualizado em {datetime.time_modified_expanded}
          </S.BylineText>
        )}
      </Block>
    )
  }

  const BylineReduced = () => {
    return (
      <Block lg={{ align: 'row' }}>
        <Block lg={{ mr: '4px' }}>
          <S.BylineText {...datetime}>
            {!datetime.time_modified && 'Publicado em '} {datetime.time_published}.
          </S.BylineText>
        </Block>
        {datetime.time_modified && (
          <S.BylineText {...datetime}>
            Atualizado em {datetime.time_modified}
          </S.BylineText>
        )}
      </Block>
    )
  }

  return (
    <S.Container>
      <S.Content {...content}>
        <S.BylineContainer {...dateline}>
          {(image && image.enabled) && (
            <S.BylineImage {...image} />
          )}
          <S.BylineContent>
            {authors.items.length > 0 ? (
              <ManyAuthors items={authors.items} />
            ) : (
              <>
                <S.Author {...author}>{author.value}</S.Author>
                <AuthorInfo />
              </>
            )}
            {isExpanded ? <BylineExpanded /> : <BylineReduced />}
          </S.BylineContent>
        </S.BylineContainer>
        <Block
          align='column'
          lg={{ align: 'row', alignx: 'center' }}
        >
          {shareHasSectionTitle === true &&
            <SectionTitle
              mt={[2, 0]}
              element='h6'
              {...sectionTitle}
              {...shareSectionTitleProps}
            >
              Compartilhar
            </SectionTitle>
          }
          <Share
            amp={amp}
            color={shareColor}
            enabled={shareEnabled}
            fbappid={fbappid}
            pageUrl={pageUrl}
            size={shareSize}
            {...shareData}
          />
        </Block>
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
  authors: {
    items: []
  },
  content: {
    mb: [3, 3]
  },
  dateline: {
    mb: [4, '0px']
  },
  datetime: {
    color: 'neutral2',
    fontFamily: 'secondary',
    fontSize: ['12px', '12px'],
    lineHeight: ['16px', '16px']
  },
  image: {
    enabled: false
  }
}

Byline.propTypes = {
  amp: PropTypes.bool,
  author: PropTypes.object,
  authors: PropTypes.object,
  datetime: PropTypes.object,
  image: PropTypes.object,
  share: PropTypes.object,
  isExpanded: PropTypes.bool,
}

export default Byline