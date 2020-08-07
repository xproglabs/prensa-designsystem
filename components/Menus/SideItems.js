import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import SvgIcArrow from '../../icons/IcArrow'

const SideMenuItems = ({content, functions}) => {

  const Item = ({item}) => {
    const hasSubitems = item.subitems.length > 0; 
    return (
      <Block custom="sidemenu-group" mb="4">
        <Block custom="sidemenu-group-item" pb="2" align='row between middle' onClick={() => functions.onMenuItem(item)} >
          {!hasSubitems ? 
            <a href={item.path}>{item.name}</a> :
            <span href={item.path}>{item.name}</span>}
            <SvgIcArrow />
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