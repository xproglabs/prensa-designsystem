import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weights from '../../styles/variables/weight.json';
import Block from '../Block';
import {MostReadNumber, NewsTitle} from '../Typography';

const TeaserMostRead = ({content, number, titleSize, titleColor, titleWeight, numberColor, circleColor}) => {
  const {name, path} = content;
  const propsMostItem = {
    align: 'row left',
    custom: 'most-read-item',
    mb: '2'
  };
  const propsContent = {
    custom: 'most-read-content',
    mb: '3',
    ml: '2',
    mr: '2',
    mt: '3',
    w: '100p-3'
  };
  const propsNumber = {
    custom: 'most-read-number',
    bg: `color-${circleColor}`
  };
  const propsTitle = {
    custom: 'most-read-title',
    ml: '3',
    w: '100p-8',
    align: 'middle'
  };
  const position = number + 1; 
  
  return (
    <Block {...propsMostItem}>
      <Block {...propsContent} align='row'>
        <Block {...propsNumber} align='row center middle'>
          <MostReadNumber color={numberColor} weight={titleWeight}>{position}</MostReadNumber>
        </Block>
        <Block {...propsTitle}>
          <a className='teaser-aria' href={path} aria-label={`Abrir matéria ${name}`}>
            <NewsTitle color={titleColor} size={titleSize} weight={titleWeight}>{name}</NewsTitle>
          </a>
        </Block>
      </Block>
    </Block>
  );
};

TeaserMostRead.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string
  }),
  circleColor: PropTypes.oneOf(colors),
  number: PropTypes.number,
  titleSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
  titleColor: PropTypes.oneOf(colors),
  titleWeight: PropTypes.oneOf(weights),
  numberColor: PropTypes.oneOf(colors)
};

export default TeaserMostRead;