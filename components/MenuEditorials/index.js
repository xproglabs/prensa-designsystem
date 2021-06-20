import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import {Block} from '../Block';
import {Typography} from '../Typography';
import AmpMenuItem from './AmpMenuItem';
import MenuItem from './MenuItem';

const MenuEditorials = ({amp, items, title}) => {
  return (
    <Block px='20px' py='20px'>
      {title &&
        <Typography
          element='p'
          color='neutral3'
          fontFamily='secondary'
          fontSize='14px'
          transform='uppercase'
          mb={3}
        >
          {title}
        </Typography>
      }
      {items && 
        map(items, (item, key) => amp ? 
          <AmpMenuItem content={item} key={key} />
          :
          <MenuItem content={item} key={key} />)
      }
    </Block>
  );
};

MenuEditorials.propTypes = {
  amp: PropTypes.bool,
  items: PropTypes.array,
  title: PropTypes.string,
};

export default MenuEditorials;