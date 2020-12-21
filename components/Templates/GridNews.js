import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Teaser from '../Teasers';
import {SectionTitle} from '../Typography';
import colors from '../../styles/variables/colors.json'

const GridNews = ({content, domain, lazy, status, theme}) => {
  const {activeColor} = theme;
  const {items, title} = content;
  let items_pqueue = content['items-pqueue'];
  let items_list =  items_pqueue && items_pqueue.length > 0 ? items_pqueue : items;
  
  const propsTemplate = {
    align: 'between', 
    custom: 'templates-newsgrid', 
    mb: '6',
    md: {align: 'row', mb: '5'}
  };

  let titleSize;
  
  if(items_list.length === 2) {
    propsTemplate.custom = 'templates-newsgrid two';
    titleSize = 3;
  }
  if(items_list.length === 3) {
    propsTemplate.custom = 'templates-newsgrid three';
    titleSize = 3;
  }
  if(items_list.length === 4) {
    propsTemplate.custom = 'templates-newsgrid four';
    titleSize = 3;
  }
  if(items_list.length === 5) {
    propsTemplate.custom = 'templates-newsgrid five';
  }

  return (
    <React.Fragment>
      {title && title !== '' && <SectionTitle weight='bold' gutter={3} color={activeColor}>{title}</SectionTitle>}
      <Block {...propsTemplate}>
        {map(items_list, (item, key) =>
          <Teaser 
            key={key}
            content={item}
            domain={domain}
            hasImageTop={true}
            lazy={lazy}
            status={status}
            subjectSize={2}
            subjectColor={activeColor}
            titleSize={titleSize}
            titleColor='neutral-2'
            subtitleColor='neutral-4'
            dateColor='neutral-4'
            titleWeight='bold'
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
  }),
  domain: PropTypes.string,
  lazy: PropTypes.func,
  status: PropTypes.object,
  theme: PropTypes.shape({
    activeColor: PropTypes.oneOf(colors)
  })
};
export default GridNews;