import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Button = props => {

  const getClass = classnames({
    'ds-button': true,
    'disabled': props.disabled,
    'fullWidth': props.fullWidth,
    [`${props.variant}`]: true,
    [`${props.color}`]: true,
    [`${props.className}`]: props.className,
  });

  return (
    <button
      className={getClass}
      disabled={props.disabled}
      onClick={!props.disabled && props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Permite a estilização do componente
   */
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  color: PropTypes.oneOf('primary', 'secondary'),
  style: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  variant: 'filled',
  color: 'primary'
};

export default Button;