import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {Teaser} from '../Teasers';

const ListNews = ({content, domain, status}) => {

  if (!content || content.length === 0) {
    return (
      <pre>Items not found</pre>
    );
  }

  return (
    <Block custom="list-news">
      {map(content, (item, key) => 
        <Teaser 
          content={item} 
          domain={domain}
          hasSubjectFilled={true} 
          hasImageTop={true}
          status={status} 
          key={key} />
        )}
    </Block>
  );
};

ListNews.propTypes = {
  content: PropTypes.array.isRequired,
  domain: PropTypes.string,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
};

export default ListNews;