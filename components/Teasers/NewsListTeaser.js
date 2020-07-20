import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Image from '../Image/Teaser';
import Typography from '../Typography';
// import {BackgroundImage} from '../utils';

const NewsListTeaser = props => {
  const {path, image, subtitle, name} = props.content;
  const {loading, error} = props.status;
  const propsTeaser = {
    align: 'col',
    custom: 'teaser-card',
    mb: '4',
    'sm': {
      align: 'row left'
    }
  };
  const propsImage = {
    align: 'row',
    w: '100p',
    'sm': {
      w: 'auto'
    }
  };
  const propsContent = {
    m: '4',
    w: '100p-8',
    'sm': {
      w: 'auto'
    }
  };
  const TeaserImage = () => {
    if (loading || error || !image) 
      return <div className='image-box skeleton'/>;

    if(!image['image-contentId'])
      return null; 

    return (
      <Block {...propsImage}>
        <a href={path} aria-label={`Imagem da matéria ${name}`}>
          <Image value={image} />
        </a>
      </Block>
    );
  };
  return (
    <Block {...propsTeaser}>
      <TeaserImage />
      <Block {...propsContent}>
        <a href={path} aria-label={`Abrir matéria ${name}`}>
          <Typography custom='teaser-card-title'>
            {name}
          </Typography>
        </a>
        {subtitle && 
          <Typography custom='teaser-card-subtitle'>
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