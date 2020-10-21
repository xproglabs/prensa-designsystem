import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weight from '../../styles/variables/weight.json';

const TagTypography = props => {

  const {
    className,
    children,
    color,
    style,
    size,
    weight
  } = props;

  const classes = classnames({
    'Typography-Tag-root': true,
    [`size-${size} ${weight} color-${color}`]: true,
    [className]: className,
  });

  return <p className={classes} style={style}>{children}</p>;
};

export default TagTypography;

TagTypography.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular',
};

TagTypography.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(weight)
};