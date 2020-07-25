import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {Teaser} from '../Teasers';

const GridNews = props => {
  const {content, status} = props;
  const {items} = content;
  const propsTemplate = {custom: 'templates-newsgrid', md: {align: 'row'}};
  
  if(items.length === 3) {
    propsTemplate.custom = 'templates-newsgrid three';
  }
  if(items.length === 4) {
    propsTemplate.custom = 'templates-newsgrid four';
  }

  return (
    <Block {...propsTemplate}>
      {map(items, (item, key) =>
        <Teaser 
          key={key}
          content={item}
          status={status}
        />
      )}
    </Block>
  );
};
GridNews.propTypes = {
  content: PropTypes.object,
  status: PropTypes.object
};
export default GridNews;