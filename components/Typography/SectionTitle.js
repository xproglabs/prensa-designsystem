import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';

const SectionTitle = props => {

  const {
    className,
    children,
    color,
    style,
    size,
  } = props;

  const classes = classnames({
    'Typography-SectionTitle-root': true,
    [`size-${size} color-${color}`]: true,
    [className]: className,
  });

  return <span className={classes} style={style}>{children}</span>;
};

export default SectionTitle;

SectionTitle.defaultProps = {
  color: 'primary-1',
  size: 1,
};

SectionTitle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
};