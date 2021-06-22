import PropTypes from 'prop-types';
import React from 'react';
import {withTheme} from 'styled-components';

import Block from '../../Block';
import {Backdrop, Content} from './styled';

const Menu = ({backgroundColor, children, close, open, menuAnchor, px, py, width}) => {

  if (!open) return null;

  return (
    <Block>
      <Backdrop onClick={close} />
      <Content $backgroundColor={backgroundColor} px={px} py={py} menuAnchor={menuAnchor} width={width}>
        {children}
      </Content>
    </Block>
  );
};

Menu.defaultProps = {
  backgroundColor: 'white',
  menuAnchor: 'left'
};

Menu.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  close: PropTypes.func,
  menuAnchor: PropTypes.oneOf(['left', 'right']),
  open: PropTypes.bool,
  px: PropTypes.number,
  py: PropTypes.number,
  width: PropTypes.string
};

export default withTheme(Menu);