import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import SectionTitle from '../SectionTitle';
import Teaser from '../Teasers';

const GridNews = props => {
  const {content, domain, lazy, status} = props;
  const {items, title, color} = content;
  
  const propsTemplate = {
    align: 'between', 
    custom: 'templates-newsgrid', 
    mb: '6',
    md: {align: 'row', mb: '5'}
  };
  
  if(items.length === 2) {
    propsTemplate.custom = 'templates-newsgrid two';
  }
  if(items.length === 3) {
    propsTemplate.custom = 'templates-newsgrid three';
  }
  if(items.length === 4) {
    propsTemplate.custom = 'templates-newsgrid four';
  }

  return (
    <>
      {title && title !== ''&& <SectionTitle color={color}>{title}</SectionTitle>}
      <Block {...propsTemplate}>
        {map(items, (item, key) =>
          <Teaser 
            key={key}
            content={item}
            domain={domain}
            hasImageTop={true}
            lazy={lazy}
            status={status}
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