import get from 'lodash/get'
import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from 'styled-components'

import { GridRelated } from '../Grids/GridRelated'
import * as S from './Article.styled'
import Byline from './Byline/Byline'
import ArticleImage from './Image'
import Subject from './Subject/Subject'
import Subtitle from './Subtitle/Subtitle'
import TextBody from './TextBody/TextBody'
import Title from './Title/Title'

const Article = (props) => {
  const {
    ads,
    amp,
    bodyImage,
    bodyWidth,
    bottomShare,
    byline,
    citation,
    fbappid,
    fbclienttoken,
    featured,
    gallery,
    headWidth,
    hasColumnRight,
    heading2,
    heading3,
    heading4,
    hyperlink,
    images,
    orderedList,
    paragraph,
    relatedContent,
    sectionTitle,
    share,
    subject,
    subtitle,
    title,
    tags,
    textbody,
    topimage,
    unorderedList,
    url
  } = props

  // prepare article slots
  const adsBody = get(ads, 'body', {})
  const adsBottom = get(ads, 'bottom', false)
  const adsSideBar = get(ads, 'sideBar', false)
  const adsTopImage = get(ads, 'topImage', false)
  const adsTopBody = get(ads, 'topBody', false)

  // related content
  const related_content_body = get(relatedContent, 'body', {})
  const related_content_bottom = get(relatedContent, 'bottom', {})
  return (
    <S.Page>
      <S.Container>
        {featured && featured.enabled ?
          <React.Fragment>
            <S.ContainerFeatured>
              <S.ContentImage>
                <ArticleImage
                  amp={amp}
                  {...topimage}
                />
              </S.ContentImage>
              <S.ContentFeatured maxWidth={headWidth}>
                <Subject {...subject} />
                <Title {...title} />
                <Subtitle {...subtitle} />
              </S.ContentFeatured>
            </S.ContainerFeatured>
            <S.MaxWidth maxWidth={headWidth}>
              <S.Content>
                <Byline
                  amp={amp}
                  share={share}
                  sectionTitle={sectionTitle}
                  {...byline}
                />
              </S.Content>
            </S.MaxWidth>
            {adsTopBody && React.cloneElement(adsTopBody)}
          </React.Fragment>
          :
          <React.Fragment>
            <S.MaxWidth maxWidth={headWidth}>
              <S.Content>
                <Subject {...subject} />
                <Title {...title} />
                <Subtitle {...subtitle} />
                <Byline
                  amp={amp}
                  fbappid={fbappid}
                  pageUrl={url}
                  share={share}
                  sectionTitle={sectionTitle}
                  {...byline}
                />
              </S.Content>
            </S.MaxWidth>
            {adsTopImage && React.cloneElement(adsTopImage)}
            <S.MaxWidth maxWidth={headWidth}>
              <ArticleImage amp={amp} {...topimage} />
            </S.MaxWidth>
            {adsTopBody && React.cloneElement(adsTopBody)}
          </React.Fragment>
        }
        <S.MaxWidth
          maxWidth={headWidth}
        >
          <TextBody
            adsBody={adsBody}
            adsBottom={adsBottom}
            adsSide={adsSideBar}
            amp={amp}
            bodyImage={bodyImage}
            bodyWidth={bodyWidth}
            bottomShare={bottomShare}
            citation={citation}
            content={textbody}
            fbappid={fbappid}
            fbclienttoken={fbclienttoken}
            gallery={gallery}
            hasColumnRight={hasColumnRight}
            heading2={heading2}
            heading3={heading3}
            heading4={heading4}
            hyperlink={hyperlink}
            images={images}
            orderedList={orderedList}
            paragraph={paragraph}
            related_content_intervention={related_content_body}
            sectionTitle={sectionTitle}
            share={share}
            tags={tags}
            unorderedList={unorderedList}
          />
        </S.MaxWidth>
        <GridRelated {...related_content_bottom} />
      </S.Container>
    </S.Page>
  )
}

Article.defaultProps = {
  amp: false,
  bodyWidth: '768px',
  bodyImage: {
    caption: {
      fontFamily: 'secondary',
      fontSize: ['14px', '14px'],
      lineHeight: ['130%', '130%'],
      show: true,
      value: ''
    },
    featured: false,
    image: true
  },
  headWidth: '1016px',
  hasColumnRight: false
}

Article.propTypes = {
  ads: PropTypes.shape({
    bottom: PropTypes.shape({
      enabled: PropTypes.bool
    }),
    body: PropTypes.shape({
      content: PropTypes.array,
      enabled: PropTypes.bool,
      render: PropTypes.node,
      interventionAmount: PropTypes.number
    }),
    sideBar: PropTypes.node,
    topImage: PropTypes.node,
    topBody: PropTypes.node
  }),
  amp: PropTypes.bool,
  bodyImage: PropTypes.object,
  bodyWidth: PropTypes.string,
  bottomShare: PropTypes.object,
  byline: PropTypes.object,
  citation: PropTypes.object,
  fbappid: PropTypes.string.isRequired,
  fbclienttoken: PropTypes.string,
  featured: PropTypes.object,
  gallery: PropTypes.shape({
    captionProps: PropTypes.object,
    items: PropTypes.array
  }),
  hasColumnRight: PropTypes.bool,
  headWidth: PropTypes.string,
  heading2: PropTypes.object,
  heading3: PropTypes.object,
  heading4: PropTypes.object,
  hyperlink: PropTypes.string,
  images: PropTypes.object,
  paragraph: PropTypes.object,
  orderedList: PropTypes.object,
  relatedContent: PropTypes.shape({
    body: PropTypes.shape({
      enabled: PropTypes.bool,
      component: PropTypes.node
    }),
    bottom: PropTypes.shape({
      enabled: PropTypes.bool,
      color: PropTypes.string,
      column_items: PropTypes.number,
      column_padding: PropTypes.string,
      domain: PropTypes.string,
      image_circle: PropTypes.bool, 
      layout: PropTypes.string,
      slot: PropTypes.array,
      maxWidth: PropTypes.string
    })
  }),
  sectionTitle: PropTypes.object,
  share: PropTypes.shape({
    byline: PropTypes.object,
    textBody: PropTypes.object
  }),
  subject: PropTypes.object,
  subtitle: PropTypes.object,
  tags: PropTypes.object,
  textbody: PropTypes.string,
  title: PropTypes.object,
  topimage: PropTypes.object,
  unorderedList: PropTypes.object,
  url: PropTypes.string.isRequired
}

export default withTheme(Article)