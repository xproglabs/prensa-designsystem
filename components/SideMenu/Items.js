import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const SideMenuItems = ({content, functions}) => {

  const Item = ({item}) => {
    const hasSubitems = item.subitems.length > 0; 
    return (
      <Block custom="sidemenu-group" mt="4">
        <Block custom="sidemenu-group-item" pb="2" onClick={() => functions.onMenuItem(item)} >
          {!hasSubitems ? 
            <a href={item.path}>{item.name}</a> :
            <span href={item.path}>{item.name}</span>}
        </Block>
      </Block>
    );
  };
  Item.propTypes = {
    item: PropTypes.object
  };
  return (
    <Block custom='sidemenu-items'>
      {map(content.items, (item, key) => 
        <Item item={item} key={key} />)}
    </Block>
  );
};

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