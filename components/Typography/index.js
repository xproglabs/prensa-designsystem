import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Typography = props => {

  const {
    className,
    children,
    color,
    style,
    variant,
    size,
    weight
  } = props;

  const getClassName = () => {
    switch(variant) {
      case 'subject':
      default:
        return `subject size${size} ${weight} color-${color}`;
    }
  };

  const classes = classnames({
    'Prensa-Typography-root': true,
    [getClassName()]: true,
    [className]: className,
  });

  switch(variant) {
    case 'subject':
      return <span className={classes} style={style}>{children}</span>;
    case 'newsTitle':
      return <h1></h1>;
  }
};

export default Typography;

Typography.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular',
};

Typography.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary-1', 'primary-2', 'primary-3']),
  variant: PropTypes.oneOf(['subject', 'newsTitle', 'subtitle', 'date']),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};