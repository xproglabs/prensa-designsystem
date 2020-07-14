import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Typography from '../Typography';
import {BackgroundImage} from '../utils';

const NewsListTeaser = props => {
  const {path, image, subtitle, name} = props.content;
  const {loading, error} = props.status;

  const getImageFromProps = () => {
    if (loading || error || !image) return <div className='image-box skeleton'/>;
    return <BackgroundImage data={image} />;
  };

  const wrapperProps = {
    align: 'row',
    mb: '4',
    'md': {
      mb: '2',
    }
  };

  const imageWrapperProps = {
    align: 'row',
    'md': {
      p: '2',
    }
  };

  const contentWrapperProps = {
    p: '4',
    'md': {
      p: '2',
      pr: '1'
    }
  };

  return (
    <Block {...wrapperProps}>
      <Block {...imageWrapperProps}>
        <a href={path} aria-label={`Imagem da matéria ${name}`}>
          {getImageFromProps()}
        </a>
      </Block>
      <Block {...contentWrapperProps}>
        <a href={path} aria-label={`Abrir matéria ${name}`}>
          <Typography tokenVariant='title'>
            {name}
          </Typography>
        </a>
        {subtitle && 
          <Typography tokenVariant='title'>
            {subtitle}
          </Typography>
        }
      </Block>
    </Block>
  );
};

NewsListTeaser.propTypes = {
  content: PropTypes.shape({
    path: PropTypes.string,
    image:  PropTypes.object,
    subtitle: PropTypes.string,
    name: PropTypes.string
  }),
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
};

export default NewsListTeaser;