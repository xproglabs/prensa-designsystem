import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Typography from '../Typography';

const MostReadItem = ({content, number}) => {
  const {name, path} = content;
  const propsMostItem = {
    align: 'row left',
    custom: 'most-read-item',
    mb: '4'
  };
  const propsContent = {
    custom: 'most-read-content',
    mb: '3',
    ml: '2',
    mr: '2',
    mt: '3',
    w: '100p'
  };
  const propsNumber = {
    custom: 'most-read-number'
  };
  const propsTitle = {
    custom: 'most-read-title',
    ml: '3'
  };
  const position = number + 1; 
  
  return (
    <Block {...propsMostItem}>
      <Block {...propsContent} align='row'>
        <Block {...propsNumber} align='row center middle'>{position}</Block>
        <Block {...propsTitle}>
          <a className='teaser-aria' href={path} aria-label={`Abrir matéria ${name}`}>
            <Typography custom='teaser-title'>{name}</Typography>
          </a>
        </Block>
      </Block>
    </Block>
  );
};

MostReadItem.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string
  }),
  number: PropTypes.integer,
};

export default MostReadItem;