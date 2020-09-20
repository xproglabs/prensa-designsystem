import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';

const Date = props => {

  const {
    className,
    children,
    color,
    style,
    size,
    weight
  } = props;

  const classes = classnames({
    'Typography-Date-root': true,
    [`size-${size} ${weight} color-${color}`]: true,
    [className]: className,
  });

  return <span className={classes} style={style}>{children}</span>;
};

export default Date;

Date.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular',
};

Date.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};