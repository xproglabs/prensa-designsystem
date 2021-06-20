import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Typography from '../Typography';
import AmpMenuItem from './AmpMenuItem';
import MenuItem from './MenuItem';

const titleDefaultProps = {
  element: 'p',
  color: 'neutral3',
  fontFamily: 'secondary',
  fontSize: '14px',
  transform: 'uppercase',
  mb: 3,
};

const MenuEditorials = ({amp, items, title, titleProps, groupTitleProps}) => {
  return (
    <Block px='20px' py='20px'>
      {title &&
        <Typography {...titleDefaultProps} {...titleProps}>
          {title}
        </Typography>
      }
      {items && 
        map(items, (item, key) => amp ? 
          <AmpMenuItem content={item} groupTitleProps={groupTitleProps} key={key} />
          :
          <MenuItem content={item} groupTitleProps={groupTitleProps} key={key} />)
      }
    </Block>
  );
};

MenuEditorials.defaultProps = {
  titleProps: titleDefaultProps,
};

MenuEditorials.propTypes = {
  amp: PropTypes.bool,
  items: PropTypes.array,
  title: PropTypes.string,
  titleProps: PropTypes.object,
  groupTitleProps: PropTypes.object,
};

export default MenuEditorials;