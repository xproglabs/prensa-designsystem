import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Image from '../Image/Teaser';
import Subject from '../Subject';
import Typography from '../Typography';

const Teaser = ({content, status}) => {
  const {image, name, path, subject, subtitle} = content;
  const {loading, error} = status;
  const propsTeaser = {
    align: 'col',
    custom: 'teaser-default',
    mb: '4',
    'sm': {
      align: 'row left'
    }
  };
  const propsImage = {
    align: 'row',
    custom: 'teaser-image',
    mb: '1',
    w: '100p',
    'md': {
      mb: '0',
      mr: '1',
      w: 'auto'
    }
  };
  const propsContent = {
    mt: '3',
    mb: '3',
    ml: '2',
    mr: '2',
    w: '100p-4',
    'md': {
      m: '3',
      w: 'auto'
    }
  };
  const propsDate = {
    custom: 'teaser-date',
    mt: '4',
    w: '100p'
  };
  const propsSubject = {
    mb: '1',
    mt: '0'
  };
  const propsTitle = {

  };
  const TeaserImage = () => {
    if (loading || error || !image) 
      return <div className='image-box skeleton'/>;

    if(!image['image-contentId'])
      return null; 

    return (
      <Block {...propsImage}>
        <a className='teaser-aria' href={path} aria-label={`Imagem da matéria ${name}`}>
          <Image value={image} />
        </a>
      </Block>
    );
  };
  return (
    <Block {...propsTeaser}>
      <TeaserImage />
      <Block {...propsContent}>
        {subject && 
          <Block {...propsSubject}>
            <Subject filled>{subject}</Subject>
          </Block>
        }
        <Block {...propsTitle}>
          <a className='teaser-aria' href={path} aria-label={`Abrir matéria ${name}`}>
            <Typography custom='teaser-title'>{name}</Typography>
          </a>
        </Block>
        {subtitle && 
          <Typography custom='teaser-subtitle'>{subtitle}</Typography>
        }
        <Block {...propsDate}>
          <Typography custom='teaser-datetime'>{content['time-published']}</Typography>
        </Block>
      </Block>
    </Block>
  );
};

Teaser.propTypes = {
  content: PropTypes.shape({
    image: PropTypes.object,
    name: PropTypes.string,
    path: PropTypes.string,
    subtitle: PropTypes.string,
    subject: PropTypes.string,
    ['time-published']: PropTypes.string
  }),
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
};

export default Teaser;