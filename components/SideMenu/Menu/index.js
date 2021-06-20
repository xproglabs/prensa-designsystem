import PropTypes from 'prop-types';
import React from 'react';
import {withTheme} from 'styled-components';

import Block from '../../Block';
import {Backdrop, Content} from './styled';

const Menu = ({children, close, open, menuAnchor, px, py}) => {

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

Menu.defaultProps = {
  menuAnchor: 'left'
};

Menu.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func,
  menuAnchor: PropTypes.oneOf(['left', 'right']),
  open: PropTypes.bool,
  px: PropTypes.number,
  py: PropTypes.number
};

export default withTheme(Menu);