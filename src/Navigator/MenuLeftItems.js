import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const MenuLeftItems = ({content, functions}) => {

  const SubItem = ({item}) => {
    return (
      <Block 
        custom="subitem" 
        functions={{handleClick: () => functions.onMenuItem(item.path)}}
        mt="xs">
        {item.name}
        {item.path}
      </Block>
    );
  };
  SubItem.propTypes = {
    item: PropTypes.object
  };

  const LeftItem = ({item}) => (
    <Block 
      custom="listitem"
      mt="md">
      <Block 
        custom="item" 
        functions={{handleClick: () => functions.onMenuItem(item.path)}}
        mb="md"
        mt="md">
        {item.name}
        {item.path}
      </Block>
      <Block 
        custom="subitems">
        {map(item.subitems, (item, key) => 
          <SubItem item={item} key={key} />)}
      </Block>
    </Block>
  );
  LeftItem.propTypes = {
    item: PropTypes.object
  };

  return (
    <Block 
      custom={'xp-menu-left-items'}>
      {map(content.items, (item, key) => 
        <LeftItem item={item} key={key} />)}
    </Block>
  );
};

/* required props */
MenuLeftItems.propTypes = {
  content: PropTypes.object,
  functions: PropTypes.shape({
    onMenuItem: PropTypes.func
  })
};
MenuLeftItems.defaultProps = {
  content: {}
};
export default MenuLeftItems;