import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {NewsListTeaser} from '../Teasers';

const NewsList = ({content, status}) => {

  if (!content || content.length === 0) {
    return (
      <pre>Items not found</pre>
    );
  }

  return (
    <Block custom="news-list">
      {map(content, (item, key) => <NewsListTeaser content={item} status={status} key={key} />)}
    </Block>
  );
};

NewsList.propTypes = {
  content: PropTypes.array.isRequired,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
};

export default NewsList;