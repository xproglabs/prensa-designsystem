import PropTypes from 'prop-types';
import React from 'react';

import * as S from './Article.styled';
import Byline from './Byline/Byline';
import Subject from './Subject/Subject';
import Subtitle from './Subtitle/Subtitle';
import TextBody from './TextBody/TextBody';
import Title from './Title/Title';
import TopImage from './TopImage/TopImage';

const Article = ({
  bodyWidth,
  byline,
  citation,
  intertitle,
  maxWidth,
  paragraph,
  subject,
  subtitle,
  title,
  topimage
}) => {
  return (
    <S.Page>
      <S.Container maxWidth={maxWidth}>
        <S.Content>
          <Subject {...subject} />
          <Title {...title} />
          <Subtitle {...subtitle} />
          <Byline {...byline} />
        </S.Content>
        <TopImage {...topimage} />
        <TextBody
          bodyWidth={bodyWidth}
          intertitle={intertitle}
          citation={citation}
          paragraph={paragraph}
        />
      </S.Container>
    </S.Page>
  );
};

Article.defaultProps = {
  bodyWidth: '768px',
  maxWidth: '1016px'
};

Article.propTypes = {
  bodyWidth: PropTypes.string,
  byline: PropTypes.object,
  citation: PropTypes.object,
  intertitle: PropTypes.object,
  maxWidth: PropTypes.string,
  paragraph: PropTypes.string,
  subject: PropTypes.object,
  subtitle: PropTypes.object,
  title: PropTypes.object,
  topimage: PropTypes.object,
};

export default Article;