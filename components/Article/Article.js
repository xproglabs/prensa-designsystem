import {get} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {withTheme} from 'styled-components';

import * as S from './Article.styled';
import Byline from './Byline/Byline';
import Subject from './Subject/Subject';
import Subtitle from './Subtitle/Subtitle';
import TextBody from './TextBody/TextBody';
import Title from './Title/Title';
import TopImage from './TopImage/TopImage';

const Article = (props) => {
  const {
    ads,
    amp,
    bodyWidth,
    byline,
    citation,
    featured,
    gallery,
    headWidth,
    heading2,
    heading3,
    heading4,
    hyperlink,
    images,
    paragraph,
    subject,
    subtitle,
    title,
    tags,
    textbody,
    topimage
  } = props;
  // prepare article slots
  const adsBody = get(ads, 'articleBody', {});
  const adsTopImage = get(ads, 'topImageRender', {});
  const adsTopBody = get(ads, 'topBodyRender', {});
  return (
    <S.Page>
      <S.Container>
        {featured && featured.enabled ?
          <React.Fragment>
            <S.ContainerFeatured>
              <S.ContentImage>
                <TopImage amp={amp} {...topimage} />
              </S.ContentImage>
              <S.ContentFeatured maxWidth={headWidth}>
                <Subject {...subject} />
                <Title {...title} />
                <Subtitle {...subtitle} />
              </S.ContentFeatured>
            </S.ContainerFeatured>
            <S.MaxWidth maxWidth={headWidth}>
              <S.Content>
                <Byline {...byline} />
              </S.Content>
            </S.MaxWidth>
            {adsTopImage}
          </React.Fragment>
          :
          <React.Fragment>
            <S.MaxWidth maxWidth={headWidth}>
              <S.Content>
                <Subject {...subject} />
                <Title {...title} />
                <Subtitle {...subtitle} />
                <Byline {...byline} />
              </S.Content>
            </S.MaxWidth>
            {adsTopImage}
            <S.MaxWidth maxWidth={headWidth}>
              <TopImage amp={amp} {...topimage} />
            </S.MaxWidth>
            {adsTopBody}
          </React.Fragment>
        }
        <TextBody
          ads={adsBody}
          amp={amp}
          bodyWidth={bodyWidth}
          citation={citation}
          content={textbody}
          gallery={gallery}
          heading2={heading2}
          heading3={heading3}
          heading4={heading4}
          hyperlink={hyperlink}
          images={images}
          paragraph={paragraph}
          tags={tags}
        />
      </S.Container>
    </S.Page>
  );
};

Article.defaultProps = {
  amp: false,
  bodyWidth: '768px',
  headWidth: '1016px'
};

Article.propTypes = {
  ads: PropTypes.shape({
    body: PropTypes.shape({
      content: PropTypes.object,
      interventionAmount: PropTypes.number
    }),
    topImage: PropTypes.object,
    topBody: PropTypes.object
  }),
  AdPlaceholder: PropTypes.func,
  amp: PropTypes.bool,
  bodyWidth: PropTypes.string,
  byline: PropTypes.object,
  citation: PropTypes.object,
  featured: PropTypes.object,
  gallery: PropTypes.array,
  headWidth: PropTypes.string,
  heading2: PropTypes.object,
  heading3: PropTypes.object,
  heading4: PropTypes.object,
  hyperlink: PropTypes.string,
  images: PropTypes.object,
  paragraph: PropTypes.object,
  subject: PropTypes.object,
  subtitle: PropTypes.object,
  tags: PropTypes.object,
  textbody: PropTypes.string,
  title: PropTypes.object,
  topimage: PropTypes.object,
};

export default withTheme(Article);