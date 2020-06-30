import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Grid from '../Grid';
import Subject from '../Subject';
import Typography from '../Typography';

{/* <div className='Article'>
  <div className='content-head'>
    <p className='subject'>{body.subject}</p>
    <h1 className='title'>{body.name}</h1>
    <h4 className='lead'>{body.lead}</h4>
    <div className='add-info'>
      <div className='date'>
        <p className='byline'>{body.author}</p>
        <p className='publishingDateTime'>{body.publishingDateTime} {body.publishingDateTime !== body.editedDateTime ? ` Modificado em: ${body.editedDateTime}` : ``}</p>
      </div>
      {renderFooterMedias(url)}
    </div>  
    {renderImage(image.contentId, captionAndByline)}
  </div>
  <div className='content-body'>
    {renderBody(body.text)}
  </div>
  <div className='tags-list'>
    {renderTags(metadata)}
  </div>
</div> */}

const Article = ({content}) => {

  const {subject, subtitle, title} = content;

  return (
    <Block alignCenter style='article'>
      <Grid columns={12}>
        <Subject filled>{subject}</Subject>
        <Typography tokenVariant='article-title'>{title}</Typography>
        <Typography tokenVariant='article-subtitle'>{subtitle}</Typography>
      </Grid>
    </Block>
  );
};

Article.propTypes = {
  content: PropTypes.shape({
    subject: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  })
};

Article.defaultProps = {
  content: {}
};

export default Article;