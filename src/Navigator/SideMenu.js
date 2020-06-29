import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const SideMenu = ({children, functions, status}) => {
  const menuIsOpen = status.opened ? 'opened' : 'closed';
  return (
    <Block 
      custom={`xp-menu-modal ${menuIsOpen}`} 
      p="0">
      <Block 
        custom="xp-menu-opacity" 
        functions={{handleClick: functions.onCloseModal}}
        p="0">
      </Block>
      <Block 
        custom="xp-menu-left" 
        bgColor="white" 
        p="0">
        {children && children}
      </Block>
    </Block>
  );
};

/* required props */
SideMenu.propTypes = {
  children: PropTypes.node,
  content: PropTypes.object,
  functions: PropTypes.shape({
    onCloseModal: PropTypes.func
  }),
  status: PropTypes.shape({
    opened: PropTypes.bool
  })
};
SideMenu.defaultProps = {
  content: {},
  functions: {
    onCloseModal: () => null
  },
  status: {
    opened: false
  }
};
export default SideMenu;