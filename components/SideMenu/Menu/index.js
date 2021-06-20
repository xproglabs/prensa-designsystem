import PropTypes from 'prop-types';
import React from 'react';

import {MenuContainer} from '../../MenuContainer';

const Menu = ({children, close, open}) => {
  return (
    <MenuContainer open={open} close={close}>
      {children}
    </MenuContainer>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func,  
  open: PropTypes.bool,
};

export default Menu;