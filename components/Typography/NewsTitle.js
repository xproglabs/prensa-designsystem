import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weight from '../../styles/variables/weight.json';

const NewsTitle = props => {

  const {
    className,
    children,
    color,
    style,
    size,
    weight,
    disableHover
  } = props;

  const classes = classnames({
    'Typography-NewsTitle-root': true,
    [`size-${size} ${weight} color-${color}`]: true,
    'has-hover': !disableHover,
    [className]: className,
  });

  return <h2 className={classes} style={style}>{children}</h2>;
};

export default NewsTitle;

NewsTitle.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular',
  disableHover: false,
};

NewsTitle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  disableHover: PropTypes.bool,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(weight)
};