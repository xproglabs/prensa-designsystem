import {map} from 'lodash';
import {Block, Typography, MenuContainer} from 'prensa';
import PropTypes from 'prop-types';
import React from 'react';

import MenuItem from './MenuItem';


const Menu = ({content, close, footer, header, open}) => {
  return (
    <MenuContainer open={open} close={close}>
      {header}
      <Block px='20px' py='20px'>
        <Typography
          element='p'
          color='neutral3'
          fontFamily='secondary'
          fontSize='14px'
          transform='uppercase'
          mb={3}
        >
          Editorias
        </Typography>
        {map(content, (item, key) => <MenuItem content={item} key={key} />)}
      </Block>
      {footer}
    </MenuContainer>
  );
};

Menu.propTypes = {
  content: PropTypes.string,
  close: PropTypes.string,
  footer: PropTypes.node,
  header: PropTypes.node,
  open: PropTypes.bool,
};

export default Menu;