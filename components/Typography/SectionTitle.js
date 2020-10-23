import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weight from '../../styles/variables/weight.json';

const SectionTitle = ({className, children, color, gutter, style, size, uppercase, weight}) => {

  const classes = classnames({
    'Typography-SectionTitle-root': true,
    [`size-${size} ${weight} color-${color} mb-${gutter}`]: true,
    'uppercase': uppercase,
    [className]: className,
  });

  return <h1 className={classes} style={style}>{children}</h1>;
};

export default SectionTitle;

SectionTitle.defaultProps = {
  color: 'primary-1',
  gutter: 1,
  size: 1,
  weight: 'regular',
  uppercase: true,
};

SectionTitle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  gutter: PropTypes.oneOf([0, 1, 2, 3]),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf(weight)
};