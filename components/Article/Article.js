import React from 'react';

import * as S from './Article.styled';
import Byline from './Byline/Byline';
import Subject from './Subject/Subject';
import Subtitle from './Subtitle/Subtitle';
import TextBody from './TextBody/TextBody';
import Title from './Title/Title';
import TopImage from './TopImage/TopImage';

const Article = () => {
  return (
    <S.Container>
      <S.Content>
        <Subject />
        <Title />
        <Subtitle />
        <Byline />
      </S.Content>
      <TopImage />
      <TextBody />
    </S.Container>
  );
};

Article.defaultProps = {};
Article.propTypes = {};

export default Article;