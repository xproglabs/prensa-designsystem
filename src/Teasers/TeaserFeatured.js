import PropTypes from 'prop-types';
import React from 'react';

import Subject from '../Subject';
import Typography from '../Typography';
import {BackgroundImage} from '../utils';

const TeaserFeatured = (props) => {
  const {title, subject, articleUrl} = props.getContent;
  const {loading, error} = props.getStatus;
  const imageData = props.getImage;

  const getImageFromProps = () => {
    if (!imageData || loading || error) return <div className='image-box skeleton'/>;
    return <BackgroundImage data={imageData} />;
  };

  return (
    <div className='xp-teaser-featured'>
      {getImageFromProps()}
      <div className='teaser-content'>
        {subject && <Subject filled>{subject}</Subject>}
        <a href={articleUrl} aria-label={`Abrir matéria ${title}`}>
          <Typography title size='xl'>
            {title}
          </Typography>
        </a>
      </div>
    </div>
  );
};

TeaserFeatured.propTypes = {
  getContent: PropTypes.shape({
    title: PropTypes.string,
    subject: PropTypes.string,
    articleUrl: PropTypes.string
  }),
  getImage: PropTypes.shape({
    imageUrl: PropTypes.string,
    captionAndByline: PropTypes.string,
  }),
  getStatus: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })

};

export default TeaserFeatured;