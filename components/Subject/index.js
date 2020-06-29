import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Typography from '../Typography';

const Subject = props => {
  const {children, custom, filled} = props;

  if (!children) return null;

  const classes = classnames({
    'xp-subject-root': true,
    'filled': filled,
    [`${custom}`]: custom
  });

  return (
    <div className={classes}>
      <Typography subject>{children}</Typography>
    </div>
  );
};

Subject.propTypes = {
  children: PropTypes.string.isRequired,
  custom: PropTypes.string,
  filled: PropTypes.bool,
  // size: PropTypes.oneOf([
  //   'sm', 'md', 'lg'
  // ])
};

export default Subject;