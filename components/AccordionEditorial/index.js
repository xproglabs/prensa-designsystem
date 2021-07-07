import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Typography from '../Typography';
import AmpGroup from './AmpGroup';
import Group from './Group';

const titleDefaultProps = {
  element: 'p',
  color: 'neutral3',
  fontFamily: 'secondary',
  fontSize: '14px',
  transform: 'uppercase',
  mb: 3,
};

const AccordionEditorial = ({amp, color, items, title, titleProps, groupItemProps, groupSubItemProps, groupTitleProps, px, py, removeBorders}) => {
  return (
    <Block px={px} py={py}>
      {title &&
        <Typography {...titleDefaultProps} {...titleProps}>
          {title}
        </Typography>
      }
      {items && 
        map(items, (item, key) => amp ? 
          <AmpGroup color={color} content={item} groupTitleProps={groupTitleProps} groupSubItemProps={groupSubItemProps} groupItemProps={groupItemProps} key={key} removeBorders={removeBorders} />
          :
          <Group color={color} content={item} groupTitleProps={groupTitleProps} groupSubItemProps={groupSubItemProps} groupItemProps={groupItemProps} key={key} removeBorders={removeBorders} />)
      }
    </Block>
  );
};

AccordionEditorial.propTypes = {
  amp: PropTypes.bool,
  color: PropTypes.string,
  items: PropTypes.array,
  title: PropTypes.string,
  titleProps: PropTypes.object,
  groupTitleProps: PropTypes.object,
  groupSubItemProps: PropTypes.object,
  groupItemProps: PropTypes.object,
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  removeBorders: PropTypes.bool,
};

export default AccordionEditorial;