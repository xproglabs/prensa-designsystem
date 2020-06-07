import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Typography = props => {

  const {
    children,
    size,
    title,
    subtitle,
    paragraph,
  } = props;

  const classes = classnames({
    [`xp-title-${size}`]: title,
    [`xp-subtitle-${size}`]: subtitle,
    [`xp-paragraph-${size}`]: paragraph,
  });

  return (
    <span className={classes}>{children}</span>
  );
};

Typography.defaultProps = {
  weight: 'regular'
};

Typography.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  size: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]).isRequired,
  title: PropTypes.bool,
  subtitle: PropTypes.bool,
  paragraph: PropTypes.bool,
};

export default Typography;