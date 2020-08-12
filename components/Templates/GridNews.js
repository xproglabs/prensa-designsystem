import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {Teaser} from '../Teasers';
import SectionTitle from '../SectionTitle'

const GridNews = props => {
  const {content, domain, status} = props;
  const {items, title} = content;
  
  const propsTemplate = {
    align: 'between', 
    custom: 'templates-newsgrid', 
    mb: '6',
    md: {align: 'row', mb: '5'}
  };
  
  if(items.length === 3) {
    propsTemplate.custom = 'templates-newsgrid three';
  }
  if(items.length === 4) {
    propsTemplate.custom = 'templates-newsgrid four';
  }

  return (
    <>
      {title && title !== ""&& <SectionTitle name={title} />}
      <Block {...propsTemplate}>
        {map(items, (item, key) =>
          <Teaser 
            key={key}
            content={item}
            domain={domain}
            hasImageTop={true}
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
  status: PropTypes.object
};
export default GridNews;