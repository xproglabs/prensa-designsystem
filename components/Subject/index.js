import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import {SubjectTypography} from '../Typography';

const Subject = props => {
  const {children, color, className, style, size, filled} = props;

  if (!children) return null;

  const classes = classnames({
    'Prensa-Subject-root': true,
    'filled': filled,
    [`color-${color}`]: true,
    [`${className}`]: className
  });

  return (
    <div className={classes} style={style}>
      <SubjectTypography size={size} color={filled ? 'color-white' : color} >{children}</SubjectTypography>
    </div>
  );
};

Subject.defaultProps = {
  color: 'primary-1',
  filled: false,
  size: 1
};

Subject.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  filled: PropTypes.bool,
  style: PropTypes.object,
  size: PropTypes.oneOf([1, 2, 3])
};

export default Subject;