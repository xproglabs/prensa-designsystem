import { get } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from 'styled-components'

import { GridRelated } from '../Grids/GridRelated'
import * as S from './Article.styled'
import Byline from './Byline/Byline'
import Subject from './Subject/Subject'
import Subtitle from './Subtitle/Subtitle'
import TextBody from './TextBody/TextBody'
import Title from './Title/Title'
import TopImage from './TopImage/TopImage'

const Article = (props) => {
  const {
    ads,
    amp,
    bodyWidth,
    bottomShare,
    byline,
    citation,
    fbappid,
    featured,
    gallery,
    headWidth,
    hasColumnRight,
    heading2,
    heading3,
    heading4,
    hyperlink,
    images,
    hasBottomShare,
    orderedList,
    paragraph,
    relatedContent,
    tags_section_title,
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
                <TopImage
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
                  {...byline}
                />
              </S.Content>
            </S.MaxWidth>
            {adsTopImage && React.cloneElement(adsTopImage)}
            <S.MaxWidth maxWidth={headWidth}>
              <TopImage amp={amp} {...topimage} />
            </S.MaxWidth>
            {adsTopBody && React.cloneElement(adsTopBody)}
          </React.Fragment>
        }
        <S.MaxWidth
          maxWidth={headWidth}
        >
          <TextBody
            adsBody={adsBody}
            adsSide={adsSideBar}
            amp={amp}
            bodyWidth={bodyWidth}
            bottomShare={bottomShare}
            citation={citation}
            content={textbody}
            fbappid={fbappid}
            gallery={gallery}
            hasBottomShare={hasBottomShare}
            hasColumnRight={hasColumnRight}
            heading2={heading2}
            heading3={heading3}
            heading4={heading4}
            hyperlink={hyperlink}
            images={images}
            orderedList={orderedList}
            paragraph={paragraph}
            related_content_intervention={related_content_body}
            tags_section_title={tags_section_title}
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
  headWidth: '1016px',
  hasColumnRight: false
}

Article.propTypes = {
  ads: PropTypes.shape({
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
  bodyWidth: PropTypes.string,
  bottomShare: PropTypes.object,
  byline: PropTypes.object,
  citation: PropTypes.object,
  fbappid: PropTypes.string.isRequired,
  featured: PropTypes.object,
  gallery: PropTypes.shape({
    captionProps: PropTypes.object,
    items: PropTypes.array
  }),
  hasBottomShare: PropTypes.bool,
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
  tags_section_title: PropTypes.object,
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