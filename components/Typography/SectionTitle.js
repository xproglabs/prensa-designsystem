import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weight from '../../styles/variables/weight.json';

const SectionTitle = props => {

  const {
    className,
    children,
    color,
    gutter,
    style,
    size,
    weight
  } = props;

  const classes = classnames({
    'Typography-SectionTitle-root': true,
    [`size-${size} ${weight} color-${color} mb-${gutter}`]: true,
    [className]: className,
  });

  return <h1 className={classes} style={style}>{children}</h1>;
};

export default SectionTitle;

SectionTitle.defaultProps = {
  color: 'primary-1',
  gutter: 1,
  size: 1,
  weight: 'regular'
};

SectionTitle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  gutter: PropTypes.oneOf([1, 2, 3]),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(weight)
};