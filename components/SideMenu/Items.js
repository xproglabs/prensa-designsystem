import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const SideMenuItems = ({content, functions}) => {

  const SubItem = ({item}) => {
    return (
      <Block 
        custom="subitem" 
        functions={{handleClick: () => functions.onMenuItem(item.path)}}
        mt="xs">
        <a href={item.path}>
          {item.name}
        </a>
      </Block>
    );
  };
  SubItem.propTypes = {
    item: PropTypes.object
  };

  const Item = ({item}) => (
    <Block 
      custom="listitem"
      mt="md">
      <Block 
        custom="item" 
        functions={{handleClick: () => functions.onMenuItem(item.path)}}
        mb="md"
        mt="md">
        <a href={item.path}>
          {item.name}
        </a>
      </Block>
      <Block 
        custom="subitems">
        {map(item.subitems, (item, key) => 
          <SubItem item={item} key={key} />)}
      </Block>
    </Block>
  );
  Item.propTypes = {
    item: PropTypes.object
  };

  return (
    <Block 
      custom={'xp-menu-left-items'}>
      {map(content.items, (item, key) => 
        <Item item={item} key={key} />)}
    </Block>
  );
};

/* required props */
SideMenuItems.propTypes = {
  content: PropTypes.object,
  functions: PropTypes.shape({
    onMenuItem: PropTypes.func
  })
};
SideMenuItems.defaultProps = {
  content: {}
};
export default SideMenuItems;