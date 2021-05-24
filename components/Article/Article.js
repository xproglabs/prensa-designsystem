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
  byline,
  subject,
  subtitle,
  title,
  topimage
}) => {
  return (
    <S.Page>
      <S.Container>
        <S.Content>
          <Subject {...subject} />
          <Title {...title} />
          <Subtitle {...subtitle} />
          <Byline {...byline} />
        </S.Content>
        <TopImage {...topimage} />
        <TextBody />
      </S.Container>
    </S.Page>
  );
};

Article.defaultProps = {};
Article.propTypes = {
  byline: PropTypes.object,
  subject: PropTypes.object,
  subtitle: PropTypes.object,
  title: PropTypes.object,
  topimage: PropTypes.object,
};

export default Article;