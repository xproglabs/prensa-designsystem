import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {Teaser} from '../Teasers';

const ListNews = ({content, status}) => {

  if (!content || content.length === 0) {
    return (
      <pre>Items not found</pre>
    );
  }

  return (
    <Block custom="list-news">
      {map(content, (item, key) => 
        <Teaser content={item} status={status} key={key} />)}
    </Block>
  );
};

ListNews.propTypes = {
  content: PropTypes.array.isRequired,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
};

export default ListNews;