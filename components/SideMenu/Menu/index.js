import {MenuContainer} from 'prensa';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({children, close, open}) => {
  return (
    <MenuContainer open={open} close={close}>
      {children}
    </MenuContainer>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
  close: PropTypes.string,  
  open: PropTypes.bool,
};

export default Menu;