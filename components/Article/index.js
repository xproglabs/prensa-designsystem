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

  const {subject, subtitle, title, author} = content;
  const createdAt = content['time-created'];
  const updatedAt = content['time-modified'];

  return (
    <Block alignCenter style='article'>
      <Block pb='xl'>
        <Grid columns={12}>
          <Subject filled>{subject}</Subject>
          <Typography tokenVariant='article-title'>{title}</Typography>
          <Typography tokenVariant='article-subtitle'>{subtitle}</Typography>
        </Grid>
      </Block>
      <Block pb='xl'>
        <Grid columns={12}>
          <Block column>
            <Typography tokenVariant='system-bold'>{author}</Typography>
            <Typography tokenVariant='system'>Criado em: {createdAt}</Typography>
            {updatedAt && <Typography tokenVariant='system'>Atualizado em: {updatedAt}</Typography>}
          </Block>
        </Grid>
      </Block>
    </Block>
  );
};

Article.propTypes = {
  content: PropTypes.shape({
    author: PropTypes.string.isRequired,
    subject: PropTypes.string,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ['time-created']: PropTypes.string.isRequired,
    ['time-modified']: PropTypes.string.isRequired,
  })
};

Article.defaultProps = {
  content: {}
};

export default Article;