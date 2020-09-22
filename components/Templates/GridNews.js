import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Teaser from '../Teasers';
import {SectionTitle} from '../Typography';

const GridNews = props => {
  const {content, domain, lazy, status} = props;
  const {items, title, color} = content;
  
  const propsTemplate = {
    align: 'between', 
    custom: 'templates-newsgrid', 
    mb: '6',
    md: {align: 'row', mb: '5'}
  };

  let titleSize;
  
  if(items.length === 2) {
    propsTemplate.custom = 'templates-newsgrid two';
    titleSize = 7;
  }
  if(items.length === 3) {
    propsTemplate.custom = 'templates-newsgrid three';
    titleSize = 3;
  }
  if(items.length === 4) {
    propsTemplate.custom = 'templates-newsgrid four';
    titleSize = 3;
  }

  return (
    <>
      {title && title !== '' && <SectionTitle color={color}>{title}</SectionTitle>}
      <Block {...propsTemplate}>
        {map(items, (item, key) =>
          <Teaser 
            key={key}
            content={item}
            domain={domain}
            hasImageTop={true}
            lazy={lazy}
            status={status}
            subjectSize={2}
            titleSize={titleSize}
            titleColor='neutral-2'
            subtitleColor='neutral-4'
            dateColor='neutral-4'
          />
        )}
      </Block>
    </>
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
  status: PropTypes.object
};
export default GridNews;