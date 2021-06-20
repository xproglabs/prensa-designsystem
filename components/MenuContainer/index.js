import PropTypes from 'prop-types';
import React from 'react';
import {withTheme} from 'styled-components';

import Block from '../Block';
import {Backdrop, Content} from './styled';

const MenuContainer = props => {

  const {children, close, menuAnchor, open, px, py} = props;

  if (!open) return null;

  return (
    <Block>
      <Backdrop onClick={close} />
      <Content px={px} py={py} menuAnchor={menuAnchor}>
        {children}
      </Content>
    </Block>
  );
};

MenuContainer.defaultProps = {
  menuAnchor: 'left',
  px: 2,
  py: 2
};

MenuContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.node]), 
  close: PropTypes.func.isRequired,
  menuAnchor: PropTypes.oneOf(['left', 'right']),
  open: PropTypes.bool.isRequired,
  px: PropTypes.number,
  py: PropTypes.number
};

export default withTheme(MenuContainer);