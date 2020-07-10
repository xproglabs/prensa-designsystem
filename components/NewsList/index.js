import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const List = ({content}) => {

  const Item = ({item}) => {
    return (
      <Block 
        custom="item" 
        mt="xs">
        <a href={item.path}>
          {item.name}
        </a>
      </Block>
    );
  };
  Item.propTypes = {
    item: PropTypes.object
  };

  if(!content.items || content.items.length === 0) {
    return (
      <Block 
        custom="news-list">
        <pre>Items not found</pre>
      </Block>
    );
  }
  return (
    <Block 
      custom="news-list">
      {map(content.items, (item, key) => 
        <Item item={item} key={key} />)}
    </Block>
  );
};

/* required props */
List.propTypes = {
  content: PropTypes.object,
  functions: PropTypes.shape({
    onCloseModal: PropTypes.func
  }),
  status: PropTypes.shape({
    opened: PropTypes.bool
  })
};
List.defaultProps = {
  content: {},
  functions: {
    onCloseModal: () => null
  },
  status: {
    opened: false
  }
};
export default List;