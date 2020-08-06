import PropTypes from 'prop-types';
import React from 'react';

import Subject from '../Subject';
import Typography from '../Typography';
import {BackgroundImage} from '../utils';

const TeaserFeatured = (props) => {
  const {name, subject, path, image} = props.content;
  const {loading, error} = props.status;

  const getImageFromProps = () => {
    if (loading || error) return <div className='image-box skeleton'/>;
    return <BackgroundImage data={image} />;
  };

  const teaserHasImage = image ? 'has-image' : 'no-image';

  return (
    <div className={`teaser-featured ${teaserHasImage}`}>
      {image && 
        <a className='teaser-aria' href={path} aria-label={`Imagem da matéria ${name}`}>
          {getImageFromProps()}
        </a>
      }
      <div className='teaser-content'>
        {subject && <Subject filled>{subject}</Subject>}
        <a className='teaser-aria' href={path} aria-label={`Abrir matéria ${name}`}>
          <Typography tokenVariant='title' size='xl'>
            {name}
          </Typography>
        </a>
      </div>
    </div>
  );
};

TeaserFeatured.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    subject: PropTypes.string,
    path: PropTypes.string,
    image: PropTypes.object
  }),
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
};

export default TeaserFeatured;