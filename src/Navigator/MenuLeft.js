import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const MenuLeft = ({functions, status}) => {
  const menuModalClasses = status.opened ? 'opened' : 'closed';
  return (
    <Block 
      custom={`xp-menu-modal ${menuModalClasses}`} 
      p="0">
      <Block 
        custom="xp-menu-opacity" 
        functions={{handleClick: functions.onCloseModal}}
        p="0"></Block>
      <Block 
        custom="xp-menu-left" 
        bgColor="white" 
        p="0">
        LeftContent===!284397q
      </Block>
    </Block>
  );
};

/* required props */
MenuLeft.propTypes = {
  content: PropTypes.object,
  functions: PropTypes.shape({
    onCloseModal: PropTypes.func
  }),
  status: PropTypes.shape({
    opened: PropTypes.bool
  })
};
MenuLeft.defaultProps = {
  content: {},
  functions: {
    onCloseModal: () => null
  },
  status: {
    opened: false
  }
};
export default MenuLeft;