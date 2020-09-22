import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import SectionTitle from '../SectionTitle';
import Teaser from '../Teasers';

const GridNews = props => {
  const {content, domain, lazy, status} = props;
  const {items, title} = content;
  let items_pqueue = content['items-pqueue'];
  let items_list =  items_pqueue && items_pqueue.length > 0 ? items_pqueue : items;
  
  const propsTemplate = {
    align: 'between', 
    custom: 'templates-newsgrid', 
    mb: '6',
    md: {align: 'row', mb: '5'}
  };
  
  if(items_list.length === 2) {
    propsTemplate.custom = 'templates-newsgrid two';
  }
  if(items_list.length === 3) {
    propsTemplate.custom = 'templates-newsgrid three';
  }
  if(items_list.length === 4) {
    propsTemplate.custom = 'templates-newsgrid four';
  }

  return (
    <>
      {title && title !== ''&& <SectionTitle name={title} />}
      <Block {...propsTemplate}>
        {map(items_list, (item, key) =>
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
  content: PropTypes.object,
  domain: PropTypes.string,
  lazy: PropTypes.func,
  status: PropTypes.object
};
export default GridNews;