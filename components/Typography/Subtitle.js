import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weight from '../../styles/variables/weight.json';

const Subtitle = props => {

  const {
    className,
    children,
    color,
    style,
    size,
    weight
  } = props;

  const classes = classnames({
    'Typography-Subtitle-root': true,
    [`size-${size} ${weight} color-${color}`]: true,
    [className]: className,
  });

  return <h3 className={classes} style={style}>{children}</h3>;
};

export default Subtitle;

Subtitle.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular',
};

Subtitle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(weight)
};