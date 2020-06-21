import PropTypes from 'prop-types';
import React from 'react';

import Subject from '../Subject';
import Typography from '../Typography';
import {BackgroundImage} from '../utils';

const TeaserFeatured = (props) => {
  const {title, subject, articleUrl} = props.content;
  const {loading, error} = props.status;
  const imageData = props.image;

  const getImageFromProps = () => {
    if (loading || error) return <div className='image-box skeleton'/>;
    return <BackgroundImage data={imageData} />;
  };

  const teaserHasImage = imageData ? 'has-image' : 'no-image';

  return (
    <div className={`xp-teaser-featured ${teaserHasImage}`}>
      {imageData && getImageFromProps()}
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
  content: PropTypes.shape({
    title: PropTypes.string,
    subject: PropTypes.string,
    articleUrl: PropTypes.string
  }),
  image: PropTypes.shape({
    imageUrl: PropTypes.string,
    captionAndByline: PropTypes.string,
  }),
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
};

export default TeaserFeatured;