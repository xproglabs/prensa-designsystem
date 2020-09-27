import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';

const MostReadNumber = props => {

  const {
    className,
    children,
    color,
    style,
    size,
  } = props;

  const classes = classnames({
    'Typography-MostReadNumber-root': true,
    [`size-${size} color-${color}`]: true,
    [className]: className,
  });

  return <span className={classes} style={style}>{children}</span>;
};

export default MostReadNumber;

MostReadNumber.defaultProps = {
  color: 'primary-1',
  size: 1,
};

MostReadNumber.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
};