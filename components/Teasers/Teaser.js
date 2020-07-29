import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Image from '../Image/Teaser';
import Subject from '../Subject';
import Typography from '../Typography';

const Teaser = ({content, hasImageTop, hasSubjectFilled, hasSubtitle, status}) => {
  const {image, name, path, subject, subtitle} = content;
  const {loading, error} = status;
  const propsTeaser = {
    align: hasImageTop ? 'col' : 'row left',
    custom: 'teaser-default',
    mb: '4'
  };
  const propsImage = {
    align: 'row',
    custom: `teaser-image ${hasImageTop ? 'image-top' : 'image-left'}`
  };
  const propsContent = {
    custom: 'teaser-content',
    mt: '3',
    mb: '3',
    ml: '2',
    mr: '2',
    w: '100p-4'
  };
  const propsDate = {
    custom: 'teaser-date',
    mt: '4',
    w: '100p'
  };
  const propsSubject = {
    custom: 'teaser-subject'
  };
  const propsTitle = {
    custom: 'teaser-title'
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
            <Subject filled={hasSubjectFilled}>{subject}</Subject>
          </Block>
        }
        <Block {...propsTitle}>
          <a className='teaser-aria' href={path} aria-label={`Abrir matéria ${name}`}>
            <Typography custom='teaser-title'>{name}</Typography>
          </a>
        </Block>
        {subtitle && hasSubtitle &&
          <Typography custom='teaser-subtitle'>{subtitle}</Typography>
        }
        {content['time-published'] && (
          <Block {...propsDate}>
            <Typography custom='teaser-datetime'>{content['time-published']}</Typography>
          </Block>
        )}
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
  hasImageTop: PropTypes.bool,
  hasSubtitle: PropTypes.bool,
  hasSubjectFilled: PropTypes.bool,
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
};
Teaser.defaultProps = {
  hasImageTop: false,
  hasSubtitle: false,
  hasSubjectFilled: false
};

export default Teaser;