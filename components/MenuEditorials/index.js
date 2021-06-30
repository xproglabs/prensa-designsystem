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

const MenuEditorials = ({amp, color, items, title, titleProps, groupSubItemProps, groupTitleProps, menuItemProps, px, py, removeBorders}) => {
  return (
    <Block px={px} py={py}>
      {title &&
        <Typography {...titleDefaultProps} {...titleProps}>
          {title}
        </Typography>
      }
      {items && 
        map(items, (item, key) => amp ? 
          <AmpMenuItem color={color} content={item} groupTitleProps={groupTitleProps} groupSubItemProps={groupSubItemProps} menuItemProps={menuItemProps} key={key} removeBorders={removeBorders} />
          :
          <MenuItem color={color} content={item} groupTitleProps={groupTitleProps} groupSubItemProps={groupSubItemProps} menuItemProps={menuItemProps} key={key} removeBorders={removeBorders} />)
      }
    </Block>
  );
};

MenuEditorials.defaultProps = {
  px: '20px',
  py: '20px'
};

MenuEditorials.propTypes = {
  amp: PropTypes.bool,
  color: PropTypes.string,
  items: PropTypes.array,
  title: PropTypes.string,
  titleProps: PropTypes.object,
  groupTitleProps: PropTypes.object,
  groupSubItemProps: PropTypes.object,
  menuItemProps: PropTypes.object,
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  removeBorders: PropTypes.bool,
};

export default MenuEditorials;