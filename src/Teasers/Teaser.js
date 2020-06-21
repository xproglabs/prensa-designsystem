import PropTypes from 'prop-types';
import React from 'react';

import Subject from '../Subject';
import Typography from '../Typography';
import {BackgroundImage} from '../utils';

const Teaser = props => {
  const {articleUrl, image, subject, subtitle, title} = props.content;
  const {loading, error} = props.status;

  const getImageFromProps = () => {
    if (loading || error) return <div className='image-box skeleton'/>;
    return <BackgroundImage data={image} />;
  };

  return (
    <div className='xp-teaser'>
      {subject && <Subject>{subject}</Subject>}
      {image && 
        <a className='teaser-aria' href={articleUrl} aria-label={`Imagem da matéria ${title}`}>
          {getImageFromProps()}
        </a>
      }
      <a className='teaser-aria' href={articleUrl} aria-label={`Abrir matéria ${title}`}>
        <Typography title>
          {title}
        </Typography>
      </a>
      <Typography subtitle>
        {subtitle}
      </Typography>
    </div>
  );
};

Teaser.propTypes = {
  content: PropTypes.shape({
    articleUrl: PropTypes.string,
    image: PropTypes.object,
    subtitle: PropTypes.string,
    subject: PropTypes.string,
    title: PropTypes.string,
  }),
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
};

export default Teaser;