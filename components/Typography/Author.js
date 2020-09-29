import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weight from '../../styles/variables/weight.json';

const Author = props => {

  const {
    className,
    children,
    color,
    style,
    size,
    weight
  } = props;

  const classes = classnames({
    'Typography-Author-root': true,
    [`size-${size} ${weight} color-${color}`]: true,
    [className]: className,
  });

  return <span className={classes} style={style}>{children}</span>;
};

export default Author;

Author.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular',
};

Author.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(weight)
};