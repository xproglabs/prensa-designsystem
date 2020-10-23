import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import Block from '../Block';
import Teaser from '../Teasers';
import {SectionTitle} from '../Typography';

const GridNews = ({
  content,
  domain,
  lazy,
  status,
  theme,
  customTitle,
  teaserProps
}) => {

  const {color} = theme;
  const {items, title} = content;
  
  let items_pqueue = content['items-pqueue'];
  let items_list =  items_pqueue && items_pqueue.length > 0 ? items_pqueue : items;
  let teaserAmount;
  
  switch(items_list.length) {
    case 2:
      teaserAmount = 'two';
      break;
    case 3:
      teaserAmount = 'three';
      break;
    case 4:
      teaserAmount = 'four';
      break;
    case 5:
      teaserAmount = 'five';
      break;
    default:
      return null;
  }

  const renderBlockTitle = () => {
    if (!title) return null;
    if (customTitle) return React.cloneElement(customTitle, {children: title, color: color});
    return <SectionTitle weight='bold' gutter={3} color={color}>{title}</SectionTitle>;
  };

  return (
    <React.Fragment>
      {renderBlockTitle()}
      <Block custom={`Prensa-Templates-Newsgrid ${teaserAmount}`} align='between' mb='6' md={{align: 'row', mb: '5'}}>
        {map(items_list, (item, key) =>
          <Teaser 
            key={key}
            content={item}
            domain={domain}
            lazy={lazy}
            status={status}
            subjectColor={color}
            hasImageTop={true}
            {...teaserProps}
          />
        )}
      </Block>
    </React.Fragment>
  );
};

GridNews.propTypes = {
  content: PropTypes.shape({
    items: PropTypes.array,
    title: PropTypes.string,
    color: PropTypes.string,
    ['items-pqueue']: PropTypes.array
  }),
  domain: PropTypes.string,
  lazy: PropTypes.func,
  status: PropTypes.object,
  theme: PropTypes.shape({
    color: PropTypes.oneOf(colors)
  }),
  customTitle: PropTypes.element,
  teaserProps: PropTypes.object,
};

export default GridNews;