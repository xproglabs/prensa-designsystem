import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';

const UrlLink = props => {

  const {
    className,
    children,
    color,
    style,
    size,
    weight
  } = props;

  const classes = classnames({
    'Typography-UrlLink-root': true,
    [`size-${size} ${weight} color-${color}`]: true,
    [className]: className,
  });

  return <a className={classes} style={style}>{children}</a>;
};

export default UrlLink;

UrlLink.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular',
};

UrlLink.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};