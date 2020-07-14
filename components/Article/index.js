import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Grid from '../Grid';
import SocialMedias from '../SocialMedias';
import Subject from '../Subject';
import Tags from '../Tags';
import Typography from '../Typography';
import Image from './Image';
import TextBody from './TextBody';

const Article = ({content, embeds, handleTagClick, socialMedias}) => {

  const {author, images, metadata, subject, subtitle, text, title} = content;
  const createdAt = content['time-created'];
  const updatedAt = content['time-modified'];

  const propsArticle = {align: 'center', custom: 'article'};
  const propsArticleHead = {align: 'center', custom: 'article-head', w: '100p'};
  const propsArticleData = {align: 'center', custom: 'article-data', w: '100p'};
  const propsArticleBody = {align: 'center', custom: 'article-body', w: '100p'};
  const propsArticleMedia = {align: 'row between middle', custom: 'article-body has-border-bottom', w: '100p'};
  const propsArticleAuthor = {align: 'col', custom: '', w: '100p'};
  const customArticleTag = {custom: 'article-tag'};
  return (
    <Block {...propsArticle}>
      <Block {...propsArticleHead}>
        <Grid columns={12}>
          <Subject filled>{subject}</Subject>
          <Typography tokenVariant='article-title'>{title}</Typography>
          <Typography tokenVariant='article-subtitle'>{subtitle}</Typography>
        </Grid>
      </Block>
      <Block {...propsArticleData}>
        <Grid columns={12}>
          <Block {...propsArticleMedia}>
            <Block {...propsArticleAuthor}>
              <Typography tokenVariant='system-bold'>{author}</Typography>
              <Typography tokenVariant='system'>Criado em: {createdAt}</Typography>
              {updatedAt && <Typography tokenVariant='system'>Atualizado em: {updatedAt}</Typography>}
            </Block>
            <SocialMedias content={socialMedias} />
          </Block>
        </Grid>
      </Block>
      <Block {...propsArticleBody}>
        <Grid columns={12}>
          {images['image-contentId'] && <Image value={images} />}
        </Grid>
        <Grid columns={10}>
          <TextBody content={text} embeds={embeds} />
        </Grid>
      </Block>
      <Grid columns={10}>
        <Tags custom={customArticleTag} content={metadata} onClick={handleTagClick}/>
      </Grid>
    </Block>
  );
};

Article.propTypes = {
  content: PropTypes.shape({
    author: PropTypes.string.isRequired,
    images: PropTypes.object.isRequired,
    metadata: PropTypes.array.isRequired,
    subject: PropTypes.string,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    ['time-created']: PropTypes.string.isRequired,
    ['time-modified']: PropTypes.string.isRequired,
  }),
  handleTagClick: PropTypes.func.isRequired,
  socialMedias: PropTypes.array,
  embeds: PropTypes.object
};

Article.defaultProps = {
  content: {},
};

export default Article;