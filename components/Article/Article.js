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
    byline,
    citation,
    fbappid,
    featured,
    gallery,
    headWidth,
    heading2,
    heading3,
    heading4,
    hyperlink,
    images,
    paragraph,
    relatedContent,
    tags_section_title,
    subject,
    subtitle,
    title,
    tags,
    textbody,
    topimage,
    url
  } = props

  // prepare article slots
  const adsBody = get(ads, 'body', {})
  const adTopImage = get(ads, 'topImage', false)
  const adTopBody = get(ads, 'topBody', false)

  // related content
  const related_content_body = get(relatedContent, 'body', {})
  const related_content_bottom = get(relatedContent, 'bottom', {})

  const dummyFacebook = '<p><a id="https://www.facebook.com/tecmundo/posts/4748374661907004" name="https://www.facebook.com/tecmundo/posts/4748374661907004">https://www.facebook.com/tecmundo/posts/4748374661907004</a></p>'
  const dummyInstagram = '<p><a id="https://www.instagram.com/p/CWuG5QMM2pu/?utm_source=ig_web_button_share_sheet" name="https://www.instagram.com/p/CWuG5QMM2pu/?utm_source=ig_web_button_share_sheet">https://www.instagram.com/p/CWuG5QMM2pu/?utm_source=ig_web_button_share_sheet</a></p>'
  const dummyTweet = '<p><a id="https://twitter.com/UOL/status/1399821735231426566" name="https://twitter.com/UOL/status/1399821735231426566">https://twitter.com/UOL/status/1399821735231426566</a></p>'
  const dummyYoutube = '<p><a id="https://www.youtube.com/watch?v=5mpafLYHVd0" name="https://www.youtube.com/watch?v=5mpafLYHVd0">https://www.youtube.com/watch?v=5mpafLYHVd0</a></p>'
  const dummyYoutubeAlternative = '<p><a id="https://youtu.be/3vYeQLJ2as4" name="https://youtu.be/3vYeQLJ2as4">https://youtu.be/3vYeQLJ2as4</a></p>'

  const textBodyFakeContent = `
    ${dummyFacebook}
    ${dummyInstagram}
    ${dummyTweet}
    ${dummyYoutube}
    ${dummyYoutubeAlternative}
  `

  const fakeContent = `
    ${textbody}
    ${textBodyFakeContent}
  `

  return (
    <S.Page>
      <S.Container>
        {featured && featured.enabled ?
          <React.Fragment>
            <S.ContainerFeatured>
              <S.ContentImage>
                <TopImage {...topimage} />
              </S.ContentImage>
              <S.ContentFeatured maxWidth={headWidth}>
                <Subject {...subject} />
                <Title {...title} />
                <Subtitle {...subtitle} />
              </S.ContentFeatured>
            </S.ContainerFeatured>
            <S.MaxWidth maxWidth={headWidth}>
              <S.Content>
                <Byline amp={amp} {...byline} />
              </S.Content>
            </S.MaxWidth>
            {adTopBody && React.cloneElement(adTopBody)}
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
            {adTopImage && React.cloneElement(adTopImage)}
            <S.MaxWidth maxWidth={headWidth}>
              <TopImage amp={amp} {...topimage} />
            </S.MaxWidth>
            {adTopBody && React.cloneElement(adTopBody)}
          </React.Fragment>
        }
        <TextBody
          ads={adsBody}
          amp={amp}
          bodyWidth={bodyWidth}
          citation={citation}
          content={fakeContent}
          fbappid={fbappid}
          gallery={gallery}
          heading2={heading2}
          heading3={heading3}
          heading4={heading4}
          hyperlink={hyperlink}
          images={images}
          paragraph={paragraph}
          related_content_intervention={related_content_body}
          tags_section_title={tags_section_title}
          tags={tags}
        />
        <GridRelated {...related_content_bottom} />
      </S.Container>
    </S.Page>
  )
}

Article.defaultProps = {
  amp: false,
  bodyWidth: '768px',
  headWidth: '1016px'
}

Article.propTypes = {
  ads: PropTypes.shape({
    body: PropTypes.shape({
      content: PropTypes.array,
      enabled: PropTypes.bool,
      render: PropTypes.node,
      interventionAmount: PropTypes.number
    }),
    topImage: PropTypes.node,
    topBody: PropTypes.node
  }),
  amp: PropTypes.bool,
  bodyWidth: PropTypes.string,
  byline: PropTypes.object,
  citation: PropTypes.object,
  fbappid: PropTypes.string.isRequired,
  featured: PropTypes.object,
  gallery: PropTypes.array,
  headWidth: PropTypes.string,
  heading2: PropTypes.object,
  heading3: PropTypes.object,
  heading4: PropTypes.object,
  hyperlink: PropTypes.string,
  images: PropTypes.object,
  paragraph: PropTypes.object,
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
  url: PropTypes.string.isRequired
}

export default withTheme(Article)